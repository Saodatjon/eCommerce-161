import React from 'react'
import { CloseIcon } from '../icons'
import { incrementAC, decrementAC } from '../../redux/reducers/cartReducer'
import { useDispatch } from 'react-redux'
import { Flex, Box, Image, Counter, Button } from '../index'
import { H4,  SemiSpan,  Span } from '../Typography'
import { ProductCart3Style } from './ProductCartStyle'

function ProductCart3({ product, removeToCart, ...props }) {
    const dispatch = useDispatch()

    function increment() {
        dispatch(incrementAC(product.id))
    }

    function decrement() {
        dispatch(decrementAC(product.id))
    }
    return (
        <ProductCart3Style>
            <Flex gap='20px' borderBottom='1px solid #E2E4EB' pb='34px'>
                <Box w='90%' h='90vh'>
                    <Image
                        src={product.images[0]}
                        alt={product.name_uz}
                        objectFit='cover'
                        borderRadius='5px'
                    />
                </Box>

                <Box flex='1 1 auto'>
                    <Flex justifyContent='space-between' mb='5px'>
                        <Span color='#222A46'>{product.name_uz}</Span>
                        <Button onClick={() => removeToCart(product.id)}>
                            <CloseIcon />
                        </Button>
                    </Flex>

                    {/* <Box mb='15px'>
                        <SemiSpan color='#505567'>
                            {product.description_uz}
                        </SemiSpan>
                    </Box> */}

                    <Flex gap='34px'>
                        <Counter
                            qty={product.qty}
                            increment={increment}
                            decrement={decrement}
                        />
                        <H4>{product.price.toLocaleString()} ₽</H4>
                    </Flex>
                </Box>
            </Flex>
        </ProductCart3Style>
    )
}

export default ProductCart3