import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  let totalGoods = 0;
  let totalBad = 0;

  for (let el of data[1]) {
    if (el === 'good') {
      totalGoods += 1;
    } else {
      totalBad += 1;
    }
  }

  const graphData = {
    labels: ['good', 'bad'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [totalGoods, totalBad],
        backgroundColor: ['green', 'red'],
        hoverOffset: 1,
      },
    ],
  };
  return (
    <>
      <h4>{data[0]}</h4>
      <div style={{ maxWidth: '40%', margin: '0 auto' }}>
        <Pie
          data={graphData}
          options={{
            plugins: {
              legend: {
                position: 'right',
                rtl: true,
                labels: {
                  usepointstyle: true,
                  pointstyle: 'circle',
                  paddingleft: 80,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
