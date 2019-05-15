<template>
  <div class="play-time-display">

    <font-awesome-icon class="icon" icon="clock"/>

    {{playTimeString}}

  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    name: PlayTimeDisplay.tag
  })
  export class PlayTimeDisplay extends Vue {
    static tag = 'PlayTimeDisplay';

    @Prop()
    playTimeMax!: number;
    @Prop()
    playTimeMin!: number;

    get playTimeString(): string {
      return this.playTimeMin === this.playTimeMax ? `${this.playTimeMin}` : `${this.playTimeMin} - ${this.playTimeMax}`;
    }
  }

  export default PlayTimeDisplay;
</script>

<style lang="scss" scoped>
  .play-time-display {

    .icon {
      margin-right: 0.2rem;
    }
  }
</style>
