import { defineStore } from "pinia";
import tempsData from "../data/tempretures.json";
import basesData from "../data/bases.json";
import creamersData from "../data/creamers.json";
import syrupsData from "../data/syrups.json";
import type {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempsData as string[],
    bases: basesData as BaseBeverageType[],
    creamers: creamersData as CreamerType[],
    syrups: syrupsData as SyrupType[],

    currentTemp: (tempsData as string[])[0],
    currentBaseId: (basesData as BaseBeverageType[])[0]?.id || "",
    currentCreamerId: (creamersData as CreamerType[])[0]?.id || "",
    currentSyrupId: (syrupsData as SyrupType[])[0]?.id || "",

    beverages: [] as BeverageType[],
    selectedBeverageId: "" as string,
  }),

  getters: {
    currentBase(state): BaseBeverageType {
      return (
        state.bases.find((b) => b.id === state.currentBaseId) || state.bases[0]
      );
    },
    currentCreamer(state): CreamerType {
      return (
        state.creamers.find((c) => c.id === state.currentCreamerId) ||
        state.creamers[0]
      );
    },
    currentSyrup(state): SyrupType {
      return (
        state.syrups.find((s) => s.id === state.currentSyrupId) || state.syrups[0]
      );
    },
    isIced(state): boolean {
      return state.currentTemp === "Cold";
    },
  },

  actions: {
    makeBeverage(name: string) {
      const cleanName = (name || "").trim();
      if (!cleanName) return;

      const id = `bev_${Date.now()}`;
      const beverage: BeverageType = {
        id,
        name: cleanName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      };
      this.beverages.push(beverage);
      this.selectedBeverageId = id;
    },
    showBeverage(id: string) {
      const bev = this.beverages.find((b) => b.id === id);
      if (!bev) return;
      this.selectedBeverageId = id;
      this.currentTemp = bev.temp;
      this.currentBaseId = bev.base.id;
      this.currentCreamerId = bev.creamer.id;
      this.currentSyrupId = bev.syrup.id;
    },
  },
  persist: true,
});
