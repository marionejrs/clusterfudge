import React, { useContext } from 'react';
import styles from './ClusterGrid.module.scss';
import ClusterContext from '../../contexts/ClusterContext';

const ClusterGrid : React.FC = () => {
    let { nodes, traverse } = useContext(ClusterContext);
    traverse();

    return (
        <div className={styles.clusterGrid}>
            { nodes.map((row, rowIndex, nodeArray) => {
                return <div key={`row_${rowIndex}`} className={styles.clusterGridRow} style={{ flexBasis : `${100 / nodeArray.length}%` }}>
                    { row.map((col, colIndex, rowArray) => {
                        return (
                            <div key={`row_${rowIndex}_col_${colIndex}`} className={styles.clusterGridCell} style={{ backgroundColor : col.group.color, flexBasis : `${100 / rowArray.length}%` }}>
                                {col.getValue()}
                            </div>
                        );
                    }) }
                </div>
            }) }
        </div>
    );
}

export default ClusterGrid;

