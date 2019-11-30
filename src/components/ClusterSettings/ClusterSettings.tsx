import React, { useContext, useState } from 'react';
import styles from './ClusterSettings.module.scss';
import ClusterContext from '../../contexts/ClusterContext';

const ClusterSettings : React.FC = () => {
    let clusterContext = useContext(ClusterContext);
    console.log("settings", clusterContext)

    return (
        <div className={styles.AppSettings}>
            <div className={styles.AppSettingsInput}>
                <div className={styles.AppSettingsLabel}>
                    <label htmlFor="rows">Rows</label>
                </div>
                <div className={styles.AppSettingsValue}>
                    <input type="number" id="rows"
                        min="2"
                        max="50"
                        value={clusterContext.numberOfRows}
                        onChange={(event) => {

                            clusterContext.setSize(Number.parseInt(event.target.value), clusterContext.numberOfColumns);
                        }}/>
                </div>
            </div>
            <div className={styles.AppSettingsInput}>
                <div className={styles.AppSettingsLabel}>
                    <label htmlFor="columns">Columns</label>
                </div>
                <div className={styles.AppSettingsValue}>
                    <input type="number" id="columns"
                        min="2"
                        max="50"
                        value={clusterContext.numberOfColumns}
                        onChange={(event) => {
                            clusterContext.setSize(clusterContext.numberOfRows, Number.parseInt(event.target.value));
                        }}/>
                </div>
            </div>
            <div className={styles.AppSettingsInput}>
                <div className={styles.AppSettingsLabel}>
                    <label htmlFor="possibleValues">Possible Values</label>
                </div>
                <div className={styles.AppSettingsValue}>
                    <input type="number" id="columns"
                        min="1"
                        max="50"
                        value={clusterContext.possibleValues}
                        onChange={(event) => {
                            clusterContext.setPossibleValues(Number.parseInt(event.target.value));
                        }}/>
                </div>
            </div>
        </div>
    );
}
export default ClusterSettings;