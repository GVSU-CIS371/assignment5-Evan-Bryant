import { defineStore } from "pinia";
import type { User } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
  type Unsubscribe,
} from "firebase/firestore";
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
    currentBeverage: null as BeverageType | null,
    user: null as User | null,
    beverageListener: null as Unsubscribe | null,
  }),

  getters: {
    isIced(state): boolean {
      return state.currentTemp === "Cold";
    },
  },

  actions: {
    async init() {
      if (this.bases.length) return;

      const [bases, creamers, syrups] = await Promise.all([
        getCollectionDocs<BaseBeverageType>("bases"),
        getCollectionDocs<CreamerType>("creamers"),
        getCollectionDocs<SyrupType>("syrups"),
      ]);

      this.bases = bases;
      this.creamers = creamers;
      this.syrups = syrups;

      this.currentBase = this.bases[0] || null;
      this.currentCreamer = this.creamers[0] || null;
      this.currentSyrup = this.syrups[0] || null;
    },
    setUser(user: User | null) {
      if (this.user?.uid === user?.uid) {
        this.user = user;
        return;
      }

      this.stopBeverageListener();
      this.user = user;
      this.beverages = [];
      this.currentBeverage = null;

      if (!user) {
        return;
      }

      const beveragesRef = collection(db, "beverages");
      const beveragesQuery = query(
        beveragesRef,
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      this.beverageListener = onSnapshot(beveragesQuery, (snapshot) => {
        const nextBeverages = snapshot.docs.map((docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            name: data.name,
            base: data.base,
            creamer: data.creamer,
            syrup: data.syrup,
            temp: data.temp,
          } as BeverageType;
        });

        this.beverages = nextBeverages;
        if (nextBeverages.length) {
          this.showBeverage(nextBeverages[0]);
        } else {
          this.currentBeverage = null;
        }
      });
    },
    stopBeverageListener() {
      if (this.beverageListener) {
        this.beverageListener();
        this.beverageListener = null;
      }
    },
    async makeBeverage(name: string) {
      if (!this.user) {
        return "No user logged in, please sign in first.";
      }

      if (
        !this.currentBase ||
        !this.currentCreamer ||
        !this.currentSyrup ||
        !this.currentTemp
      ) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

      const cleanName = (name || "").trim();
      if (!cleanName) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

      const beveragesRef = collection(db, "beverages");
      const beverageId = `${this.user.uid}-${Date.now()}`;
      const payload = {
        name: cleanName,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temp: this.currentTemp,
        uid: this.user.uid,
        createdAt: serverTimestamp(),
      };

      await setDoc(doc(beveragesRef, beverageId), payload);

      const newBeverage: BeverageType = {
        id: beverageId,
        name: cleanName,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temp: this.currentTemp,
      };

      this.beverages = [newBeverage, ...this.beverages.filter((b) => b.id !== beverageId)];
      this.showBeverage(newBeverage);
      return `Beverage ${cleanName} made successfully!`;
    },
    showBeverage(bev: BeverageType) {
      this.currentBase = bev.base;
      this.currentCreamer = bev.creamer;
      this.currentSyrup = bev.syrup;
      this.currentTemp = bev.temp || (this.temps[0] as string) || this.currentTemp;
      this.currentBeverage = bev;
    },
  },
});
