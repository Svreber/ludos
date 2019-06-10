<template>
  <div class="game-card">
    <a-card :title="game.name">

      <game-image-display class="game-image"
                          :game="game">
      </game-image-display>

      <play-time-display class="play-time"
                         :play-time-max="game.playTimeMax"
                         :play-time-min="game.playTimeMin">
      </play-time-display>

      <players-count-display class="players-count"
                             :players-count-max="game.playersCountMax"
                             :players-count-min="game.playersCountMin">
      </players-count-display>

      <template class="ant-card-actions"
                slot="actions"
                v-if="showActions">
        <a-icon type="delete" @click="deleteGame()"/>
        <a-icon type="edit"/>
      </template>

    </a-card>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {IGame} from '@/interfaces/IGame';
  import {GamesService} from '@/services/GamesService';

  @Component({
    name: GameCard.tag
  })
  export class GameCard extends Vue {
    static tag = 'GameCard';

    @Prop()
    game!: IGame;
    @Prop()
    showActions!: boolean;

    async deleteGame(): Promise<void> {
      await GamesService.deleteGame(this.game);
      this.$emit('change');
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
    }

    .game-image {
      margin-bottom: 1rem;
    }

    .play-time,
    .players-count {
      color: grey;
    }
  }
</style>
