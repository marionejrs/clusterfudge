import React from 'react';
import './App.scss';

import ClusterContext from './contexts/ClusterContext';
import ClusterGrid from './components/ClusterGrid/ClusterGrid';
import useClusterContext from './hooks/useClusterContext';
import ClusterSettings from './components/ClusterSettings/ClusterSettings';
import ClusterNodeGroup from './models/ClusterNodeGroup';
import ClusterStatistics from './components/ClusterStatistics/ClusterStatistics';

const App: React.FC = () => {
  let clusterContext = useClusterContext();

  return (
    <div className="App">
      <ClusterContext.Provider value={clusterContext}>
        <div className="AppSettingsContainer">
          <ClusterSettings/>
        </div>
        <div className="AppGrid">
          <ClusterGrid/>
        </div>
        <ClusterStatistics/>
      </ClusterContext.Provider>
    </div>
  );
}

export default App;
