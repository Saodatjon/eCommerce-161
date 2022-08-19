import React from "react";
import { Flex } from '../Flex'
import ProductCart3 from "../ProductCarts/ProductCart3";

function ProductListColumn({ products, removeToCart, ...props }) {
    return (
        <Flex flexDirection='column'>
            {products.map((item, i) => {
                return (
                    <ProductCart3
                        col={3}
                        key={i}
                        product={item}
                        removeToCart={removeToCart}
                    />
                )
            })}
        </Flex>
    )
}

export default ProductListColumn