import ClusterNodeGroup from "./ClusterNodeGroup";
import ClusterValue from "./ClusterValue";

export default class ClusterNode<T = number> {
    x : number;
    y : number;
    isVisited : boolean;
    nextNodes : ClusterNode<T>[];
    group : ClusterNodeGroup<T>;
    value : ClusterValue<T>;

    constructor(x : number, y : number, value : ClusterValue<T>) {
        this.x = x;
        this.y = y;
        this.isVisited = false;
        this.nextNodes = [];
        this.value = value
        this.group = {
            key : `(${x},${y})`,
            nodes : [this],
            color : this.getRandomColor()
        };
    }

    addNextNode(next : ClusterNode<T>) {
        this.nextNodes.push(next);
    }

     getRandomColor() {
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += Math.floor(Math.random() * 16).toString(16);
        }
        return color;
     }

    traverseNext() {
        for(let next of this.nextNodes) {
            if (!next.isVisited && this.value.equals(next.value) && next.group !== this.group) {
                next.group = this.group;
                this.group.nodes.push(next);
                next.isVisited = true;
                next.traverseNext();
            }
        }
        this.isVisited = true;
    }

    getValue() {
        return this.value.getValue();
    }
}