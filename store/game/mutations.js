import { initialState } from '~/store/game/state';

export default {
  NEW_GAME(state) {
    state.board = initialState.board();
    state.selectionTiles = initialState.selectionTiles();
  },
  SELECT_TILE(state, tile) {
    state.selectedTile = tile;
  },
  MOVE_TILE(state, position) {
    const { x, y } = position;
    const copyBoard = [...state.board];
    copyBoard[x][y] = state.selectedTile;
    state.board = copyBoard;
    state.selectionTiles.splice(state.selectionTiles.findIndex(tile => tile.id === state.selectedTile.id), 1);
    state.selectedTile = null;
  }
};
