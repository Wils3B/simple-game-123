<template>
  <div @click='selectTile' class='tile' :style="`background-color: ${tile.color};`" :class='computedClasses'>
    {{ tile.value }}
  </div>
</template>

<script>
export default {
  name: 'SelectionTile',
  props: {
    tile: {
      type: Object,
      required: true,
    },
  },
  computed: {
    computedClasses() {
      return {
        selected: this.$store.state.game.selectedTile?.id === this.tile.id,
      };
    }
  },
  methods: {
    selectTile() {
      this.$store.commit('game/SELECT_TILE', this.tile);
    },
  },
};
</script>

<style scoped>
.tile {
  display: inline-block;
  height: 60px;
  width: 60px;
  font-size: 30px;
  line-height: 1;
  padding: 13px;
  text-align: center;
  cursor: pointer;
  border: 4px dashed transparent;
}

.tile.selected {
  border: 4px dashed black;
}
</style>
