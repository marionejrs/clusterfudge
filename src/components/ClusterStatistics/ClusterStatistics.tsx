import React, { useContext } from 'react';
import ClusterNodeGroup from '../../models/ClusterNodeGroup';
import styles from './ClusterStatistics.module.scss';
import ClusterContext from '../../contexts/ClusterContext';

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

const ClusterStatistics : React.FC = () => {
    let clusterContext = useContext(ClusterContext);
    let biggestGroup = findBiggestGroup(clusterContext.groups);
    console.log(clusterContext.groups);

    return (
        <div className={styles.clusterStatistic}>
          Number of Rows: {clusterContext.numberOfRows}<br/>
          Number of Columns: {clusterContext.numberOfColumns}<br/>
          Number of Groups: {clusterContext.groups.length}<br/>
          Biggest Group: {biggestGroup && biggestGroup.key}<br/>
          Biggest Group Size: {biggestGroup && biggestGroup.nodes.length}
        </div>
    );
}
export default ClusterStatistics;