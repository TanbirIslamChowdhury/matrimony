import { createWebHistory, createRouter } from "vue-router";

const routes =  [
   {
     path: "/",
     alias: "/home",
     name: "login",
     component: () => import("./components/Home")
   },
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