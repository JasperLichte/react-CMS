export default interface Serializable<T> {
    deserialize(input: Object): T;
}
