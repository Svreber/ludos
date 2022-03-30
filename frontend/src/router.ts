import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import GamesList from './views/GamesList.vue';
import CreateGame from './views/CreateGame.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'games',
        component: GamesList
    }, {
        path: '/create',
        name: 'createGame',
        component: CreateGame
    }
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
