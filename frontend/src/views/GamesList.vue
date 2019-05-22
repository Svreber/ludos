<template>
  <div class="games-list">

    <a-form layout="inline">

      <a-form-item>
        <a-input v-model="searchParams.name"
                 placeholder="Search for a game"
                 @change="initializeGames()"/>
      </a-form-item>

      <a-form-item>
        <a-input-number :min="1"
                        :max="20"
                        v-model="searchParams.playersCount"
                        @change="initializeGames()"/>
      </a-form-item>

      <a-form-item>
        <a-button @click="goToGameCreation()">
          <a-icon type="plus"></a-icon>
          Add new game
        </a-button>
      </a-form-item>

      <a-form-item>
        <games-import @change="initializeGames()"></games-import>
      </a-form-item>

      <a-form-item>
        <a-button @click="editGames()">
          <a-icon type="edit"></a-icon>
          Edit
        </a-button>
      </a-form-item>

    </a-form>

    <div class="games-container">
      <game-card :game="game"
                 :key="game.id"
                 :show-actions="isEdition"
                 v-for="game in games"
                 @change="initializeGames()">
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
    isEdition: boolean = false;
    searchParams: any = {};

    created(): void {
      this.initializeGames();
    }

    private async initializeGames(): Promise<void> {
      this.games = await GamesService.queryGames();
    }

    goToGameCreation(): void {
      RouterService.goToGameCreation();
    }

    editGames(): void {
      this.isEdition = !this.isEdition;
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
