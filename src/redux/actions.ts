export const SET_SHIP_DATA = 'SET_SHIP_DATA';

export const setShipData = (code: string, data: ShipData) => {
  return { type: SET_SHIP_DATA, payload: {code, data} };
}

export const clearShipData = () => {
  return { type: SET_SHIP_DATA, payload: {} };
}

export interface LevelData {

}

export interface ShipData {
  levelsComplete: number,
  robotTokens: string,
  shipToken: string,
  survivorToken: string,
  upgradeToken: string,
  newModuleToken: string,
  fuelTokens: string,

  shipCards: string,
  spaceCards: string,
  crewCards: string,

  damageDice: string,

  levels: Array<LevelData>
}

export const DefaultShipData : ShipData = {
  levelsComplete: 0,

  robotTokens: '',
  shipToken: '',
  survivorToken: '',
  upgradeToken: '',
  newModuleToken: '',
  fuelTokens: '',

  shipCards: '',
  spaceCards: '',
  crewCards: '',

  damageDice: '',

  levels: []
}