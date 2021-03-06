import React from 'react';

import InstructionFlow,
  { InstructionPagesInfo }
  from 'components/InstructionFlow';
import Map from './play/Map';
import MapSetup from './play/MapSetup';
import Game from './play/Game';

import StoryContent from 'content/Game-Survivor/Story.md';

import SetupInstructions from 'content/Game-Survivor/MapSetup.md';
import GameInstructions from 'content/Game-Survivor/ScenarioInstructions.md';

import WinContent from 'content/Game-Survivor/Win.md';
import LoseContent from 'content/Game-Survivor/Lose.md';

import { baseUrl as nextURL } from './end';
import { PlayPhase } from 'model/Phases';
import { survivorLevel } from 'data/levels';

export const baseUrl = '/game/c';
const setup = 'setup';
export const gameUrl = `${baseUrl}/${setup}`;

const flow : InstructionPagesInfo = [
  {
    url: 'map',
    phase: PlayPhase.GameCStart,
    component: Map,
    className: 'map-survivor',
    extraProps: {
      story: StoryContent,
      header: `## Time to leave, while you still can`
    }
  },
  {
    url: setup,
    phase: PlayPhase.GameC,
    component: MapSetup,
    extraProps: {
      level: (game: number) => survivorLevel(game),
      instructions: SetupInstructions
    }
  },
  {
    url: 'play',
    phase: PlayPhase.GameC,
    component: Game,
    extraProps: {
      level: (game: number) => survivorLevel(game),
      instructions: GameInstructions,
      win: WinContent,
      lose: LoseContent
    }
  }
];

const GameFlow: React.FC[] =
  InstructionFlow({
    pages: flow, baseUrl, nextUrl: nextURL
  });
  
export default GameFlow;
