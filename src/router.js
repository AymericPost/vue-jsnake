import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Game from "./views/Game.vue";
import GameOver from "./views/GameOver.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameMenu',
      component: Menu
    },
    {
      path: "/game",
      name: "Game",
      component: Game
    },
    {
      path:"/game-over",
      name: "GameOver",
      component: GameOver
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
