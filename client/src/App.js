// @flow
import React, {
	PureComponent
} from 'react';

// COMPONENTS
import LineChartComponent from './components/LineChartComponent/index';
import RadialBarComponent from './components/RadialBarComponent/index';
import MixBarComponent from './components/MixBarComponent/index';
import RadioChooseComponent from './components/RadioChooseComponent/index';

export default class Example extends PureComponent < * > {
	render() {
		return ( <
			div className = "app" >
			<
			RadioChooseComponent / >
			<
			LineChartComponent / >
			<
			RadialBarComponent / >
			<
			MixBarComponent / >
			<
			/div>
		);
	}
}