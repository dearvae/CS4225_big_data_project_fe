import MyLayout from '../component/common/layout'
import ReactECharts from 'echarts-for-react';

// let MyLayout = require('../component/common/layout');
// let ReactECharts = require('echarts-for-react');
let data = require('../data/data.json');

export default function Home(Props) {

  console.log(data);

  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['BTC', 'ETH']
    },
    grid: {
      bottom: 90
    },
    dataZoom: [
      {
        type: 'inside'
      },
      {
        type: 'slider'
      }
    ],
    xAxis: {
      data: data.map(a => a.Date)
    },
    yAxis: [
      {
        type: 'value',
        name: 'Price',
        axisLabel: {
          formatter: '{value} USD'
        }
      },
      {
        type: 'value',
        name: 'Sentiment',
        min: 0,
        max: 100,
        interval: 5,
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: 'Positive Sentiments',
        type: 'bar',
        stack: 'Sentiments',
        yAxisIndex: 1,
        data: data.map(a => a.positive_rate * 100)
      },
      {
        name: 'Neutral Sentiments',
        type: 'bar',
        stack: 'Sentiments',
        yAxisIndex: 1,
        data: data.map(a => a.neutral_rate * 100)
      },
      {
        name: 'Negative Sentiments',
        type: 'bar',
        stack: 'Sentiments',
        yAxisIndex: 1,
        data: data.map(a => a.negative_rate * 100)
      },
      {
        name: 'BTC',
        type: 'line',
        yAxisIndex: 0,
        data: data.map(a => a.btc)
      },
      {
        name: 'ETH',
        type: 'line',
        yAxisIndex: 0,
        data: data.map(a => a.eth)
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
Home.getLayout = (home) => (
  <MyLayout number='1'>
    {home}
  </MyLayout>
)