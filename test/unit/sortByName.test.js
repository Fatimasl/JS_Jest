const sorting = require('../../app');

describe('Books names test suit', () => {
  it('Books names should be sorted in ascending order', () => {
    const input = [
      'Гарри Поттер',
      'Властелин Колец',
      'Волшебник изумрудного города',
    ];

    const output = sorting.sortByName(input);

    const expected = [
      'Властелин Колец',
      'Волшебник изумрудного города',
      'Гарри Поттер',
    ];

    expect(output).toEqual(expected);
  });
});

describe('Empty array of books test suit', () => {
  it('Should return empty array ', () => {
    const input = [];
    const output = sorting.sortByName(input);
    const expected = [];

    expect(output).toEqual(expected);
  });
});

describe('Without params test suit', () => {
  it('Without params throws exeption', () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });
});

describe('Books repetitive names test suit', () => {
  it('Books names should be sorted in ascending order', () => {
    const input = [
      'Гарри Поттер',
      'Властелин Колец',
      'Волшебник изумрудного города',
      'Властелин Колец',
    ];

    const output = sorting.sortByName(input);

    const expected = [
      'Властелин Колец',
      'Властелин Колец',
      'Волшебник изумрудного города',
      'Гарри Поттер',
    ];

    expect(output).toEqual(expected);
  });
});
