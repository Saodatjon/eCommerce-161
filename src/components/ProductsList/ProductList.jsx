import React from 'react'
import { Flex } from '../Flex'
import ProductCart1 from '../ProductCarts/ProductCart1'

function ProductList({ products, addToCart, ...props }) {
    return (
        <Flex gap='105px' flexWrap='wrap' className='cart1'>
            {products.map((item, i) => {
                return (<ProductCart1
                    addToCart={addToCart}
                    key={i}
                    product={item}
                    col={props.col}
                />)
            })}
        </Flex>
    )
}

export default ProductList