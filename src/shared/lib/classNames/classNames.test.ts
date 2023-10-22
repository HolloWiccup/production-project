import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someone')).toBe('someone');
  });
  test('with additional class', () => {
    const expected = 'someClass class1';
    expect(classNames('someClass', {}, ['class1'])).toBe(expected);
  });
  test('with mods', () => {
    const expected = 'someClass class1 hovered selectable';
    expect(classNames(
      'someClass',
      { hovered: true, selectable: true },
      ['class1'],
    )).toBe(expected);
  });
  test('with false mode class', () => {
    const expected = 'someClass class1 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, selectable: false },
      ['class1'],
    )).toBe(expected);
  });
  test('with undefined mode class', () => {
    const expected = 'someClass class1 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, selectable: undefined },
      ['class1'],
    )).toBe(expected);
  });
});
