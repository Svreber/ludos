<template>
  <div class="players-count-display">

    <font-awesome-icon class="icon" icon="users"/>

    {{playersCountString}}

  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    name: PlayersCountDisplay.tag
  })
  export class PlayersCountDisplay extends Vue {
    static tag = 'PlayersCountDisplay';

    @Prop()
    playersCountMax!: number;
    @Prop()
    playersCountMin!: number;

    get playersCountString(): string {
      return this.playersCountMin === this.playersCountMax ? `${this.playersCountMin}` : `${this.playersCountMin} - ${this.playersCountMax}`;
    }
  }

  export default PlayersCountDisplay;
</script>

<style lang="scss" scoped>
  .players-count-display {

    .icon {
      margin-right: 0.2rem;
    }
  }
</style>
