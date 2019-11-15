export default function() {
  // Load a map from a 2D array of tile indices
  /* const level = [
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
    [  0,   1,   2,   3,   0,   0,   0,   1,   2,   3,   0 ],
    [  0,   5,   6,   7,   0,   0,   0,   5,   6,   7,   0 ],
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
    [  0,   0,   0,  14,  13,  14,   0,   0,   0,   0,   0 ],
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0 ],
    [  0,   0,  14,  14,  14,  14,  14,   0,   0,   0,  15 ],
    [  0,   0,   0,   0,   0,   0,   0,   0,   0,  15,  15 ],
    [ 35,  36,  37,   0,   0,   0,   0,   0,  15,  15,  15 ],
    [ 39,  39,  39,  39,  39,  39,  39,  39,  39,  39,  39 ]
  ]; */

  // When loading from an array, make sure to specify the tileWidth and tileHeight
  // const map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16, tileSpacing: 1 });
  const map = this.make.tilemap({
    key: "city-map",
    tileWidth: 16,
    tileHeight: 16
  });
  const tiles = map.addTilesetImage("city-tiles", null, 16, 16, 0, 1);
  const layer = map.createStaticLayer(0, tiles, 0, 0);
}