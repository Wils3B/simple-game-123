export default {
  getTileByPosition(currentState) {
    return ({ x, y }) => currentState.board[x][y];
  },
  isGameWin(state) {
    if (state.selectionTiles.length === 0) {
      const positions = {};
      state.board.forEach((row, x) => {
        row.forEach((tile, y) => {
          positions[tile.value] = { x, y };
        });
      });
      for (let i = 2; i < 10; i += 1) {
        const prevPosition = positions[i-1];
        const position = positions[i];
        if (Math.abs(prevPosition.x - position.x) > 1 || Math.abs(prevPosition.y - position.y) > 1) {
          return false;
        }
      }
      return true;
    }
    return false;
  },
};
