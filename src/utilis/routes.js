import PageNotFound from '../pages/404'
import Cart from '../pages/Cart'
import Category from '../pages/Category'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Profile from '../pages/Profile'

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Home />,
    },
    {
        id: 2,
        path: '/category/:slug',
        component: <Category />,
    },
    {
        id: 3,
        path: '/product/:slug',
        component: <Product />,
    },
    {
        id: 4,
        path: '/cart',
        component: <Cart />,
    },
    {
        id: 5,
        path: '/404',
        component: <PageNotFound />,
    },
    {
        id: 6,
        path: '*',
        component: <PageNotFound />,
    },
    {
        id: 7,
        path: '/profile',
        component: <Profile />,
    },
]