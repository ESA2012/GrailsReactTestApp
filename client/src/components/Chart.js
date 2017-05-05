import React from 'react';
import ReactHighcharts from 'react-highcharts';

const buildConfig = (data) => {
  const data1 = data.map(i => [i[0], i[1]]);
  const data2 = data.map(i => [i[0], i[2]]);
  return {
    chart: {
      zoomType: 'x'
    },
    rangeSelector: {
      selected: 1
    },
    title: {
      text: "Ivan's Chart"
    },
    subtitle: {
      text: 'Diploma'
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    xAxis: {
      title: {
        text: 'Date'
      },
      type: 'datetime'
    },
    plotOptions: {
      line: {
        enableMouseTracking: false
      }
    },
    series: [
      {
        name: 'Data 1 Columns',
        type: 'column',
        data: data1,
        tooltip: {
          valueDecimals: 2
        }
      },
      {
        name: 'Data 1 Spline',
        type: 'spline',
        data: data1,
        lineWidth: 1,
        marker: {
          radius: 5
        },
        color: '#f7a35c',
        tooltip: {
          valueDecimals: 2
        }
      },
      {
        name: 'Data 2',
        // type: 'spline',
        data: data2,
        color: '#ff5050',
        lineWidth: 4,
        marker: {
          radius: 7
        },
        tooltip: {
          valueDecimals: 2
        }
      }

    ]
  }
};



export default class Chart extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <ReactHighcharts config={buildConfig(data)} ref="chart"/>
    )
  }

}
