import React from 'react';
import ClusterNode from '../models/ClusterNode';
import ClusterNodeGroup from '../models/ClusterNodeGroup';

export interface ClusterContext {
    nodes : ClusterNode[][],
    setSize : (width : number, height : number) => void,
    traverse : () => void,
    groups : ClusterNodeGroup[],
    numberOfRows : number,
    numberOfColumns : number,
    possibleValues : number,
    setPossibleValues : (possibleValue : number) => void
}

const ClusterContext = React.createContext<ClusterContext>({
    nodes : [],
    setSize : (width : number, height : number) => {},
    traverse : () => {},
    groups : [],
    numberOfRows : 0,
    numberOfColumns : 0,
    possibleValues : 0,
    setPossibleValues : (possibleValue : number) => {}
});
export default ClusterContext;