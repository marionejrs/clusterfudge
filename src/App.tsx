import React from 'react';
import './App.scss';

import ClusterContext from './contexts/ClusterContext';
import ClusterNode from './models/ClusterNode';
import ClusterGrid from './components/ClusterGrid';

const GRID_ROWS = 15;
const GRID_COLS = 15;
const POSSIBLE_VALUES = 5;

const App: React.FC = () => {
  let nodes : ClusterNode[][] = [];

  //Construct grid nodes
  for (let rowIndex = 0; rowIndex < GRID_ROWS; rowIndex++) {
    let nodesRow : ClusterNode[] = [];
    for (let colIndex = 0; colIndex < GRID_COLS; colIndex++) {
      let clusterNode = new ClusterNode(colIndex, rowIndex, Math.floor(Math.random() * POSSIBLE_VALUES));
      nodesRow.push(clusterNode);
    }
    nodes.push(nodesRow);
  }

  //Construct next nodes
  for (let rowIndex = 0; rowIndex < GRID_ROWS; rowIndex++) {
    let nodesRow : ClusterNode[] = nodes[rowIndex];
    for (let colIndex = 0; colIndex < GRID_COLS; colIndex++) {
      let clusterNode = nodesRow[colIndex];
      //Get adjacent cells
      //Get previous row
      if (rowIndex - 1 >= 0) {
        let previousRow = nodes[rowIndex - 1];
        //Get upper left
        // if (colIndex - 1 >= 0) {
        //   clusterNode.addNextNode(previousRow[colIndex - 1]);
        // }
        //Get upper middle
        clusterNode.addNextNode(previousRow[colIndex]);

        // if (colIndex + 1 < GRID_COLS) {
        //   clusterNode.addNextNode(previousRow[colIndex + 1]);
        // }
        
      }

      //Get from current row
      if (colIndex - 1 >= 0) {
        //get left
        clusterNode.addNextNode(nodesRow[colIndex - 1]);
      }

      if (colIndex + 1 < GRID_COLS) {
        //get right
        clusterNode.addNextNode(nodesRow[colIndex + 1]);
      }

      //Get next row
      if (rowIndex + 1 < GRID_ROWS) {
        let nextRow = nodes[rowIndex + 1];
        //Get lower left
        // if (colIndex - 1 >= 0) {
        //   clusterNode.addNextNode(nextRow[colIndex - 1]);
        // }
        clusterNode.addNextNode(nextRow[colIndex]);
        // if (colIndex + 1 < GRID_COLS) {
        //   clusterNode.addNextNode(nextRow[colIndex + 1]);
        // }
      }
    }
  }

  return (
    <div className="App">
      <ClusterContext.Provider value={{
        nodes
      }}>
        <ClusterGrid></ClusterGrid>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </ClusterContext.Provider>
    </div>
  );
}

export default App;
