<template>
  <div class="games-list">

    <game-card :game="game"
               :key="game.id"
               v-for="game in games">
    </game-card>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {GamesService} from '@/services/games.service';
  import {IGame} from '@/interfaces/IGame';

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
  }

  export default GamesList;
</script>

<style lang="scss" scoped>
  .games-list {
  }
</style>
