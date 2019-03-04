import React, {Component} from 'react';
import { mydata, mydata1, mydata2 }  from './index';
import './App.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
  LineSeries,  
  MarkSeries
} from 'react-vis';

const medata = mydata;

const midata = [
  {x: 0, y: 186},
  {x: 1, y: 235},
  {x: 2, y: 229},
  {x: 3, y: 184},
  {x: 4, y: 217},
  {x: 5, y: 154},
  {x: 6, y: 244},
  {x: 7, y: 132},
  {x: 8, y: 130},
  {x: 9, y: 240},
  {x: 10, y: 176}
];

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Mi primer grafica</h1>        
        <XYPlot height={300} width={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries className="vertical-bar-series-example" data={medata} />
        </XYPlot>
      </div>
    );
  }
}

export default App;