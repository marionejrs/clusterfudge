import React from 'react';
import ClusterNode from '../models/ClusterNode';

export interface ClusterContext {
    nodes : ClusterNode[][]
}

const ClusterContext = React.createContext<ClusterContext>({
    nodes : []
});
export default ClusterContext;