import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
    Box,
    Container,
    Counter,
    Flex,
    Image,
    Loader,
    Button,
} from '../components'
import { BagIcon } from '../components/icons'
import { ProductBtn } from '../components/ProductCarts/ProductCartStyle'
import { H1, H3, SemiSpan, Span } from '../components/Typography'
import {
    addToCartAC,
    decrementAC,
    incrementAC,
} from '../redux/reducers/cartReducer'
import { getProduct, getAttributes } from '../redux/reducers/productReducer'



export default function Product() {
    const { product, loading, attributes } = useSelector(
        (state) => state.product
    )
    const { cartProducts } = useSelector((state) => state)
    const dispatch = useDispatch()
    const location = useLocation()
    const [activeAttribute, setActiveAttribute] = useState([])
    const [imageState, setImageState] = useState(
        product?.images?.find(() => true)
    )
    const [productIsCart, setProductIsCart] = useState(false)

    function activeAttributeHandler(attributeId, valueId) {
        let isActiveAtribute = activeAttribute.some(
            (item) => item.attributeId === attributeId
        )
        if (isActiveAtribute) {
            setActiveAttribute(
                activeAttribute.map((item) =>
                    item.attributeId === attributeId
                        ? { ...item, valueId: valueId }
                        : item
                )
            )
        } else {
            setActiveAttribute([...activeAttribute, { attributeId, valueId }])
        }
    }

    function imageHandler(image) {
        setImageState(image)
    }

    function addToCart(product) {
        dispatch(addToCartAC(product))
        setProductIsCart(true)
    }

    function increment() {
        dispatch(incrementAC(product.id))
    }

    function decrement() {
        dispatch(decrementAC(product.id))
    }

    useEffect(() => {
        dispatch(getProduct(location.pathname.split('/')[2]))
        dispatch(getAttributes())
    }, [])

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <Flex gap='25px'>
                    <Box w='50%'>
                        <Box h='400px' mb='15px'>
                            <Image
                                src={imageState}
                                objectFit='cover'
                                alt={product?.name_uz}
                            />
                        </Box>

                        <Flex gap='10px'>
                            {product?.images?.map((image, i) => {
                                return (
                                    <Box
                                        key={i}
                                        w='112px'
                                        h='90px'
                                        border={
                                            image === imageState
                                                ? '2px solid #e2195b'
                                                : 0
                                        }
                                    >
                                        <Image
                                            src={image}
                                            onClick={() => imageHandler(image)}
                                            alt={product?.name_uz}
                                        />
                                    </Box>
                                )
                            })}
                        </Flex>

                        <Box mt='25px'>
                            <Span
                                dangerouslySetInnerHTML={{
                                    __html: product?.description_uz,
                                }}
                            ></Span>
                        </Box>
                    </Box>
                    <Box w='49%' border='1px solid #E2E4EB' p='20px 25px'>
                        <H1 color='#222A46' mb='5px'>
                            {product?.name_ru}
                            <Span
                                dangerouslySetInnerHTML={{
                                    __html: product?.description_uz,
                                }}
                            ></Span>
                        </H1>

                        <Box mt='10px'>
                            {attributes?.map((attribute) => {
                                return (
                                    <Box key={attribute.id} mb='10px'>
                                        <SemiSpan>
                                            {attribute?.name_ru}
                                        </SemiSpan>
                                        <Flex
                                            flexWrap='wrap'
                                            gap='5px'
                                            mt='10px'
                                        >
                                            {attribute?.attributeValues?.map(
                                                (value) => {
                                                    return (
                                                        <Button
                                                            key={value.id}
                                                            p='6px 10px'
                                                            border='1px solid #D0D2D7'
                                                            backgroundColor={
                                                                activeAttribute.some(
                                                                    (item) =>
                                                                        item.attributeId ===
                                                                            attribute.id &&
                                                                        item.valueId ===
                                                                            value.id
                                                                )
                                                                    ? '#0093A2'
                                                                    : '#fff'
                                                            }
                                                            borderRadius='5px'
                                                            onClick={() =>
                                                                activeAttributeHandler(
                                                                    attribute?.id,
                                                                    value?.id
                                                                )
                                                            }
                                                        >
                                                            <SemiSpan
                                                                color={
                                                                    activeAttribute.some(
                                                                        (
                                                                            item
                                                                        ) =>
                                                                            item.attributeId ===
                                                                                attribute.id &&
                                                                            item.valueId ===
                                                                                value.id
                                                                    )
                                                                        ? '#fff'
                                                                        : '#353949'
                                                                }
                                                            >
                                                                {value.value_ru}
                                                            </SemiSpan>
                                                        </Button>
                                                    )
                                                }
                                            )}
                                        </Flex>
                                    </Box>
                                )
                            })}
                        </Box>

                        <Flex
                            alignItems='center'
                            justifyContent='space-between'
                            mt='30px'
                        >
                            <Box>
                                <H3 fontWeight='700' color='#222A46' mb='5px'>
                                    {product?.price} ₽
                                </H3>
                                <SemiSpan
                                    color='#B0B2B9'
                                    textDecoration='line-through'
                                >
                                    {product?.previous_price} ₽
                                </SemiSpan>
                            </Box>

                            <Box>
                                {productIsCart ? (
                                    <Counter
                                        qty={
                                            cartProducts.filter(
                                                (a) => a.id === product.id
                                            )[0].qty
                                        }
                                        increment={increment}
                                        decrement={decrement}
                                    />
                                ) : (
                                    <ProductBtn
                                        onClick={() => addToCart(product)}
                                    >
                                        <BagIcon />
                                        <SemiSpan>В  корзину</SemiSpan>
                                    </ProductBtn>
                                )}
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            )}
        </Container>
    )
}