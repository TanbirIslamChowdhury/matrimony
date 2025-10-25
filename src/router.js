import { createWebHistory, createRouter } from "vue-router";

const routes =  [
   {
     path: "/",
     alias: "/home",
     name: "home",
     component: () => import("./components/Home")
   },
   {
     path: "/about",
     alias: "/about",
     name: "about",
      component: () => import("./components/About")
   },
    {
      path: "/story"  ,
      alias: "/story",
      name: "story",
      component: () => import("./components/Story")
    },
       {
      path: "/timeline"  ,
      alias: "/timeline",
      name: "timeline",
      component: () => import("./components/Timeline")
    },
       {
      path: "/gallery"  ,
      alias: "/gallery",
      name: "gallery",
      component: () => import("./components/Gallery")
    },
       {
      path: "/rsvp"  ,
      alias: "/rsvp",
      name: "rsvp",
      component: () => import("./components/Rsvp")
    },
    


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;