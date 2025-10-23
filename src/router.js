import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  // {
  //   path: "/",
  //   alias: "/login",
  //   name: "login",
  //   component: () => import("./components/LoginForm")
  // },
  // {
  //   path: "/dashboard",
  //   alias: "/dashboard",
  //   name: "dashboard",
  //   component: () => import("./components/Dashboard")
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;