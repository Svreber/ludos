<template>
  <div class="create-game">

    <h1>Create a new game</h1>

    <a-form>

      <a-form-item label="Name"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input placeholder="Name"
                 v-model:value="game.name">
        </a-input>

      </a-form-item>

      <a-form-item label="Players count"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input-number :min="1"
                        placeholder="Min"
                        v-model:value="game.playersCountMin">
        </a-input-number>

        <span> - </span>

        <a-input-number :min="game.playersCountMin"
                        placeholder="Max"
                        v-model:value="game.playersCountMax">
        </a-input-number>

      </a-form-item>

      <a-form-item label="Play time (minutes)"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input-number :min="0"
                        placeholder="Min"
                        v-model:value="game.playTimeMin">
        </a-input-number>

        <span> - </span>

        <a-input-number :min="game.playTimeMin"
                        placeholder="Max"
                        v-model:value="game.playTimeMax">
        </a-input-number>

      </a-form-item>

      <a-form-item label="ID Boardgamegeek"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input-number placeholder="ID Boardgamegeek"
                        v-model:value="game.bggId">
        </a-input-number>

      </a-form-item>

      <a-form-item label="URL TricTrac"
                   :label-col="{ span: 5 }"
                   :wrapper-col="{ span: 12 }">

        <a-input placeholder="URL TricTrac"
                 v-model:value="game.urlTT">
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

<script setup lang="ts">
import { reactive } from "vue";
import { INonPersistedGame } from "../interfaces/IGame";
import { GamesService } from "../services/GamesService";
import { RouterService } from "../services/RouterService";

const game = reactive<INonPersistedGame>({})

const saveGame = async (): Promise<void> => {
  await GamesService.saveGame(game);
  RouterService.goToGamesList();
}

</script>

<style lang="less" scoped>
  .create-game {
  }
</style>
