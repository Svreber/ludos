<template>
  <div class="play-time-display">

    <font-awesome-icon icon="clock"/>

    {{playTimeString}}

  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  playTimeMax: {
    required: true,
    type: Number as PropType<number>
  },
  playTimeMin: {
    required: true,
    type: Number as PropType<number>
  }
});

const playTimeString = computed<string>(() => {
  return props.playTimeMin === props.playTimeMax ? `${props.playTimeMin}` : `${props.playTimeMin} - ${props.playTimeMax}`;
})
</script>

<style lang="less" scoped>
  .play-time-display {
  }
</style>
