import MyLayout from '../component/common/layout'
import ReactECharts from 'echarts-for-react';

// let MyLayout = require('../component/common/layout');
// let ReactECharts = require('echarts-for-react');
let data = require('../data/dualpredict.json');

export default function PredictionLR(Props) {

  const options = {
    title: {
      text: 'Price Prediction vs Actual (BTC)'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Prediction', 'Actual']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.Date
    },
    yAxis: {
      scale: true,
      type: 'value',
      name: 'Price',
      axisLabel: {
        formatter: '{value} USD'
      }
    },
    series: [
      {
        name: 'Prediction',
        type: 'line',
        data: data.Pred
      },
      {
        name: 'Actual',
        type: 'line',
        data: data.Actual
      }
    ]
  };

  return <>
    <div style={{ height: "800px" }}>
      <br />
      <ReactECharts option={options} style={{ height: "600px" }} />
    </div>
  </>
}
PredictionLR.getLayout = (prediction) => (
  <MyLayout number='4'>
    {prediction}
  </MyLayout>
)