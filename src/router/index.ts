import WelcomeView from "@/views/WelcomeView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomeView,
  },
  {
    path: "/css",
    name: "CSS",
    component: () => import("../views/CssView.vue"),
  },
  {
    path: "/html",
    name: "HTML",
    component: () => import("../views/HtmlView.vue"),
  },
  {
    path: "/algorithm",
    name: "Algorithm",
    component: () => import("../views/AlgorithmView.vue"),
  },
  {
    path: "/algorithm",
    name: "Algorithm",
    component: () => import("../views/AlgorithmView.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/SearchView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
