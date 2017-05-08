import React from 'react';
import Chart from '../components/Chart';

import { getData, clearAllData, addData, test } from '../redux/reducers/Chart';

export default class Workspace extends React.Component {

  constructor(props) {
    super(props);
    this.getChartData = this.getChartData.bind(this);
    this.clearData = this.clearData.bind(this);
    this.addValue = this.addValue.bind(this);
    this.test = this.test.bind(this);
  }

  test() {
    this.props.dispatchAction(test());
  }

  getChartData() {
    this.props.dispatchAction(getData());
  }

  clearData() {
    this.props.dispatchAction(clearAllData());
  }

  addValue() {
    const value = Math.round(Math.random() * 3000) / 100;
    this.props.dispatchAction(addData(value))
  }

  render() {
    const chart = this.props.chartData ? this.props.chartData.toJS() : undefined;

    return (
      <div>
        <div>
          <button onClick={this.getChartData}>Load data from Server</button>
          <button onClick={this.clearData}>Clear all data on Server</button>
          <button onClick={this.addValue}>Add new value</button>
          <button onClick={this.test}>Add new test value</button>
        </div>
        <Chart data={chart}/>
      </div>
    )
  }
}
