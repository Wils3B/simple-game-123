<template>
  <div class='tile' :style='{ backgroundColor: tile.color }' @click='moveTile' :class='computedClasses'>
    {{ tile.value || '' }}
  </div>
</template>

<script>
export default {
  name: 'BoardTile',
  props: {
    position: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tile() {
      return this.$store.getters['game/getTileByPosition'](this.position);
    },
    computedClasses() {
      return {
        available: this.$store.state.game.selectedTile && this.tile.value === 0,
      };
    },
  },
  methods: {
    moveTile() {
      if (this.$store.state.game.selectedTile && this.tile.value === 0) {
        this.$store.commit('game/MOVE_TILE', this.position);
      }
    },
  },
};
</script>

<style scoped>
.tile {
  display: inline-block;
  height: 100px;
  width: 100px;
  font-size: 40px;
  line-height: 1;
  text-align: center;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(33, 33, 33, 0.4);
  border-radius: 5px;
  transition: all ease-in 0.4s;
  border: 4px solid transparent;
}

.tile.available:hover {
  border: 4px dashed lightblue;
}
</style>
