// import React from 'react';
// import ReactDOM from 'react-dom';
// import {XYPlot, XAxis, YAxis, VerticalBarSeries} from 'react-vis';

// const data = [
//   {x: 'A', y: 10},
//   {x: 'B', y: 5},
//   {x: 'C', y: 15},
//   {x: 'D', y: 20},
//   {x: 'E', y: 8},
// ];

// function MyChart() {
//   return (
//     <XYPlot width={500} height={300} xType="ordinal">
//       <XAxis />
//       <YAxis />
//       <VerticalBarSeries data={data} />
//     </XYPlot>
//   );
// }

// // ReactDOM.render(<MyChart />, document.getElementById('root'));
// export default MyChart 

import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalBarSeriesCanvas, DiscreteColorLegend} from 'react-vis';

const data = [
  {x: 'A', y: 10},
  {x: 'B', y: 5},
  
];

const data2 = [
  {x: 'A', y: 40},
  {x: 'B', y: 30},
];

function StackedBarChart() {
  return (
    <XYPlot xType="ordinal" stackBy="y" width={250} height={300}>
      <VerticalBarSeries data={data} />
      <VerticalBarSeries data={data2} />
      <XAxis />
      <YAxis />
      <DiscreteColorLegend
        items={[
          {title: 'Series 1', color: '#12939A'},
          {title: 'Series 2', color: '#79C7E3'},
        ]}
        orientation="horizontal"
      />
    </XYPlot>
  );
}

export default StackedBarChart;
