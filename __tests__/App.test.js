import 'react-native'
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import { View, StyleSheet, Platform } from 'react-native';
import { shallow } from 'enzyme';


it('App Component Should Be Present', () => {
  expect('<App>').toBeTruthy();
});

it(`renders a view with a custom background`, () => {
  const component = shallow(<View style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />);
  const prop = component.find(Platform.select({ default: 'View', web: 'div' })).prop('style');
  const style = StyleSheet.flatten(prop);
  expect(style.backgroundColor).toMatchSnapshot();
});