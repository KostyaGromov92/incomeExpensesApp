// @flow
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import LineChartComponent from '../components/LineChartComponent';
import RadioChooseComponent from '../components/RadioChooseComponent';

// CONSTANTS
import { lineChartDataForWeek, lineChartDataForMonth } from '../mock/lineChartData';

// ACTIONS
import * as MockDataActions from '../actions/mockData';

// SELECTORS
import { getMockDataResults } from '../selectors/mockData';

type State = {
  chartData: ?Array<Object>,
};

type Props = {
  mockData: ?Array<Object>,
  getMockDataRequest: () => void,
};


const WEEK = 'week';
const MONTH = 'month';
const YEAR = 'year';

class LineChartContainer extends React.Component<*, State> {
  props: Props;

  state: State = {
    chartData: lineChartDataForWeek,
  };

  componentDidMount() {
    const { getMockDataRequest } = this.props;

    getMockDataRequest();
  }

  handleRadioButton = (event: any) => {
    const activeRadioButton = event.target.attributes.getNamedItem('data-duration').value;
    let chartData;

    switch (activeRadioButton) {
      case WEEK:
        chartData = lineChartDataForWeek;
        break;

      case MONTH:
        chartData = lineChartDataForMonth;
        break;

      case YEAR:
        chartData = lineChartDataForWeek;
        break;

      default:
        chartData = lineChartDataForWeek;
        break;
    }

    this.setState({ chartData });
  }

  render() {
    const { mockData } = this.props;
    const { chartData } = this.state;

    console.log(mockData);


    return (
      <React.Fragment>
        <RadioChooseComponent handleRadioButton={this.handleRadioButton} />
        <LineChartComponent lineChartData={chartData} />
      </React.Fragment>
    );
  }
}

// REDUX
const mapStateToProps = state => ({
  mockData: getMockDataResults(state),
});

const mapDispatchToProps = dispatch => ({
  getMockDataRequest: () => dispatch(MockDataActions.getMockDataRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LineChartContainer);
