export const initialState = {
  board: () => [
    [
      { value: 0, color: 'white' },
      { value: 0, color: 'white' },
      { value: 0, color: 'white' },
    ],
    [
      { value: 0, color: 'white' },
      { value: 0, color: 'white' },
      { value: 0, color: 'white' },
    ],
    [
      { value: 0, color: 'white' },
      { value: 0, color: 'white' },
      { value: 0, color: 'white' },
    ],
  ],
  selectionTiles() {
    const tiles = [];
    for(let i = 1; i < 10; i += 1) {
      const h = Math.floor(Math.random() * 360);
      tiles.push({ value: i, color: `hsl(${h}, 55%, 70%)`, id: i });
    }
    return tiles;
  }
};

export default () => {
  return {
    board: initialState.board(),
    selectionTiles: initialState.selectionTiles(),
    selectedTile: null,
  };
};
