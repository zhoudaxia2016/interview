import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./components/home")
    },
    {
      path: "/coding",
      component: () => import("./components/write")
    },
    {
      path: "/three-column-layout",
      component: () => import("./components/write/three-column-layout")
    },
    {
      path: "/concepts",
      component: () => import("./components/concepts")
    }
  ]
});

export default router;
