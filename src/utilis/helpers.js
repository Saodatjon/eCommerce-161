export function sumQuantity(arr) {
    return arr.reduce((a,b) => a+b.qty, 0)
}

export function sumAllPrice(arr) {
    return arr.reduce((a,b) => a+b.price * b.qty, 0).toLocaleString()
}

export function setLocaleStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value))
    return value
}