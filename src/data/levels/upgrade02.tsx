import Level, { CellTypes, CellContentTypes, PlanetTypes, StarTypes } from 'model/Level';

const grid = new Level([
  [
    { type: CellTypes.Blank },
    { type: CellTypes.Blank },
    {
      type: CellTypes.Space,
      contents: [
        { type: CellContentTypes.Player }
      ]
    },
    { type: CellTypes.Blank },
    { type: CellTypes.Blank }
  ],
  [
    { type: CellTypes.Blank },
    { type: CellTypes.Space },
    { type: CellTypes.Space },
    { type: CellTypes.Space },
    { type: CellTypes.Blank }
  ],
  [
    { type: CellTypes.Space },
    {
      type: CellTypes.Space,
      contents: [
        { type: CellContentTypes.Planet, subtype: PlanetTypes.Rocky },
        { type: CellContentTypes.Fuel, count: 1 },
        { type: CellContentTypes.Upgrade }
      ]
    },
    { type: CellTypes.Space },
    { type: CellTypes.Space },
    { type: CellTypes.Space }
  ],
  [
    {
      type: CellTypes.Space,
      contents: [
        { type: CellContentTypes.RobotFactory },
        { type: CellContentTypes.Robot, count: 1 }
      ]
    },
    { type: CellTypes.Space },
    {
      type: CellTypes.Space,
      contents: [
        { type: CellContentTypes.Star, subtype: StarTypes.Yellow }
      ]
    },
    { type: CellTypes.Space },
    {
      type: CellTypes.Space,
      contents: [
        { type: CellContentTypes.Planet, subtype: PlanetTypes.GasGiant },
        { type: CellContentTypes.Fuel, count: 3 }
      ]
    }
  ],
  [
    { type: CellTypes.Blank },
    { type: CellTypes.Blank },
    {
      type: CellTypes.Space,
      contents: [
        { type: CellContentTypes.Planet, subtype: PlanetTypes.Rocky, variety: 2 },
        { type: CellContentTypes.Fuel, count: 1 },
        { type: CellContentTypes.Module }
      ]
    },
    { type: CellTypes.Blank },
    { type: CellTypes.Blank }
  ],
  [
    { type: CellTypes.Blank },
    { type: CellTypes.Blank },
    {
      type: CellTypes.Space,
      contents: [
        { type: CellContentTypes.Robot, count: 1 }
      ]
    },
    { type: CellTypes.Blank },
    { type: CellTypes.Blank }
  ]
], StarTypes.Yellow);

export default grid;
