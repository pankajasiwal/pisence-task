import React from 'react';
export default function Weekdays({ days }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th rowSpan={1}></th>
            {/* {console.log(days)} */}
            {Object.entries(days).map(([key]) => (
              <th key={key}>{key}</th>
            ))}
            {/* <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thrusday</th>
            <th>Friday</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={1}></td>
            {Object.entries(days).map(([key, value]) => (
              <td key={key}>{value['date']}</td>
            ))}
            {/* <td>21/7/23</td>
            <td>21/7/23</td>
            <td>21/7/23</td>
            <td>21/7/23</td>
            <td>21/7/23</td> */}
          </tr>
          <tr>
            <td rowSpan={1}>FN</td>
            {Object.entries(days).map(([key, value]) => (
              <td key={key}>
                <p className={`color ${value['fn'] === 'present' ? 'green' : 'red'}`}></p>
              </td>
            ))}
          </tr>
          <tr>
            <td rowSpan={1}>AN</td>
            {Object.entries(days).map(([key, value]) => (
              <td key={key}>
                <p className={`color ${value['an'] === 'present' ? 'green' : 'red'}`}></p>
              </td>
            ))}
            {/* <td>
              <p className='color'></p>
            </td>
            <td>
              <p className='color'></p>
            </td>
            <td>
              <p className='color'></p>
            </td>
            <td>
              <p className='color'></p>
            </td>
            <td>
              <p className='color'></p>
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
