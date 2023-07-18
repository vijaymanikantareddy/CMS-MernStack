import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalBarSeriesCanvas, DiscreteColorLegend} from 'react-vis';

const data = [
  {x: 'A', y: 10},
  {x: 'B', y: 5},
  {x: 'C', y: 15}
];

const data2 = [
  {x: 'A', y: 40},
  {x: 'B', y: 30},
  {x: 'C', y: 50}
];

function UserStackedBarChart() {
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

export default UserStackedBarChart;
