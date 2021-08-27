import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GameNotificationPage from "../views/GameNotificationPage.vue";
import GameProviderPage from "../views/GameProviderPage.vue";
import GameFiltersPage from "../views/GameFiltersPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/game-notification/:id',
    name: 'GameNotificationPage',
    component: GameNotificationPage,
    props: true,
  },
  {
    path: '/game-provider/:id',
    name: 'GameProviderPage',
    component: GameProviderPage,
    props: true,
  },
  {
    path: '/game-category/:categoryId',
    name: 'GameFiltersPage',
    component: GameFiltersPage,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
