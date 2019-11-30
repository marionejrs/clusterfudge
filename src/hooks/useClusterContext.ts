import { ClusterContext } from "../contexts/ClusterContext";
import { useState, useCallback, useEffect } from "react";
import ClusterNode from "../models/ClusterNode";
import ClusterValue from "../models/ClusterValue";
import ClusterNodeGroup from "../models/ClusterNodeGroup";

export default function useClusterContext() : ClusterContext {
    let [ nodes, setNodes ] = useState<ClusterNode[][]>([]);
    let [ groups, setGroups ] = useState<ClusterNodeGroup[]>([]);
    let [ numberOfRows, setNumberOfRows ] = useState<number>(5);
    let [ numberOfColumns, setNumberOfColumns ] = useState<number>(5);
    let [ possibleValues, setPossibleValues ] = useState<number>(5);
    let toggleSetSize = (width : number, height : number) => {
        setNumberOfRows(width);
        setNumberOfColumns(height);
    };

    let toggleSetPossibleValue = (possibleValue : number) => {
        setPossibleValues(possibleValue);
    }

    let traverse = useCallback(() => {
        let newGroups : ClusterNodeGroup[] = [];
        for (let rowIndex = 0; rowIndex < nodes.length; rowIndex++) {
            let row = nodes[rowIndex];
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                let node = row[colIndex];
                if (!node.isVisited) {
                    node.traverseNext();
                    newGroups.push(node.group);
                }
            }
        }

        if (newGroups.length > 0) {
            setGroups(newGroups);
        }
    }, [nodes]);

    let doShuffle = () => {
        // console.log("mount", rows, columns, possibleValues)
        let newNodes : ClusterNode[][] = [];
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            let nodesRow : ClusterNode[] = [];
            for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
                let clusterNode = new ClusterNode(colIndex, rowIndex, new ClusterValue(Math.floor(Math.random() * possibleValues) + 1));
                nodesRow.push(clusterNode);
            }
            newNodes.push(nodesRow);
        }

        //Construct next nodes
        for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
            let nodesRow : ClusterNode[] = newNodes[rowIndex];
            for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
                let clusterNode = nodesRow[colIndex];
                //Get adjacent cells
                //Get previous row
                if (rowIndex - 1 >= 0) {
                    let previousRow = newNodes[rowIndex - 1];
                    clusterNode.addNextNode(previousRow[colIndex]);                
                }
                
                if (rowIndex + 1 < numberOfRows) {
                    let nextRow = newNodes[rowIndex + 1];
                    clusterNode.addNextNode(nextRow[colIndex]);
                }

                //Get from current row
                if (colIndex - 1 >= 0) {
                    //get left
                    clusterNode.addNextNode(nodesRow[colIndex - 1]);
                }
                
                if (colIndex + 1 < numberOfColumns) {
                    //get right
                    clusterNode.addNextNode(nodesRow[colIndex + 1]);
                }
            }
        }
        setNodes(newNodes);
        // setNumberOfRows(rows);
        // setNumberOfColumns(columns);
    }

    useEffect(() => {
        doShuffle();
    }, [numberOfRows, numberOfColumns, possibleValues]);
    console.log("size:", numberOfRows, numberOfColumns)
    return {
        nodes,
        setSize: toggleSetSize,
        traverse,
        groups,
        numberOfRows,
        numberOfColumns,
        possibleValues,
        setPossibleValues: toggleSetPossibleValue,
        shuffle : doShuffle
    }
}