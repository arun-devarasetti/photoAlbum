import 'react-native'
import React from 'react';
import Photos from '../Photos';
import renderer from 'react-test-renderer';


test('Photos Component Should be present', () => {
  const snap = renderer.create(<Photos />).toJSON();
  expect(snap).toMatchSnapshot()
})

test('Photos response should be matched', async function () {
  const response = {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }
  expect(response.id).toBe(1)
})