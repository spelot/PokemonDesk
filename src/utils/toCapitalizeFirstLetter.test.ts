import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принять строку "pikachu" и вернуть строку "Pikachu"', () => {
    const capitalized = toCapitalizeFirstLetter('pikachu');

    expect(capitalized).toBe('Pikachu');
  });

  test('Должна принять строку "pikachu something else" и вернуть строку "Pikachu something else"', () => {
    const capitalized = toCapitalizeFirstLetter('pikachu something else');

    expect(capitalized).toBe('Pikachu something else');
  });

  test('Должна принять строку "Pikachu Something Else" и вернуть строку "Pikachu something else"', () => {
    const capitalized = toCapitalizeFirstLetter('Pikachu Something Else');

    expect(capitalized).toBe('Pikachu something else');
  });
});
