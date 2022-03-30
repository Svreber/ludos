<template>
  <div class="game-card">
    <a-card :title="game.name">

      <game-image-display class="game-image"
                          :game="game">
      </game-image-display>

      <play-time-display class="play-time"
                         :play-time-max="game.playTimeMax"
                         :play-time-min="game.playTimeMin">
      </play-time-display>

      <players-count-display class="players-count"
                             :players-count-max="game.playersCountMax"
                             :players-count-min="game.playersCountMin">
      </players-count-display>

      <template class="ant-card-actions"
                slot="actions"
                v-if="showActions">
        <font-awesome-icon icon="remove" @click="deleteGame()"/>
        <font-awesome-icon icon="edit"/>
      </template>

    </a-card>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IGame } from "../interfaces/IGame";
import { GamesService } from "../services/GamesService";

const props = defineProps({
  game: {
    required: true,
    type: Object as PropType<IGame>
  },
  showActions: {
    required: true,
    type: Boolean as PropType<boolean>
  }
});

const emit = defineEmits<{
  (e: 'change'): void
}>();

const deleteGame = async (): Promise<void> => {
  await GamesService.deleteGame(props.game);
  emit('change')
}

</script>

<style lang="less" scoped>
  .game-card {
    display: inline-block;
    text-align: center;

    .name {
      font-size: large;
      font-weight: bold;
    }

    .game-image {
      margin-bottom: 1rem;
    }

    .play-time,
    .players-count {
      color: grey;
    }
  }
</style>
