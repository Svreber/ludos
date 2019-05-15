<template>
  <div class="games-list">

    <a-button @click="goToGameCreation()">Add new game</a-button>

    <div class="games-container">
      <game-card :game="game"
                 :key="game.id"
                 v-for="game in games">
      </game-card>
    </div>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {GamesService} from '@/services/GamesService';
  import {IGame} from '@/interfaces/IGame';
  import {RouterService} from '@/services/RouterService';

  @Component({
    name: GamesList.tag
  })
  export class GamesList extends Vue {
    static tag = 'GamesList';

    games: Array<IGame> = [];

    created(): void {
      this.initializeGames();
    }

    private async initializeGames(): Promise<void> {
      this.games = await GamesService.queryGames();
    }

    goToGameCreation(): void {
      RouterService.goToGameCreation();
    }
  }

  export default GamesList;
</script>

<style lang="scss" scoped>
  .games-list {

    .games-container {
      margin: 20px;
    }
  }
</style>
