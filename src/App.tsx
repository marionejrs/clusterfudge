import React from 'react';
import './App.scss';

import ClusterContext from './contexts/ClusterContext';
import ClusterNode from './models/ClusterNode';
import ClusterGrid from './components/ClusterGrid/ClusterGrid';
import useClusterContext from './hooks/useClusterContext';
import ClusterSettings from './components/ClusterSettings/ClusterSettings';

const GRID_ROWS = 5;
const GRID_COLS = 3;
const POSSIBLE_VALUES = 3;

const App: React.FC = () => {
  let clusterContext = useClusterContext();
  return (
    <div className="App">
      <ClusterContext.Provider value={clusterContext}>
        <div className="AppSettingsContainer">
          <ClusterSettings></ClusterSettings>
        </div>
        <div className="AppGrid">
          <ClusterGrid></ClusterGrid>
        </div>
      </ClusterContext.Provider>
    </div>
  );
}

export default App;
