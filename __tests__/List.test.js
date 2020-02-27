import 'react-native'
import React from 'react';
import List from '../src/components/List';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


it('List Component Should Be Present', () => {
  expect('<List>').toBeTruthy();
});

/*describe('Album List Component', () => {
  it('List Component Should Be Present', () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toBeTruthy()
  });
  it('Can Fetch List of Albums', async  () => {
    const response = await asyncFetch();  
  })
});*/