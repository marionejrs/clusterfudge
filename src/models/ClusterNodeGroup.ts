import ClusterNode from "./ClusterNode";

export default interface ClusterNodeGroup<T = number> {
    key : string;
    nodes : ClusterNode<T>[];
    color : string;
}