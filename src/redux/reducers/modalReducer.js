const SET_CARTMODAL = 'set_cartmodal'
const SET_AUTHMODAL = 'set_authmodal'

let initialState = {
    cartModal: false,
    authModal: false,
}

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CARTMODAL:
            return { ...state, cartModal: action.bool }
        case SET_AUTHMODAL:
            return { ...state, authModal: action.bool }
        default:
            return state
    }
}

export function setCartModalAC(bool) {
    return {
        type: SET_CARTMODAL,
        bool,
    }
}

export function setAuthModalAC(bool) {
    return {
        type: SET_AUTHMODAL,
        bool,
    }
}

export default modalReducer