<template>
  <div class="game-image-display">

    <img height="100"
         width="100"
         v-if="image"
         :src="image">
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { IGame } from "../interfaces/IGame";
import { BGGService } from "../services/BGGService";

const props = defineProps({
  game: {
    required: true,
    type: Object as PropType<IGame>
  }
});

const image = ref<string | null>(null)

BGGService.getImageForGame(props.game.bggId)
  .then(imageSrc => image.value = imageSrc);
</script>

<style lang="less" scoped>
  .game-image-display {
  }
</style>
