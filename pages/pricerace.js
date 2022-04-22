import MyLayout from '../component/common/layout'
import ReactECharts from 'echarts-for-react';
import React, { useRef, useEffect } from 'react';

let price = require('../data/race_price.json');

const getData = (object) => {
    const data = [];
    data.push(object.ada_price);
    data.push(object.avax_price);
    data.push(object.bnb_price);
    data.push(object.btc_price);
    data.push(object.eth_price);
    data.push(object.luna_price);
    data.push(object.sol_price);
    data.push(object.usdc_price);
    data.push(object.usdt_price);
    data.push(object.xrp_price);
    return data;
}

export default function PriceRace(Props) {
    let data = getData(price[0]);
    let curMonth = price[0].date;
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
            data: ['ADA', 'AVAX', 'BNB', 'BTC', 'ETH', 'LUNA', 'SOL', 'USDC', 'USDT', 'XRP'],
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
        animationDurationUpdate: 3000,
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
        if (i < price.length) {
            data = getData(price[i]);
            curMonth = price[i].date;
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
            i++;
        }
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
PriceRace.getLayout = (race) => (
    <MyLayout number='3'>
        {race}
    </MyLayout>
)