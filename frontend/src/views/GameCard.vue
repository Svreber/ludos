<template>
  <div class="game-card">

    <img height="100"
         width="100"
         v-if="image"
         :src="image"/>

    <div class="name">
      {{game.name}}
    </div>

    <div class="play-time">
      <font-awesome-icon class="icon" icon="clock"/>
      {{game.playTimeMin}} - {{game.playTimeMax}}
    </div>

    <div class="players-count">
      <font-awesome-icon class="icon" icon="users"/>
      {{game.playersCountMin}} - {{game.playersCountMax}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {IGame} from '@/interfaces/IGame';
  import {BGGService} from '@/services/bgg.service';

  @Component({
    name: GameCard.tag
  })
  export class GameCard extends Vue {
    static tag = 'GameCard';

    @Prop()
    game!: IGame;
    image: string = '';

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
    border: 1px solid lightgrey;
    display: inline-block;
    padding: 1rem;
    text-align: center;

    .name {
      font-size: large;
      font-weight: bold;
      margin-bottom: .5rem;
    }

    .play-time,
    .players-count {
      color: grey;
    }

    .icon {
      margin-right: .5rem;
    }
  }
</style>
