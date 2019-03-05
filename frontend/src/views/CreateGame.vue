<template>
  <div class="create-game">

    Create a new game.

    <a-button type="primary">Primary</a-button>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {GamesService} from '@/services/games.service';
  import {IGame} from '@/interfaces/IGame';

  @Component({
    name: CreateGame.tag
  })
  export class CreateGame extends Vue {
    static tag = 'CreateGame';

    created(): void {
    }
  }

  export default CreateGame;
</script>

<style lang="scss" scoped>
  .create-game {
  }
</style>
