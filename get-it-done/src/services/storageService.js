function loadFromStorage(key) {
    var val = sessionStorage.getItem(key)
    return (val)? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
    sessionStorage[key] = JSON.stringify(val);
}


export default {
    loadFromStorage,
    saveToStorage
}