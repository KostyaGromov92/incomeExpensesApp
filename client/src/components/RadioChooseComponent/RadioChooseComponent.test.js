import React from 'react';
import { shallow } from 'enzyme';
import RadioChooseComponent from './RadioChooseComponent';

describe('<RadioChooseComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<RadioChooseComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
