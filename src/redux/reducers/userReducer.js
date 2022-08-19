import { setLocaleStorage } from './../../utilis/helpers'
const SET_USER = 'set_user'
const SET_ISAUTHORIZED = 'set_isAuthorized'

const initialState = {
    isAuthorized: localStorage.getItem('isLogin') || false,
    user: localStorage.getItem('user') || {},
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: setLocaleStorage('user', action.user) }

        case SET_ISAUTHORIZED:
            return {
                ...state,
                isAuthorized: setLocaleStorage('isLogin', action.isLogin),
            }
        default:
            return state
    }
}

export function setUserAC(user) {
    return {
        type: SET_USER,
        user,
    }
}

export function setIsLoginAC(bool) {
    return {
        type: SET_ISAUTHORIZED,
        isLogin: bool,
    }
}

export default userReducer