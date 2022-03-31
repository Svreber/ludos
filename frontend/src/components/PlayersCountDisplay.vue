<template>
  <div class="players-count-display">

    <font-awesome-icon icon="users"/>

    {{playersCountString}}

  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  playersCountMax: {
    required: true,
    type: Number as PropType<number>
  },
  playersCountMin: {
    required: true,
    type: Number as PropType<number>
  }
});

const playersCountString = computed<string>(() => {
  return props.playersCountMin === props.playersCountMax ? `${props.playersCountMin}` : `${props.playersCountMin} - ${props.playersCountMax}`;
})
</script>

<style lang="less" scoped>
  .players-count-display {
  }
</style>
