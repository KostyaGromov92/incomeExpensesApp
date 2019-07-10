import React from 'react';
import { shallow } from 'enzyme';
import RadialBarComponent from './RadialBarComponent';

describe('<RadialBarComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<RadialBarComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
