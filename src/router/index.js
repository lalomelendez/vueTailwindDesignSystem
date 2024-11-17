import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Buttons from "../components/Buttons.vue";
import Cards from "../components/Cards.vue";
import Forms from "../components/Forms.vue";
import MessagesAlerts from "../components/MessagesAlerts.vue";
import PhotoGallery from "../components/PhotoGallery.vue";
import Modals from "../components/Modals.vue";
import Tabs from "../components/Tabs.vue";
import Dropdowns from "../components/Dropdowns.vue";
import Tooltips from "../components/Tooltips.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/buttons", component: Buttons },
  { path: "/cards", component: Cards },
  { path: "/forms", component: Forms },
  { path: "/messages-alerts", component: MessagesAlerts },
  { path: "/photo-gallery", component: PhotoGallery },
  { path: "/modals", component: Modals },
  { path: "/tabs", component: Tabs },
  { path: "/dropdowns", component: Dropdowns },
  { path: "/tooltips", component: Tooltips },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
