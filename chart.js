import { createChart } from 'lightweight-charts';

let randomFactor = 25 + Math.random() * 25;
const samplePoint = i =>
    i *
    (0.5 +
        Math.sin(i / 10) * 0.2 +
        Math.sin(i / 20) * 0.4 +
        Math.sin(i / randomFactor) * 0.8 +
        Math.sin(i / 500) * 0.5) +
    200;

function generateLineData(numberOfPoints = 500) {
    randomFactor = 25 + Math.random() * 25;
    const res = [];
    const date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));
    for (let i = 0; i < numberOfPoints; ++i) {
        const time = (date.getTime() / 1000);
        const value = samplePoint(i);
        res.push({
            time,
            value,
        });

        date.setUTCDate(date.getUTCDate() + 1);
    }

    return res;
}
const chartOptions = {
    layout: {
        textColor: 'white',
        background: { type: 'solid', color: 'black' },
    },
};
/** @type {import('lightweight-charts').IChartApi} */
const chart = createChart(document.getElementById('container'), chartOptions);

const lineSeriesOne = chart.addLineSeries({ color: '#2962FF' });
const lineSeriesTwo = chart.addLineSeries({ color: 'rgb(225, 87, 90)' });
const lineSeriesThree = chart.addLineSeries({ color: 'rgb(242, 142, 44)' });

const lineSeriesOneData = generateLineData();
const lineSeriesTwoData = generateLineData();
const lineSeriesThreeData = generateLineData();

lineSeriesOne.setData(lineSeriesOneData);
lineSeriesTwo.setData(lineSeriesTwoData);
lineSeriesThree.setData(lineSeriesThreeData);

chart.timeScale().fitContent();