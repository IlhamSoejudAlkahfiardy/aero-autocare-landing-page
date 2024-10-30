import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../page/Homepage.vue";
import Career from "../page/Career.vue";
import Vision from "../page/Vision.vue";

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
  {
    path: "/vision",
    name: "Visi & Misi",
    component: Vision,
  },
  // Rute lain bisa ditambahkan di sini
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
