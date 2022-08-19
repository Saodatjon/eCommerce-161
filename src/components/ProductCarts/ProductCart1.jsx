import React from 'react'
import { BagIcon } from '../icons'
import { Image, Box, Flex } from '../index'
import { H3, H4, H5, SemiSpan } from '../Typography'
import {
    ProductBtn,
    ProductCart1ContentStyle,
    ProductCart1Style,
} from './ProductCartStyle'
import { Link } from 'react-router-dom'

function ProductCart1({ product, addToCart, ...props }) {
    return (
        <ProductCart1Style col={props.col} className='cart1'>
            <Link to={`/product/${product.slug}`}>
                <Box h='60vh'>
                    <Image
                        src={product.images[0]}
                        alt={product.name_uz}
                        objectFit='cover'
                    />
                </Box>
            </Link>

            <ProductCart1ContentStyle>
                <Box>
                    <Link to={`/product/${product.slug}`}>
                        <H4 mb='10px'>{product.name_uz}</H4>
                        {/* <SemiSpan>{product.description_uz}</SemiSpan> */}
                    </Link>
                </Box>

                <Flex justifyContent='space-between' alignItems='center'>
                    <Box>
                        <H5>{product.price}</H5>
                        <SemiSpan color='#B0B2B9' textDecoration='line-through'>
                            {product.old_price}
                        </SemiSpan>
                    </Box>

                    <ProductBtn onClick={() => addToCart(product)}>
                        <BagIcon />
                        <SemiSpan>В корзину</SemiSpan>
                    </ProductBtn>
                </Flex>
            </ProductCart1ContentStyle>
        </ProductCart1Style>
    )
}

export default ProductCart1