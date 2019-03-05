import Vue from 'vue';
import Router from 'vue-router';
import GamesList from '@/views/GamesList.vue';
import CreateGame from '@/views/CreateGame.vue';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faClock, faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faClock);
library.add(faUsers);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'games',
      component: GamesList
    },
    {
      path: '/create',
      name: 'createGame',
      component: CreateGame
    }
  ],
});
