<template>
  <div>
    <Beverage
      :isIced="beverageStore.isIced"
      :base="beverageStore.currentBase"
      :creamer="beverageStore.currentCreamer"
      :syrup="beverageStore.currentSyrup"
    />

    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>

    <div class="controls">
      <div class="control">
        <label for="base">Base Beverage</label>
        <select id="base" v-model="beverageStore.currentBaseId">
          <option v-for="b in beverageStore.bases" :key="b.id" :value="b.id">
            {{ b.name }}
          </option>
        </select>
      </div>
      <div class="control">
        <label for="creamer">Creamer</label>
        <select id="creamer" v-model="beverageStore.currentCreamerId">
          <option v-for="c in beverageStore.creamers" :key="c.id" :value="c.id">
            {{ c.name }}
          </option>
        </select>
      </div>
      <div class="control">
        <label for="syrup">Syrup</label>
        <select id="syrup" v-model="beverageStore.currentSyrupId">
          <option v-for="s in beverageStore.syrups" :key="s.id" :value="s.id">
            {{ s.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="controls" style="margin-top: 1rem">
      <div class="control">
        <label for="bevName">Name</label>
        <input id="bevName" v-model="bevName" type="text" placeholder="Beverage Name" />
      </div>
      <div class="control" style="justify-content: end">
        <button @click="handleMakeBeverage">Make Beverage</button>
      </div>
    </div>
  </div>

  <div id="beverage-container" style="margin-top: 20px">
    <div v-if="beverageStore.beverages.length === 0">No saved beverages yet.</div>
    <ul v-else>
      <li v-for="bev in beverageStore.beverages" :key="bev.id">
        <label>
          <input
            type="radio"
            name="saved-beverage"
            :value="bev.id"
            v-model="beverageStore.selectedBeverageId"
            @change="beverageStore.showBeverage(bev.id)"
          />
          {{ bev.name }}
        </label>
      </li>
    </ul>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
const bevName = ref<string>("");

const handleMakeBeverage = () => {
  beverageStore.makeBeverage(bevName.value);
  bevName.value = "";
};
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
.controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}
.control {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
}
select {
  padding: 0.25rem 0.5rem;
}
</style>
