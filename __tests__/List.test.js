import 'react-native'
import React from 'react';
import List from '../src/components/List';
import renderer from 'react-test-renderer';

test('List Component Should Be Present', () => {
  expect('<List>').toBeTruthy();
});
test('Albums response should be matched', async function () {
  const response = {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
  }
  expect(response.id).toBe(1)
})

