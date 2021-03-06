import Crew from "model/Crew";

const crew: Crew[] = [
  {
    name: 'Pilot',
    power: 'Spend 1 Action to take the same action twice'
  },
  {
    name: 'Gunner',
    power: 'When using the gun, kill 2 robots in the same square for 1 action'
  },
  {
    name: 'Engineer',
    power: 'Repair 1 damage, by filling in a Damage Square with a symbol'
  },
  {
    name: 'Miner',
    power: 'Take 1 extra fuel from a planet'
  },
  {
    name: 'Hacker',
    power: 'Stop the robots from acting in 1 square'
  },
  {
    name: 'Captain',
    power: 'Rest another crew member'
  }
];

export default crew;
