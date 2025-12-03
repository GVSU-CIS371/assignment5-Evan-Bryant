import { defineStore } from "pinia";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import tempsData from "../data/tempretures.json";
import type {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";

type BeverageCollections = "bases" | "creamers" | "syrups" | "beverages";

const getCollectionDocs = async <T>(collectionName: BeverageCollections) => {
  const snap = await getDocs(query(collection(db, collectionName)));
  return snap.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as T)
  );
};

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempsData as string[],
    bases: [] as BaseBeverageType[],
    creamers: [] as CreamerType[],
    syrups: [] as SyrupType[],
    beverages: [] as BeverageType[],
    currentBase: null as BaseBeverageType | null,
    currentCreamer: null as CreamerType | null,
    currentSyrup: null as SyrupType | null,
    currentTemp: ((tempsData as string[])[0] as string) || "Hot",
  }),

  getters: {
    isIced(state): boolean {
      return state.currentTemp === "Cold";
    },
  },

  actions: {
    async init() {
      if (this.bases.length) return;

      const [bases, creamers, syrups, beverages] = await Promise.all([
        getCollectionDocs<BaseBeverageType>("bases"),
        getCollectionDocs<CreamerType>("creamers"),
        getCollectionDocs<SyrupType>("syrups"),
        getCollectionDocs<BeverageType>("beverages"),
      ]);

      this.bases = bases;
      this.creamers = creamers;
      this.syrups = syrups;
      this.beverages = beverages;

      this.currentBase = this.bases[0] || null;
      this.currentCreamer = this.creamers[0] || null;
      this.currentSyrup = this.syrups[0] || null;
    },
    async makeBeverage(name: string) {
      if (
        !this.currentBase ||
        !this.currentCreamer ||
        !this.currentSyrup ||
        !this.currentTemp
      ) {
        return;
      }

      const cleanName = (name || "").trim();
      if (!cleanName) {
        return;
      }

      const newBeverage = {
        name: cleanName,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temp: this.currentTemp,
      };

      const docRef = await addDoc(collection(db, "beverages"), newBeverage);

      this.beverages.push({
        id: docRef.id,
        ...newBeverage,
      });
    },
    showBeverage(bev: BeverageType) {
      this.currentBase = bev.base;
      this.currentCreamer = bev.creamer;
      this.currentSyrup = bev.syrup;
      this.currentTemp = bev.temp || (this.temps[0] as string) || this.currentTemp;
    },
  },
});
