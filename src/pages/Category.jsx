import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
    Container,
    Flex,
    Box,
    Title,
    Dropdown,
    ProductsList,
    Loader,
    Sidebar,
} from '../components/index'
import {  SemiSpan } from '../components/Typography'
import { addToCartAC } from '../redux/reducers/cartReducer'
import { getCategory } from '../redux/reducers/categoriesReducer'

export default function Category() {
    const { products, loading, categoryAttributes, subCats } = useSelector(
        (state) => state.categories
    )
    const location = useLocation()
    const dispatch = useDispatch()

    function addToCart(product) {
        dispatch(addToCartAC(product))
    }

    useEffect(() => {
        dispatch(getCategory(location.pathname.split('/')[2]))
    }, [location])

    const items = [
        {
            id: 1,
            name_ru: 'По алфавиту',
            slug: '/category/1',
        },
        {
            id: 2,
            name_ru: 'По популярности',
            slug: '/category/1',
        },
        {
            id: 3,
            name_ru: 'По убыванию цены',
            slug: '/category/1',
        },
        {
            id: 4,
            name_ru: 'По возрастанию цены',
            slug: '/category/1',
        },
    ]
    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <Flex gap='50px'>
                        <Box
                            className='catBox'
                        w='30%'
                        background='#fff'
                        border='1px solid #F2F3F5'
                        borderRadius='5px'
                        p='50px'
                    >
                        <Sidebar
                            categoryAttributes={categoryAttributes}
                            subCats={subCats}
                        />
                    </Box>

                    <Box w='70%'>
                        <Flex justifyContent='space-between'>
                            <Title title='Букеты из роз' />
                            <Flex alignItems='center' gap='15px'>
                                <SemiSpan>Сортировать:</SemiSpan>
                                <Box
                                    p='8px'
                                    border='1px solid #D0D2D7'
                                        borderRadius='5px'
                                        w='100%'
                                >
                                    <Dropdown
                                        title='По популярности'
                                        items={items}
                                    />
                                </Box>
                            </Flex>
                        </Flex>

                        <Box>
                            <ProductsList
                                products={products}
                                col={3}
                                addToCart={addToCart}
                            />
                        </Box>
                    </Box>
                </Flex>
            )}
        </Container>
    )
}
