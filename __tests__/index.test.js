/* eslint-disable no-undef */
import reverse from '../src';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
  expect({}).toEqual({});
});
