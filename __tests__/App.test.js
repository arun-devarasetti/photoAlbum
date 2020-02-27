import 'react-native'
import React from 'react';
import App from '../App';
import Header from '../src/components/common/Header'
import renderer from 'react-test-renderer';
import { View, StyleSheet, Platform } from 'react-native';
import { shallow } from 'enzyme';

/*
it(`renders a view with a custom background`, () => {
  const component = shallow(<View style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />);
  const prop = component.find(Platform.select({ default: 'View', web: 'div' })).prop('style');
  const style = StyleSheet.flatten(prop);
  expect(style.backgroundColor).toMatchSnapshot();
});


describe('Parent Component', () => {
  it('App Component Should Be Present', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy()
  });
  it('renders Child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(<Header />));
  });
});

*/

test('App Component Should be present', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot()
})

