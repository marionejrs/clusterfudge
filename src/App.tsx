import React from 'react';
import './App.scss';

import ClusterContext from './contexts/ClusterContext';
import ClusterGrid from './components/ClusterGrid/ClusterGrid';
import useClusterContext from './hooks/useClusterContext';
import ClusterSettings from './components/ClusterSettings/ClusterSettings';
import ClusterNodeGroup from './models/ClusterNodeGroup';

function findBiggestGroup(groups : ClusterNodeGroup[]) : ClusterNodeGroup | null {
  let biggestGroup = null;
  let biggestGroupLength = 0;
  for(let group of groups) {
    if (group.nodes.length >= biggestGroupLength) {
      biggestGroup = group;
      biggestGroupLength = group.nodes.length;
    }
  }
  return biggestGroup;
}

const App: React.FC = () => {
  let clusterContext = useClusterContext();
  let biggestGroup = findBiggestGroup(clusterContext.groups)
  return (
    <div className="App">
      <ClusterContext.Provider value={clusterContext}>
        <div className="AppSettingsContainer">
          <ClusterSettings></ClusterSettings>
        </div>
        <div className="AppGrid">
          <ClusterGrid></ClusterGrid>
        </div>
        <div className="AppStatistic">
          Number of Rows: {clusterContext.numberOfRows}<br/>
          Number of Columns: {clusterContext.numberOfColumns}<br/>
          Number of Groups: {clusterContext.groups.length}<br/>
          Biggest Group: {biggestGroup && biggestGroup.key}
        </div>
      </ClusterContext.Provider>
    </div>
  );
}

export default App;
