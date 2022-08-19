import React, { useState, useEffect } from 'react'
import { Box, Button, Container, Flex, Title } from '../components'
import { H1, H2, H3, H4, Span } from '../components/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { sumAllPrice } from '../utilis/helpers'
import { sumQuantity } from './../utilis/helpers'
import { CartSidebarBtn } from './../components/CartSidebarBtn'
import { removeToCartAC } from './../redux/reducers/cartReducer'
import { Input, Label } from '../components/Form/Form'
import { TextArea } from './../components/Form/Form'
import GlobalIcon from '../components/icons/GlobalIcon.jsx'
import { icons } from './../utilis/iconsData'
import { setAuthModalAC } from './../redux/reducers/modalReducer'
import $host from '../utilis/https'
import ProductCart3 from '../components/ProductCarts/ProductCart3'

export default function Cart() {
    const initialPostData = {
        orderItems: [],
        delivery_address: '',
        delivery_phone: '',
        order_note: '',
        payment_method: 0,
    }
    const { cartProducts, userState } = useSelector((state) => state)
    const dispatch = useDispatch()
    const [postData, setPostData] = useState(initialPostData)
    const [isValidate, setIsValidate] = useState({
        delivery_address: false,
        delivery_phone: false,
    })

    function removeToCart(id) {
        dispatch(removeToCartAC(id))
    }

    function orderBtnHandler() {
        if (userState.isAuthorized) {
            if (postData.delivery_phone === '') {
                setIsValidate({ ...isValidate, delivery_phone: true })
            } else if (postData.delivery_address === '') {
                setIsValidate({ ...isValidate, delivery_address: true })
            } else {
                $host
                    .post('/order/create', { data: postData })
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        } else {
            dispatch(setAuthModalAC(true))
        }
    }

    function handleChange({ target }) {
        setPostData({ ...postData, [target.name]: target.value })
    }

    useEffect(() => {
        setPostData({
            ...postData,
            orderItems: cartProducts.map((item) => {
                return { qty: item.qty, product_id: item.id }
            }),
        })
    }, [cartProducts])

    console.log(postData)

    return (
        <Container>
            <Title title='Корзина' />

            {cartProducts.length > 0 ? (
                <Flex  gap='30' alignItems='flex-start' justifyContent='space-between'>
                    <Box w='75%'>
                        <Box
                            border='1px solid #E3E3E8'
                            borderRadius='10px'
                            mb='50px'
                        >
                            <Flex
                                justifyContent='space-between'
                                borderBottom='1px solid #E3E3E8'
                                p='25px 40px'
                            >
                                <H1>Товары в корзине</H1>
                                <Button>
                                    <Span color='#7D818E'>
                                        Очистить корзину
                                    </Span>
                                </Button>
                            </Flex>

                            <Box>
                                {cartProducts.map((item, i) => {
                                    return (
                                        <ProductCart3
                                            key={i}
                                            product={item}
                                            removeToCart={removeToCart}
                                        />
                                    )
                                })}
                            </Box>
                        </Box>

                        <Box
                            backgroundColor='#fff'
                            border='1px solid #E2E4EB'
                            borderRadius='10px'
                        >
                            <Box p='40px' borderBottom='1px solid #E2E4EB'>
                                <Flex gap='35' alignItems='center' mb='40px'>
                                    <Flex
                                        backgroundColor='#1B1C21'
                                        w='30px'
                                        h='30px'
                                        borderRadius='50%'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                    </Flex>
                                    <H1 color='#1B1C21'>Контактные данные</H1>
                                </Flex>

                                <Box mb='20px'>
                                    <Label
                                        for='number'
                                        color={
                                            isValidate.delivery_phone
                                                ? '#E31059'
                                                : '#353949'
                                        }
                                    >
                                        Ваш телефон*
                                    </Label>
                                    <Input
                                        id='number'
                                        type='number'
                                        name='delivery_phone'
                                        value={postData.delivery_phone}
                                        onChange={(e) => handleChange(e)}
                                        placeholder='+998 (__) ___-__-__'
                                        borderColor={
                                            isValidate.delivery_phone
                                                ? '#E31059'
                                                : '#d0d2d7'
                                        }
                                    />
                                </Box>

                                <Box mb='20px'>
                                    <Label for='address'>Ваш адрес*</Label>
                                    <Input
                                        id='address'
                                        type='text'
                                        name='delivery_address'
                                        value={postData.delivery_address}
                                        onChange={(e) => handleChange(e)}
                                        placeholder='г.Ургенч, ул Фаязов 3'
                                        width='100%'
                                        borderColor={
                                            isValidate.delivery_address
                                                ? '#E31059'
                                                : '#d0d2d7'
                                        }
                                    />
                                </Box>
                            </Box>

                            <Box p='30px' borderBottom='1px solid #E2E4EB'>
                                <Flex gap='15' alignItems='center' mb='20px'>
                                    <Flex
                                        backgroundColor='#1B1C21'
                                        w='30px'
                                        h='30px'
                                        borderRadius='50%'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                    </Flex>
                                    <H3 color='#1B1C21'>Детали доставки</H3>
                                </Flex>

                                <Box mb='20px'>
                                    <Label for='note'>Комментарии</Label>
                                    <TextArea
                                        id='note'
                                        placeholder='Текст открытки'
                                        width='100%'
                                        height='175px'
                                        name='order_note'
                                        value={postData.order_note}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Box>
                            </Box>

                            <Box p='30px' borderBottom='1px solid #E2E4EB'>
                                <Flex gap='15' alignItems='center' mb='20px'>
                                    <Flex
                                        backgroundColor='#1B1C21'
                                        w='30px'
                                        h='30px'
                                        borderRadius='50%'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                    </Flex>
                                    <H3 color='#1B1C21'>Способы оплаты</H3>
                                </Flex>

                                <Box>
                                    <Box
                                        mb='10px'
                                        backgroundColor='#F2F3F5'
                                        border='1px solid #D0D2D7'
                                        borderRadius='8px'
                                        p='20px'
                                        w='50%'
                                    >
                                        <Label>
                                            <Flex justifyContent='space-between'>
                                                <Flex
                                                    alignItems='center'
                                                    gap='15'
                                                >
                                                    <GlobalIcon
                                                        width='24px'
                                                        height='24px'
                                                        fill='#F2F3F5'
                                                        dangerouslySetInnerHTML={{
                                                            __html: icons.paymentIcon1,
                                                        }}
                                                    />
                                                    <Span>
                                                        Оплата наличными
                                                    </Span>
                                                </Flex>
                                                <Input
                                                    type='radio'
                                                    name='payment1'
                                                />
                                            </Flex>
                                        </Label>
                                    </Box>
                                    <Box
                                        mb='10px'
                                        backgroundColor='#fff'
                                        border='1px solid #D0D2D7'
                                        borderRadius='8px'
                                        p='20px'
                                        w='50%'
                                    >
                                        <Label>
                                            <Flex justifyContent='space-between'>
                                                <Flex
                                                    alignItems='center'
                                                    gap='15'
                                                >
                                                    <GlobalIcon
                                                        width='24px'
                                                        height='24px'
                                                        fill='#F2F3F5'
                                                        dangerouslySetInnerHTML={{
                                                            __html: icons.paymentIcon2,
                                                        }}
                                                    />
                                                    <Span>
                                                        Банковской картой онлайн
                                                    </Span>
                                                </Flex>

                                                <Input
                                                    type='radio'
                                                    name='payment1'
                                                    disabled
                                                />
                                            </Flex>
                                        </Label>
                                    </Box>
                                    <Box
                                        mb='10px'
                                        backgroundColor='#fff'
                                        border='1px solid #D0D2D7'
                                        borderRadius='8px'
                                        p='20px'
                                        w='50%'
                                    >
                                        <Label>
                                            <Flex justifyContent='space-between'>
                                                <Flex
                                                    alignItems='center'
                                                    gap='15'
                                                >
                                                    <GlobalIcon
                                                        width='24px'
                                                        height='24px'
                                                        fill='#F2F3F5'
                                                        dangerouslySetInnerHTML={{
                                                            __html: icons.paymentIcon3,
                                                        }}
                                                    />
                                                    <Span>
                                                        Google Pay, Apple Pay
                                                    </Span>
                                                </Flex>
                                                <Input
                                                    type='radio'
                                                    name='payment1'
                                                    disabled
                                                />
                                            </Flex>
                                        </Label>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        w='25%'
                        border='1px solid #F2F6F7'
                        borderRadius='10px'
                        backgroundColor='#fff'
                        p='20px'
                    >
                        <Flex
                            justifyContent='space-between'
                            borderBottom='1px solid #F2F3F5'
                            p='20px 30px'
                        >
                            <H4>Итого:</H4>
                            <H4>{sumAllPrice(cartProducts)} ₽</H4>
                        </Flex>

                        <Flex justifyContent='space-between' p='20px 30px'>
                            <Span color='#222A46;'>
                                {sumQuantity(cartProducts)} товара
                            </Span>
                            <H4 color='#222A46;'>
                                {sumAllPrice(cartProducts)} ₽
                            </H4>
                        </Flex>

                        <Flex justifyContent='space-between' p='20px 30px'>
                            <Span color='#222A46;'>Скидка</Span>
                            <H4 color='#E2195B;'>0 ₽</H4>
                        </Flex>

                        <Flex justifyContent='space-between' p='20px 30px'>
                            <Span color='#222A46;'>Доставка</Span>
                            <H4 color='#222A46;'>бесплатно</H4>
                        </Flex>

                        <Box p='20px 30px'>
                            <CartSidebarBtn onClick={() => orderBtnHandler()}>
                                <Span color='#fff'>Оформить заказ</Span>
                            </CartSidebarBtn>
                        </Box>
                    </Box>
                </Flex>
            ) : (
                <Flex
                    flex='1 1 auto'
                    alignItems='center'
                    justifyContent='center'
                >
                    <H3>Ваша корзина для покупок пуста.</H3>
                </Flex>
            )}
        </Container>
    )
}
