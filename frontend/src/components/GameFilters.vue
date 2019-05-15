<template>
  <div class="game-filters">

    <a-form layout="inline">

      <a-form-item label="Name">
        <a-input v-model="searchParams.name"
                 placeholder="Search for a game"
                 @change="filtersChanged()"/>
      </a-form-item>

      <a-form-item label="Players">
        <a-input-number :min="1"
                        :max="20"
                        placeholder="Players"
                        v-model="searchParams.playersCount"
                        @change="filtersChanged()"/>
      </a-form-item>

      <a-form-item label="Duration">
        <a-input-number :min="1"
                        :max="10000"
                        v-model="searchParams.playTimeMin"
                        placeholder="Min"
                        @change="filtersChanged()"/>
        <a-input-number :min="1"
                        :max="10000"
                        placeholder="Max"
                        v-model="searchParams.playTimeMax"
                        @change="filtersChanged()"/>
      </a-form-item>

    </a-form>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {IGamesSearchParameters} from '@/interfaces/IGamesSearchParameters';

  @Component({
    name: GameFilters.tag
  })
  export class GameFilters extends Vue {
    static tag = 'GameFilters';

    searchParams: IGamesSearchParameters = {};

    filtersChanged(): void {
      this.$emit('change', this.searchParams);
    }
  }

  export default GameFilters;
</script>

<style lang="scss" scoped>
  .game-filters {
  }
</style>
