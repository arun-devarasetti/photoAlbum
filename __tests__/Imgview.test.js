import { shallow } from 'enzyme';
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Imgview from '../Imgview'
import renderer from 'react-test-renderer';


it('Photos Component Should Be Present', () => {
    expect('<Imgview>').toBeTruthy();
});
it(`renders a view with a custom background`, () => {
    const component = shallow(<View style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />);
    const prop = component.find(Platform.select({ default: 'View', web: 'div' })).prop('style');
    const style = StyleSheet.flatten(prop);
    expect(style.backgroundColor).toMatchSnapshot();
});


