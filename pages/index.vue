<template>
  <b-container>
    <b-navbar>
      <b-navbar-brand>123 Game</b-navbar-brand>
      <b-navbar-nav class='ml-auto'>
        <b-button variant='primary' size='sm' @click='newGame'>New Game</b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-row>
      <b-col cols='12' md='6'>
        <Selection />
        <div v-if='!isGameFinished'>
          {{ $store.state.game.selectionTiles.length }} moves left.
        </div>
        <div class='display-3 text-center' v-else-if='isGameWin'>
          💐
          <br>
          You win
        </div>
        <div v-else>
          Game finished, You lose
        </div>
      </b-col>
      <b-col cols='12' md='6'>
        <Board />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    isGameFinished() {
      return this.$store.state.game.selectionTiles.length === 0;
    },
    isGameWin() {
      return this.$store.getters['game/isGameWin'];
    },
  },
  methods: {
    newGame() {
      this.$store.commit('game/NEW_GAME');
    },
  },
}
</script>
