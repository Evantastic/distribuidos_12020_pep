import Vue from "vue";
import VueRouter from "vue-router";
import Generar from "../views/Generar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Generar
  },
  {
    path: "/validar",
    name: "Validar",
    component: () => import("../views/Validar.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
