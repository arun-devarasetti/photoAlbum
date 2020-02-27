import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Imgview from '../src/components/Imgview'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Parent Component', () => {
    it('renders Child component', () => {
      const wrapper = shallow(<Imgview required={true}
        match={{params: {Details: 1}, isExact: true, path: "", url: ""}} />);
      expect(wrapper.containsMatchingLement(<Image />)).toEqual(true);
      expect(wrapper.containsMatchingElement(<h2>Details for 1</h2>)).toBeTruthy();
 
    });
  });

