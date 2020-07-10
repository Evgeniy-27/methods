import Character from '../index.js';

test('Цифра в имени', () => {
  expect(() => {
    new Character({ name: 1, type: 'Bowman' });
  }).toThrow();
});

test('Пустое поле в имени', () => {
  expect(() => {
    new Character({ name: '', type: 'Bowman' });
  }).toThrow();
});

test('Имя состоит из одной буквы', () => {
  expect(() => {
    new Character('a', 'Bowman', 10, 10);
  }).toThrow();
});

test('Имя состоит больше 10 букв', () => {
  expect(() => {
    new Character('bla bla bla bla', 'Bowman', 10, 10);
  }).toThrow();
})

test('Ошибка в типе', () => {
  expect(() => {
    const bow = new Character({ name: 'Bow', type: 'Bow' });
  }).toThrow();
});

test('Уровень жизни 0', () => {
  expect(() => {
    const bow = new Character({ name: 'Bow', type: 'Bowman' });
    bow.health = 0;
    bow.levelUp();
  }).toThrow();
});

test('Изменение внутреного состояния объекта', () => {
  const bow = new Character({
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  expect(bow.levelUp()).toEqual(undefined);
});

test('Проверка damage', () => {
  const bow = new Character({
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
  expect(bow.damage(10)).toEqual(undefined);
});
