<template>
  <div class="games-list">

    <game-card :game="game"
               v-for="game in games">
    </game-card>

    <!--<table>-->
      <!--<tr>-->
        <!--<th>Name</th>-->
        <!--<th>Players</th>-->
        <!--<th>Play time</th>-->
        <!--<th></th>-->
      <!--</tr>-->
      <!--<tr v-for="game in games">-->
        <!--<td><a :href="'https://boardgamegeek.com/boardgame/' + game.bggId">{{game.name}}</a></td>-->
        <!--<td>{{game.playersCountMin}}-{{game.playersCountMax || '&infin;'}}</td>-->
        <!--<td>{{game.playTimeMin}}-{{game.playTimeMax}}</td>-->
        <!--<td @click="getData(game)">CLICK</td>-->
      <!--</tr>-->
    <!--</table>-->
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {GamesService} from '@/services/games.service';
  import {IGame} from '@/interfaces/IGame';

  @Component({
    name: GamesList.tag
  })
  export class GamesList extends Vue {
    static tag = 'GamesList';

    games: Array<IGame> = [];

    created(): void {
      GamesService.queryGames()
        .then(games => this.games = games);
    }
  }

  export default GamesList;
</script>

<style lang="scss" scoped>
  .games-list {
  }
</style>
