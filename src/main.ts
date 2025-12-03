import { createApp } from "vue";
import "./styles/mug.scss";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useBeverageStore } from "./stores/beverageStore";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);

const store = useBeverageStore(pinia);

const start = async () => {
  try {
    await store.init();
  } catch (error) {
    console.error("Failed to load beverages from Firestore:", error);
  } finally {
    app.mount("#app");
  }
};

start();
