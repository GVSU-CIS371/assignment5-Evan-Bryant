<template>
  <div class="app">
    <div v-if="beverageStore.currentBase && beverageStore.currentCreamer && beverageStore.currentSyrup">
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
          <button @click="handleMakeBeverage">Make Beverage</button>
        </div>
      </div>
    </div>
    <div v-else>Loading beverages...</div>
  </div>

  <div id="beverage-container">
    <div v-if="beverageStore.beverages.length === 0">No beverages yet.</div>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import type { BeverageType } from "./types/beverage";

export default defineComponent({
  name: "App",
  components: {
    Beverage,
  },
  data() {
    return {
      newBeverageName: "",
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
  methods: {
    handleMakeBeverage() {
      const cleanName = this.newBeverageName.trim();
      if (!cleanName) {
        return;
      }
      this.beverageStore.makeBeverage(cleanName);
      this.newBeverageName = "";
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
<<<<<<< HEAD

ul {
  list-style: none;
}

.auth-row {
  margin-top: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-label {
  color: #ffffff;
  font-size: 0.9rem;
}

.hint {
  margin-top: 4px;
  color: #ffffff;
  font-size: 0.85rem;
}

.status-message {
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 4px;
  background: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  font-size: 0.9rem;
=======
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
>>>>>>> a4/main
}
</style>
