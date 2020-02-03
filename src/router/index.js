import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    // path: "/Movie/:id",
    path: "/movie/:id",
    name: "movie",
    component: () => import("../views/Movie.vue")
  },
  {
    path: "/category/:category",
    name: "category",
    component: () => import("../views/Category.vue")
  },
  {
    path: "/year/:year",
    name: "year",
    component: () => import("../views/Year.vue")
  },
  {
    path: "/top",
    name: "top",
    component: () => import("../views/Top.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
