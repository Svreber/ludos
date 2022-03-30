import { Plugin } from "@vue/runtime-core";
import PlayersCountDisplay from "./PlayersCountDisplay.vue";
import PlayTimeDisplay from "./PlayTimeDisplay.vue";
import GameImageDisplay from "./GameImageDisplay.vue";
import GameCard from "./GameCard.vue";
import GameFilters from "./GameFilters.vue";
import GamesImport from "./GamesImport.vue";

export const components: Plugin = (app) => {
  app.component("PlayersCountDisplay", PlayersCountDisplay)
  app.component("PlayTimeDisplay", PlayTimeDisplay)
  app.component("GameImageDisplay", GameImageDisplay)
  app.component("GameCard", GameCard)
  app.component("GameFilters", GameFilters)
  app.component("GamesImport", GamesImport)
}