import React, { useContext } from 'react';
import ClusterContext from '../contexts/ClusterContext';
import ClusterNodeGroup from '../models/ClusterNodeGroup';
import styles from './ClusterGrid.module.scss';

const ClusterGrid : React.FC = () => {
    let { nodes } = useContext(ClusterContext);
    for (let rowIndex = 0; rowIndex < nodes.length; rowIndex++) {
        let row = nodes[rowIndex];
        for (let colIndex = 0; colIndex < nodes.length; colIndex++) {
            let node = row[colIndex];
            if (!node.isVisited) {
                node.traverseNext();
            }
        }
    }
    console.log("NODE: ", nodes)

    return (
        <div className={styles.clusterGrid}>
            { nodes.map((row, rowIndex, nodeArray) => {
                return <div key={`row_${rowIndex}`} className={styles.clusterGridRow} style={{ flexBasis : `${100 / nodeArray.length}%` }}>
                    { row.map((col, colIndex, rowArray) => {
                        return (
                            <div key={`row_${rowIndex}_col_${colIndex}`} className={styles.clusterGridCell} style={{ backgroundColor : col.group.color, flexBasis : `${100 / rowArray.length}%` }}>
                                {col.value}
                            </div>
                        );
                    }) }
                </div>
            }) }
        </div>
    );
}

export default ClusterGrid;

