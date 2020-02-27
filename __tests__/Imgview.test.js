import React from 'react';
import { View } from 'react-native';
import Imgview from '../src/components/Imgview'
import renderer from 'react-test-renderer';

test('Imageview Component Should be present with Props', () => {
  const snap = renderer.create(<Imgview route={{params: 'xyz'}} />).toJSON();
  expect(snap).toMatchSnapshot()
})



  


