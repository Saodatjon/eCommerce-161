function cartReducer(state, action) {
    switch (action.type) {
        case 'add_to_cart':
            let isHave = state.some((item) => item.id === action.product.id)
            let newState = isHave
                ? state.map((item) =>
                      item.id === action.product.id
                          ? { ...item, qty: item.qty + 1 }
                          : item
                  )
                : [...state, { ...action.product, qty: 1 }]
            console.log(newState)
            return newState
        case 'remove_to_cart':
            return (state = state.filter((item) => item.id !== action.id))
        default:
            return state
    }
}

export function addToCartAC(product) {
    return {
        type: 'add_to_cart',
        product: product,
    }
}

export function removeToCartAC(id) {
    return {
        type: 'remove_to_cart',
        id: id,
    }
}
export default cartReducer