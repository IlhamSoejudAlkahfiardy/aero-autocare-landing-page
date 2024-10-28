import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../page/Homepage.vue";
import Career from "../page/Career.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/career",
    name: "Career",
    component: Career,
  },
  // Rute lain bisa ditambahkan di sini
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
