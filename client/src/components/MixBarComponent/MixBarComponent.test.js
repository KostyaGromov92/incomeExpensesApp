import React from 'react';
import { shallow } from 'enzyme';
import MixBarComponent from './MixBarComponent';

describe('<MixBarComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<MixBarComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
