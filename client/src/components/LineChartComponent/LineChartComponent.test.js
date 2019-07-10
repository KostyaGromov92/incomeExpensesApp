import React from 'react';
import { shallow } from 'enzyme';
import LineChartComponent from './LineChartComponent';

describe('<LineChart />', () => {
	test('renders', () => {
		const wrapper = shallow(<LineChartComponent />);
		expect(wrapper).toMatchSnapshot();
	});
});
