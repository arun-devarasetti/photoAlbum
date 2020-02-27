import 'react-native'
import React from 'react';
import App from '../App';
import Header from '../src/components/common/Header'
import renderer from 'react-test-renderer';


test('App Component Should be present', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot()
})


