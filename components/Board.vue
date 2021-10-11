<template>
  <div class='board'>
    <template v-for='(row, i) of tiles'>
      <BoardTile v-for='(tile, j) of row' :position='{ x: i, y: j }' :key="`${i}${j}`" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Board',
  computed: {
    tiles() {
      return this.$store.state.game.board;
    },
  },
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 30px;
}
</style>
