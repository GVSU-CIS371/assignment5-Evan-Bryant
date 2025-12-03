<template>
  <div class="app">
    <section class="auth-panel" v-if="beverageStore.user">
      <div class="user-info">
        <p>
          Signed in as
          <strong>{{ beverageStore.user.displayName || beverageStore.user.email }}</strong>
        </p>
        <button class="action-button" @click="signOutUser">Sign out</button>
      </div>
    </section>

    <p v-if="statusMessage" class="status-message">{{ statusMessage }}</p>

    <div v-if="beverageStore.currentBase && beverageStore.currentCreamer && beverageStore.currentSyrup" class="beverage-builder">
      <Beverage
        :isIced="beverageStore.isIced"
        :base="beverageStore.currentBase"
        :creamer="beverageStore.currentCreamer"
        :syrup="beverageStore.currentSyrup"
      />

      <div class="temps">
        <label v-for="temp in beverageStore.temps" :key="temp" class="temp-option">
          <input type="radio" name="temperature" :value="temp" v-model="selectedTemp" />
          {{ temp }}
        </label>
      </div>

      <div class="controls">
        <div class="control">
          <label for="base">Base Beverage</label>
          <select id="base" v-model="selectedBaseId">
            <option v-for="b in beverageStore.bases" :key="b.id" :value="b.id">
              {{ b.name }}
            </option>
          </select>
        </div>
        <div class="control">
          <label for="creamer">Creamer</label>
          <select id="creamer" v-model="selectedCreamerId">
            <option v-for="c in beverageStore.creamers" :key="c.id" :value="c.id">
              {{ c.name }}
            </option>
          </select>
        </div>
        <div class="control">
          <label for="syrup">Syrup</label>
          <select id="syrup" v-model="selectedSyrupId">
            <option v-for="s in beverageStore.syrups" :key="s.id" :value="s.id">
              {{ s.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="name-row">
        <div class="control beverage-name">
          <label for="beverageName">Beverage Name</label>
          <input
            id="beverageName"
            type="text"
            v-model="newBeverageName"
            placeholder="Enter a name"
            @keyup.enter="handleMakeBeverage"
          />
        </div>
        <div class="control make-beverage">
          <button class="action-button" @click="handleMakeBeverage" :disabled="!beverageStore.user">
            Make Beverage
          </button>
        </div>
        <div class="control make-beverage" v-if="!beverageStore.user">
          <button class="action-button" @click="withGoogle">Sign in with Google</button>
        </div>
      </div>
    </div>
    <div v-else>Loading beverages...</div>
  </div>

  <div id="beverage-container" v-if="beverageStore.user">
    <div v-if="beverageStore.beverages.length === 0">No beverages yet. Make one to see it here.</div>
    <div v-else>
      <div v-for="bev in beverageStore.beverages" :key="bev.id" class="beverage-option">
        <label>
          <input
            type="radio"
            name="saved-beverage"
            :checked="isCurrentSelection(bev)"
            @change="beverageStore.showBeverage(bev)"
          />
          {{ bev.name }}
        </label>
      </div>
    </div>
  </div>
  <div v-else class="saved-placeholder">Sign in to load your saved beverages.</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type Unsubscribe,
} from "firebase/auth";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import type { BeverageType } from "./types/beverage";
import { auth } from "./firebase";

export default defineComponent({
  name: "App",
  components: {
    Beverage,
  },
  data() {
    return {
      newBeverageName: "",
      statusMessage: "",
      authUnsubscribe: null as Unsubscribe | null,
    };
  },
  computed: {
    beverageStore(): ReturnType<typeof useBeverageStore> {
      return useBeverageStore();
    },
    selectedBaseId: {
      get(): string {
        return this.beverageStore.currentBase?.id || "";
      },
      set(value: string) {
        const base = this.beverageStore.bases.find((b) => b.id === value) || null;
        this.beverageStore.currentBase = base;
      },
    },
    selectedCreamerId: {
      get(): string {
        return this.beverageStore.currentCreamer?.id || "";
      },
      set(value: string) {
        const creamer = this.beverageStore.creamers.find((c) => c.id === value) || null;
        this.beverageStore.currentCreamer = creamer;
      },
    },
    selectedSyrupId: {
      get(): string {
        return this.beverageStore.currentSyrup?.id || "";
      },
      set(value: string) {
        const syrup = this.beverageStore.syrups.find((s) => s.id === value) || null;
        this.beverageStore.currentSyrup = syrup;
      },
    },
    selectedTemp: {
      get(): string {
        return this.beverageStore.currentTemp || "";
      },
      set(value: string) {
        this.beverageStore.currentTemp = value;
      },
    },
  },
  created() {
    this.authUnsubscribe = onAuthStateChanged(auth, (user) => {
      this.beverageStore.setUser(user);
      if (!user) {
        this.statusMessage = "Signed out. Sign in to see your beverages.";
      }
    });
  },
  beforeUnmount() {
    if (this.authUnsubscribe) {
      this.authUnsubscribe();
      this.authUnsubscribe = null;
    }
  },
  methods: {
    async handleMakeBeverage() {
      const cleanName = this.newBeverageName.trim();
      if (!cleanName) {
        this.statusMessage =
          "Please complete all beverage options and the name before making a beverage.";
        return;
      }
      const result = await this.beverageStore.makeBeverage(cleanName);
      this.statusMessage = result;
      if (result?.startsWith("Beverage")) {
        this.newBeverageName = "";
      }
    },
    async withGoogle() {
      const provider = new GoogleAuthProvider();
      this.statusMessage = "Signing in...";
      try {
        const credential = await signInWithPopup(auth, provider);
        const name = credential.user.displayName || credential.user.email || "User";
        this.statusMessage = `Signed in as ${name}.`;
      } catch (error) {
        const message = error instanceof Error ? error.message : "Could not sign in.";
        this.statusMessage = message;
      }
    },
    async signOutUser() {
      try {
        await signOut(auth);
        this.statusMessage = "Signed out. Sign in to see your beverages.";
      } catch (error) {
        const message = error instanceof Error ? error.message : "Could not sign out.";
        this.statusMessage = message;
      }
    },
    isCurrentSelection(beverage: BeverageType) {
      return (
        this.beverageStore.currentBase?.id === beverage.base.id &&
        this.beverageStore.currentCreamer?.id === beverage.creamer.id &&
        this.beverageStore.currentSyrup?.id === beverage.syrup.id &&
        this.beverageStore.currentTemp === beverage.temp
      );
    },
  },
});
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.beverage-builder {
  padding-top: 5rem;
}
.auth-panel {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  color: #fff;
}
.auth-panel button {
  margin-top: 0.5rem;
}
.action-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #ffffff;
  color: black;
}
.status-message {
  color: #fff;
  min-height: 1.5rem;
}
.saved-placeholder {
  color: #fff;
  margin-top: 1rem;
}
.controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}
.temps {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}
.temp-option {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.control {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
}
.make-beverage {
  margin-top: 1rem;
}
.name-row {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  margin-top: 1rem;
}
.name-row input {
  padding: 0.25rem 0.5rem;
  min-width: 220px;
}
select {
  padding: 0.25rem 0.5rem;
}
#beverage-container {
  margin-top: 1.5rem;
}
.beverage-option {
  margin-bottom: 0.5rem;
}
</style>
