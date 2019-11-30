import React, { useContext } from 'react';
import styles from './ClusterSettings.module.scss';
import ClusterContext from '../../contexts/ClusterContext';
import logo from '../../logo.png';

const ClusterSettings : React.FC = () => {
    let clusterContext = useContext(ClusterContext);

    return (
        <div className={styles.AppSettings}>
            <div className={styles.AppSettingsHeader}>
                <h3>ClusterFudge</h3>
                <img src={logo}></img>
            </div>
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
            <div className={styles.AppSettingsInput}>
                <button onClick={() => { clusterContext.shuffle() }}>Shuffle</button>
            </div>
        </div>
    );
}
export default ClusterSettings;