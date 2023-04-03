
class storage {

    static set(key, items) {
        localStorage.setItem(key, JSON.stringify(items))
    }

    static get(key) {
        return JSON.parse(localStorage.getItem(key))
    }
}

export default storage