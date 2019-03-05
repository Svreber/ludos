<template>
  <div class="game-card">
    <a-card :title="game.name">

      <img height="100"
           width="100"
           v-if="image"
           :src="image">

      <div class="play-time">
        <font-awesome-icon class="icon" icon="clock"/>
        {{game.playTimeMin}} - {{game.playTimeMax}}
      </div>

      <div class="players-count">
        <font-awesome-icon class="icon" icon="users"/>
        {{game.playersCountMin}} - {{game.playersCountMax}}
      </div>

    </a-card>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { IGame } from "@/interfaces/IGame";
  import { BGGService } from "@/services/bgg.service";

  @Component({
    name: GameCard.tag
  })
  export class GameCard extends Vue {
    static tag = "GameCard";

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

  export default GameCard;
</script>

<style lang="scss" scoped>
  .game-card {
    display: inline-block;
    text-align: center;

    .name {
      font-size: large;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .play-time,
    .players-count {
      color: grey;
    }

    .icon {
      margin-right: 0.5rem;
    }
  }
</style>
