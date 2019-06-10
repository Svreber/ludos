import Vue from 'vue';
import GameCard from './GameCard.vue';
import GameFilters from '@/components/GameFilters.vue';
import GameImageDisplay from '@/components/GameImageDisplay.vue';
import GamesImport from '@/components/GamesImport.vue';
import PlayTimeDisplay from '@/components/PlayTimeDisplay.vue';
import PlayersCountDisplay from '@/components/PlayersCountDisplay.vue';

Vue.component(GameCard.tag, GameCard);
Vue.component(GameFilters.tag, GameFilters);
Vue.component(GameImageDisplay.tag, GameImageDisplay);
Vue.component(GamesImport.tag, GamesImport);
Vue.component(PlayTimeDisplay.tag, PlayTimeDisplay);
Vue.component(PlayersCountDisplay.tag, PlayersCountDisplay);
