import Bowman from '../classes/Bowman';
import Swordsman from '../classes/Swordsman';
import Magician from '../classes/Magician';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';
import Daemon from '../classes/Daemon';
import Character from '../classes/Character';

test.each([
  [
    new Bowman('Mary'),
    {
      name: 'Mary',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    new Swordsman('Alex'),
    {
      name: 'Alex',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    new Magician('George'),
    {
      name: 'George',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    new Undead('Ann'),
    {
      name: 'Ann',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    new Zombie('Peter'),
    {
      name: 'Peter',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    new Daemon('Mike'),
    {
      name: 'Mike',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
])('create new characters', (character, expected) => {
  expect(character).toEqual(expected);
});

test('error short name', () => {
  expect(() => {
    new Bowman('M');
  }).toThrow();
});

test('error long name', () => {
  expect(() => {
    new Bowman('Maaaaaaarryyyy');
  }).toThrow();
});

test('error other type', () => {
  expect(() => {
    new Character('Oleg', 'Admin');
  }).toThrow();
});
