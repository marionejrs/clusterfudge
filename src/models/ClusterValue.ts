export default class ClusterValue<T = any> {
    value : T;

    constructor(value : T) {
        this.value = value;
    }

    equals(o : ClusterValue<T>) {
        if (o === null || o === undefined) {
            return false;
        }
        return this.value === o.value;
    }

    getValue() {
        return this.value;
    }
} 