import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GameNotificationPage from "../views/GameNotificationPage.vue";
import GameProviderPage from "../views/GameProviderPage.vue";
import GameFiltersPage from "../views/GameFiltersPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

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
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
