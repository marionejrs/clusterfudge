import ClusterNodeGroup from "./ClusterNodeGroup";

export default class ClusterNode<T = number> {
    x : number;
    y : number;
    value : T;
    isVisited : boolean;
    nextNodes : ClusterNode<T>[];
    group : ClusterNodeGroup<T>;

    constructor(x : number, y : number, value : T) {
        this.x = x;
        this.y = y;
        this.isVisited = false;
        this.value = value;
        this.nextNodes = [];
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
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
     }

    traverseNext() {
        for(let next of this.nextNodes) {
            if (!next.isVisited && next.value === this.value) {
                this.group.nodes.push(next);
                next.group = this.group;
                next.isVisited = true;
                next.traverseNext();
            }
        }
        this.isVisited = true;
    }
}