import React, { useEffect } from 'react'
import ProductList from '../components/ProductsList/ProductList'
import { Box, Container, Title, Loader } from '../components'
import { addToCartAC } from '../utilis/reducers/cartReducer'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../redux/reducers/productsReducer'

export default function Home() {
    const { productsState } = useSelector((state) => state)
    const { products, loading } = productsState
    const dispatch = useDispatch()

    function addToCart(product) {
        dispatch(addToCartAC(product))
    }

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <>
            <Container >
                {loading ? (
                    <Loader />
                ) : (
                    <Box>
                        <Title
                            title='Букеты цветов с доставкой'
                            path='/category/1'
                        />
                            <ProductList 
                            col={4}
                            addToCart={addToCart}
                            products={products}
                            />
                    </Box>
                )}
            </Container>
        </>
    )
}