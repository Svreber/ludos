<template>
  <div class="game-image-display">

    <img height="100"
         width="100"
         v-if="image"
         :src="image">
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {IGame} from '@/interfaces/IGame';
  import {BGGService} from '@/services/BGGService';

  @Component({
    name: GameImageDisplay.tag
  })
  export class GameImageDisplay extends Vue {
    static tag = 'GameImageDisplay';

    @Prop()
    game!: IGame;
    image: string | null = null;

    created(): void {
      this.initializeImage();
    }

    async initializeImage(): Promise<void> {
      this.image = await BGGService.getImageForGame(this.game.bggId);
    }
  }

  export default GameImageDisplay;
</script>

<style lang="scss" scoped>
  .game-image-display {
  }
</style>
