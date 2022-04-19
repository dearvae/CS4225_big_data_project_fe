import MyLayout from '../component/common/layout'
import ReactECharts from 'echarts-for-react';
import React, { useRef, useEffect } from 'react';

let volumn = require('../data/crypto_volumn.json');

const getData = (object) => {
    const data = [];
    data.push(object.btc);
    data.push(object.eth);
    return data;
}

const cryptoColors = {
    BTC: '#00008b',
    ETH: '#f00',
};

export default function Race(Props) {
    let data = getData(volumn[0]);
    let curMonth = volumn[0].Date;
    const echartRef = useRef(null);
    // const echartInstance = echartRef.current;
    let option = {
        grid: {
            top: 10,
            bottom: 30,
            left: 150,
            right: 80
        },
        xAxis: {
            max: 'dataMax',
            axisLabel: {
                formatter: function (n) {
                    return Math.round(n) + '';
                }
            }
        },
        yAxis: {
            type: 'category',
            inverse: true,
            max: 10,
            data: ['BTC', 'ETH'],
            animationDuration: 300,
            animationDurationUpdate: 300
        },
        series: [
            {
                realtimeSort: true,
                data: data,
                type: 'bar',
                encode: {
                    x: 0,
                    y: 3
                },
                label: {
                    show: true,
                    precision: 1,
                    position: 'right',
                    valueAnimation: true,
                }
            },
        ],
        animationDuration: 0,
        animationDurationUpdate: 2000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
            elements: [
                {
                    type: 'text',
                    right: 160,
                    bottom: 60,
                    style: {
                        text: curMonth,
                        font: 'bolder 80px monospace',
                        fill: 'rgba(100, 100, 100, 0.25)'
                    },
                    z: 100
                }
            ]
        }
    };
    let i = 0;
    function run() {
        data = getData(volumn[i]);
        curMonth = volumn[i].Date;
        i = (i + 1) % volumn.length;
        console.log(i)
        console.log(data)
        console.log(curMonth)
        option.series = [
            {
                realtimeSort: true,
                data: data,
                type: 'bar',
                encode: {
                    x: 0,
                    y: 3
                },
                label: {
                    show: true,
                    precision: 1,
                    position: 'right',
                    valueAnimation: true,
                }
            },
        ];
        option.graphic = {
            elements: [
                {
                    type: 'text',
                    right: 160,
                    bottom: 60,
                    style: {
                        text: curMonth,
                        font: 'bolder 80px monospace',
                        fill: 'rgba(100, 100, 100, 0.25)'
                    },
                    z: 100
                }
            ]
        }
        echartRef.current?.getEchartsInstance().setOption(option);

    };
    useEffect(() => {
        console.log(echartRef.current)
    }, [echartRef]);
    setTimeout(function () {
        run();
    }, 0);
    setInterval(function () {
        run();
    }, 3000);
    return <>
        <div style={{ height: "800px" }}>
            <br />
            <ReactECharts ref={(e) => { echartRef.current = e; }} option={option} style={{ height: "600px" }} />
        </div>
    </>
}
Race.getLayout = (race) => (
    <MyLayout number='2'>
        {race}
    </MyLayout>
)