import React, { useEffect, useState } from 'react';
import Weekdays from './Weekdays';
import HomeWorks from './HomeWorks';
import PieChart from './PieChart';

export default function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/src/data/data.json');
      const data = await response.json();
      setData(Object.entries(data));
    };

    fetchData();
  }, []);
  return (
    <>
      {data.length > 0 && <h3 className='main-heading'>HELLO! {data[0][1]}</h3>}
      {data.length > 0 && console.log(data)}
      <div className='chart-layout'>
        {data.length > 0 && <p className='heading'>{data[1][0]}</p>}

        <div className='weekdays'>{data.length > 0 && <Weekdays days={data[1][1]} />}</div>
        <div className='homework-graph'>
          <div className='homework'>{data.length > 0 && <HomeWorks data={data[2]} />}</div>
          <div className='graph'>{data.length > 0 && <PieChart data={data[3]} />}</div>
        </div>
      </div>
    </>
  );
}
