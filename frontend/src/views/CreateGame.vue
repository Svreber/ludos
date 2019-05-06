<template>
  <div class="create-game">

    <h1>Create a new game</h1>

    <a-form>

      <a-form-item label="Name"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input placeholder="Name"
                 v-model="game.name">
        </a-input>

      </a-form-item>

      <a-form-item label="Players count"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input-number :min="1"
                        placeholder="Min"
                        v-model="game.playersCountMin">
        </a-input-number>

        <span> - </span>

        <a-input-number :min="game.playersCountMin"
                        placeholder="Max"
                        v-model="game.playersCountMax">
        </a-input-number>

      </a-form-item>

      <a-form-item label="Play time (minutes)"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input-number :min="0"
                        placeholder="Min"
                        v-model="game.playTimeMin">
        </a-input-number>

        <span> - </span>

        <a-input-number :min="game.playTimeMin"
                        placeholder="Max"
                        v-model="game.playTimeMax">
        </a-input-number>

      </a-form-item>

      <a-form-item label="ID Boardgamegeek"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input placeholder="ID Boardgamegeek"
                 v-model="game.bggId">
        </a-input>

      </a-form-item>

      <a-form-item label="URL TricTrac"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input placeholder="URL TricTrac"
                 v-model="game.urlTT">
        </a-input>

      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button @click="saveGame()"
                  html-type="submit"
                  type="primary">
          Save
        </a-button>
      </a-form-item>

    </a-form>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {GamesService} from '@/services/games.service';
  import {INonPersistedGame} from '@/interfaces/IGame';
  import {RouterService} from '@/services/Router.service';

  @Component({
    name: CreateGame.tag
  })
  export class CreateGame extends Vue {
    static tag = 'CreateGame';

    game: INonPersistedGame = {};

    async saveGame(): Promise<void> {
      await GamesService.saveGame(this.game);
      RouterService.goToGamesList();
    }
  }

  export default CreateGame;
</script>

<style lang="scss" scoped>
  .create-game {
  }
</style>
