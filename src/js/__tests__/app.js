import Bowman from '../classes/bowman';
import Swordsman from '../classes/Swordsman';
import Magician from '../classes/magician';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';
import Daemon from '../classes/Daemon';
import Character from '../classes/Character';

test.each([
  [
    new Bowman('Vasya'),
    {
      name: 'Vasya',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    new Swordsman('Sveta'),
    {
      name: 'Sveta',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    new Magician('Petya'),
    {
      name: 'Petya',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    new Undead('Vova'),
    {
      name: 'Vova',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    new Zombie('Katya'),
    {
      name: 'Katya',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    new Daemon('Joker'),
    {
      name: 'Joker',
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
    new Bowman('T');
  }).toThrow();
});

test('error long name', () => {
  expect(() => {
    new Bowman('Testtesttest');
  }).toThrow();
});

test('error other type', () => {
  expect(() => {
    new Character('Tolya', 'Admin');
  }).toThrow();
});
