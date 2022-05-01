
import ReactECharts from 'echarts-for-react';

export default function PredictGraph(Props) {
    let data = Props.data;
    let title = Props.title;
    const options = {
        title: {
            text: title
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