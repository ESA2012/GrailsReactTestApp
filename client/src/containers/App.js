import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNav from '../components/AppNav';
import Workspace from './Workspace';

import { CLIENT_VERSION, REACT_VERSION } from '../config';

class App extends Component {
  render() {
    return (
      <div>
        <AppNav clientInfo={{CLIENT_VERSION, REACT_VERSION}}/>
        <Workspace
          dispatchAction={this.props.dispatchAction}
          chartData={this.props.data}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.chart.get('data')
  }
};

const mapActionsToProps = (dispatch) => {
  return {
    dispatchAction: dispatch
  }
};

export default connect(mapStateToProps, mapActionsToProps)(App)
