import Vue from 'vue';
import GameCard from './GameCard.vue';
import PlayTimeDisplay from '@/components/PlayTimeDisplay.vue';
import PlayersCountDisplay from '@/components/PlayersCountDisplay.vue';
import GameImageDisplay from '@/components/GameImageDisplay.vue';

Vue.component(GameCard.tag, GameCard);
Vue.component(GameImageDisplay.tag, GameImageDisplay);
Vue.component(PlayTimeDisplay.tag, PlayTimeDisplay);
Vue.component(PlayersCountDisplay.tag, PlayersCountDisplay);
