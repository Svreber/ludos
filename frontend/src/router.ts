import Vue from 'vue';
import Router from 'vue-router';
import GamesList from '@/views/GamesList.vue';
import CreateGame from '@/views/CreateGame.vue';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'games',
      component: GamesList
    }, {
      path: '/create',
      name: 'createGame',
      component: CreateGame
    }
  ],
});
