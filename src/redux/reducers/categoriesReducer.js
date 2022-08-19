
import $host from '../../utilis/https'

const SET_CATEGORIES = 'set_categories'
const SET_LOADING = 'set_loading'
const SET_SUBCATS = 'set_subCats'
const SET_PRODUCTS = 'set_products'
const SET_PAGINATION = 'set_pagination'
const SET_CATEGORYATTRIBUTES = 'set_categoryAttributes'

const initialState = {
    items: [],
    categoryAttributes: [],
    subCats: [],
    products: [],
    pagination: {},
    loading: false,
}

function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, items: action.items }

        case SET_LOADING:
            return { ...state, loading: action.loading }

        case SET_PRODUCTS:
            return { ...state, products: action.products }

        case SET_CATEGORYATTRIBUTES:
            return { ...state, categoryAttributes: action.categoryAttributes }

        case SET_SUBCATS:
            return { ...state, subCats: action.subCats }

        case SET_PAGINATION:
            return { ...state, pagination: action.pagination }

        default:
            return state
    }
}

export function setCategoriesAC(items) {
    return {
        type: SET_CATEGORIES,
        items: items,
    }
}

export function setLoadingAC(loading) {
    return {
        type: SET_LOADING,
        loading: loading,
    }
}

export function setProductsAC(products) {
    return {
        type: SET_PRODUCTS,
        products,
    }
}

export function setCategoryAttributesAC(categoryAttributes) {
    return {
        type: SET_CATEGORYATTRIBUTES,
        categoryAttributes,
    }
}

export function setSubCatsAC(subCats) {
    return {
        type: SET_SUBCATS,
        subCats,
    }
}

export function setPaginationAC(pagination) {
    return {
        type: SET_PAGINATION,
        pagination,
    }
}

export function getCategories() {
    return async function (dispatch) {
        dispatch(setLoadingAC(true))
        $host
            .get('/category/list')
            .then(function (response) {
                dispatch(setCategoriesAC(response.data.categories))
                dispatch(setLoadingAC(false))
            })
            .catch(function (error) {
                console.log(error)
                dispatch(setLoadingAC(false))
            })
    }
}

export function getCategory(slug) {
    return async function (dispatch) {
        dispatch(setLoadingAC(true))
        $host
            .get(`/category/${slug}`)
            .then((response) => {
                dispatch(setProductsAC(response.data.products))
                dispatch(
                    setCategoryAttributesAC(response.data.categoryAttributes)
                )
                dispatch(setSubCatsAC(response.data.subCats))
                dispatch(setPaginationAC(response.data.pagination))
                dispatch(setLoadingAC(false))
            })
            .catch((error) => {
                console.log(error)
                dispatch(setLoadingAC(false))
            })
    }
}

export default categoriesReducer