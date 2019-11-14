import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import animeClass from "@/anime"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { border: true }
  },
  {
    path: "/work",
    name: "work",
    meta: { border: true },

    component: () => import(/* webpackChunkName: "work" */ "../views/Work.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  routes
});
// router.beforeEach((to, from, next) => {
//   const anime = new animeClass();
//   next(vm =>{
//     anime.runBorder()
//   })
// })
export default router;
