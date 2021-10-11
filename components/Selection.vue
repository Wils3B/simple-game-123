<template>
  <div>
    <SelectionTile v-for='(tile) of selectionTiles' :key='tile.id' :tile='tile' class='mr-4 mb-2' />
  </div>
</template>

<script>
export default {
  name: 'Selection',
  computed: {
    selectionTiles() {
      return this.$store.state.game.selectionTiles;
    },
  },
};
</script>

<style scoped>

</style>
