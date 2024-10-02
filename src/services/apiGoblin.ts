const mockGoblins = [
  {
    id: "dbd7b021-3d89-40fe-8d82-a0509c8bb231",
    name: "Scrawgle",
    surname: "Moldpatch",
    position: {
      lat: 56.9461624,
      lng: 24.36561755,
    },
    type: 0,
  },
  {
    id: "c25abbe5-9a04-40f6-9e71-4b6e9ec80c9a",
    name: "Scrawgle",
    surname: "Slugspit",
    position: {
      lat: 56.9460671,
      lng: 24.36555485,
    },
    type: 3,
  },
  {
    id: "16c17961-a25b-4fe8-98ef-c5fa6e50dd0a",
    name: "Gribble",
    surname: "Grubchewer",
    position: {
      lat: 56.9430265,
      lng: 24.1115817,
    },
    type: 2,
  },
  {
    id: "44807574-0915-4f6a-9440-287a5d10903",
    name: "Zibber",
    surname: "Rustfang",
    position: {
      lat: 57.38788115,
      lng: 22.988763,
    },
    type: 1,
  },
];
export const getMockGoblins = (): Promise<Goblin[]> => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => mockGoblins as Goblin[]);
};
export type Position = {
  lat: number;
  lng: number;
};
export type Goblin = {
  id: string;
  name: string;
  surname: string;
  position: Position;
  type: number;
};
