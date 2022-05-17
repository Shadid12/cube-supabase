import { useState } from 'react';
import { Button } from 'antd';
import TableRenderer from './components/Table';
import PieChart from './components/PieChart';

function App() {
  const [showPieChart, setShowPieChart] = useState(false);

  return (
    <div className="App">
      <div>
        <Button onClick={() => setShowPieChart(false)}>Show Details Table</Button>
        <Button onClick={() => setShowPieChart(true)} >View by Frauds type</Button>
      </div>
      {
        showPieChart ? (
          <PieChart />
        ) : <TableRenderer />
      }
    </div>
  );
}

export default App;
