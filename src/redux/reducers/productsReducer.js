
import $host from '../../utilis/https'

const SET_PRODUCTS = 'set_products'
const SET_LOADING = 'set_loading'

let initialState = {
    products: [],
    loading: false,
}

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.products }

        case SET_LOADING:
            return { ...state, loading: action.loading }

        default:
            return state
    }
}

export function setProductsAC(products) {
    return {
        type: SET_PRODUCTS,
        products,
    }
}

export function setLoadingAC(loading) {
    return {
        type: SET_LOADING,
        loading,
    }
}

export function getProducts() {
    return async function (dispatch) {
        dispatch(setLoadingAC(true))
        $host
            .get('/product/list')
            .then(function (response) {
                dispatch(setProductsAC(response.data.products))
                dispatch(setLoadingAC(false))
                console.log('true')
            })
            .catch(function (error) {
                console.log(error)
                dispatch(setLoadingAC(false))
            })
    }
}

export default productsReducer