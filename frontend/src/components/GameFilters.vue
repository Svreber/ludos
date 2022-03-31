<template>
  <div class="game-filters">

    <a-form layout="inline">

      <a-form-item label="Name">
        <a-input v-model:value="searchParams.name"
                 placeholder="Search for a game"
                 @change="filtersChanged()"/>
      </a-form-item>

      <a-form-item label="Players count">
        <a-input-number :min="1"
                        :max="20"
                        placeholder="Players"
                        v-model:value="searchParams.playersCount"
                        @change="filtersChanged()"/>
      </a-form-item>

      <a-form-item label="Duration (minutes)">
        <a-input-number :min="1"
                        :max="searchParams.playTimeMax || 10000"
                        v-model:value="searchParams.playTimeMin"
                        placeholder="Min"
                        @change="filtersChanged()"/>
        <a-input-number :min="searchParams.playTimeMin || 1"
                        :max="10000"
                        placeholder="Max"
                        v-model:value="searchParams.playTimeMax"
                        @change="filtersChanged()"/>
      </a-form-item>

    </a-form>

  </div>
</template>

<script setup lang="ts">
import { IGamesSearchParameters } from "../interfaces/IGamesSearchParameters";
import { reactive } from "vue";

const emit = defineEmits<{
  (e: 'change', searchParams: IGamesSearchParameters): void
}>();

const searchParams = reactive<IGamesSearchParameters>({});

const filtersChanged = (): void => {
  emit('change', searchParams);
}

</script>

<style lang="less" scoped>
  .game-filters {
  }
</style>
