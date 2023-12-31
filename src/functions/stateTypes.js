class StateTypes {
    static string(value) {
        return typeof value === 'string';
    }
    static number(value) {
        return typeof value === 'number';
    }
    static boolean(value) {
        return typeof value === 'boolean';
    }
}

export default StateTypes;