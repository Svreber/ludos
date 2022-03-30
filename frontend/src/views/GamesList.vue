<template>
  <div class="games-list">

    <a-form class="games-form"
            layout="inline">

      <game-filters @change="params => initializeGames(params)"></game-filters>

      <a-form-item>
        <a-button @click="goToGameCreation()">
          <font-awesome-icon icon="plus"/>
          <span>
            Add new game
          </span>
        </a-button>
      </a-form-item>

      <a-form-item>
        <games-import @change="initializeGames()"></games-import>
      </a-form-item>

      <a-form-item>
        <a-button @click="editGames()">
          <font-awesome-icon icon="edit"/>
          <span>
            Edit
          </span>
        </a-button>
      </a-form-item>

    </a-form>

    <game-card v-for="game in games"
               :game="game"
               :key="game.id"
               :show-actions="isEdition"
               @change="initializeGames()">
    </game-card>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IGame } from "../interfaces/IGame";
import { IGamesSearchParameters } from "../interfaces/IGamesSearchParameters";
import { GamesService } from "../services/GamesService";
import { GamesSearchService } from "../services/GamesSearchService";
import { RouterService } from "../services/RouterService";

const games = ref<Array<IGame>>([]);
const isEdition = ref<boolean>(false);

const initializeGames = async (searchParams?: IGamesSearchParameters): void => {
  const allGames = await GamesService.queryGames();
  games.value = GamesSearchService.getGames(allGames, searchParams);
}

const goToGameCreation = (): void => {
  RouterService.goToGameCreation();
}

const editGames = (): void => {
  isEdition.value = !isEdition.value;
}

initializeGames();

</script>

<style lang="less" scoped>
  .games-list {
    margin: 1rem;

    .games-form,
    .game-card {
      margin: .5rem;
    }
  }
</style>
