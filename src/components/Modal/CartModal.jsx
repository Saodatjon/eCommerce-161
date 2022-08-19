import React from 'react'
import { Flex, Box, Button } from '../index'
import { CloseIcon } from '../icons'
import { H3, H4, Span } from '../Typography'
import { ModalPanelMid, ModalPanelStyle, ModalStyle } from './ModalStyle'
import ProductCart2 from '../ProductCarts/ProductCart2'
import { sumAllPrice } from '../../utilis/helpers'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCartAC } from '../../utilis/reducers/cartReducer'
import { setCartModalAC } from '../../redux/reducers/modalReducer'
function Modal() {
    const { modal, cartProducts } = useSelector((state) => state)
    const { cartModal } = modal
    const dispatch = useDispatch()
    function modalHandler() {
        dispatch(setCartModalAC(false))
    }

    function removeToCart(id) {
        dispatch(removeToCartAC(id))
    }
    return (
        <ModalStyle open={cartModal}>
            <ModalPanelStyle open={cartModal}>
                <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    p='20px'
                    borderBottom='1px solid#E2E4EB'
                >
                    <H4>Корзина</H4>
                    <button onClick={() => modalHandler()}>
                        <CloseIcon />
                    </button>
                </Flex>

                {cartProducts.length > 0 ? (
                    <>
                        <ModalPanelMid>
                            <Box>
                                {cartProducts.map((item, i) => {
                                    return (
                                        <ProductCart2
                                            key={i}
                                            product={item}
                                            removeToCart={removeToCart}
                                        />
                                    )
                                })}
                            </Box>
                        </ModalPanelMid>

                        <Box>
                            <Flex
                                justifyContent='space-between'
                                alignItems='center'
                                p='20px'
                            >
                                <H3 color='#1B1C21'>Итого:</H3>
                                <H3 color='#1B1C21'>
                                    {sumAllPrice(cartProducts)} ₽
                                </H3>
                            </Flex>

                            <Flex
                                justifyContent='space-between'
                                alignItems='center'
                                p='20px'
                                backgroundColor='#F2F6F7'
                            >
                                <Button onClick={() => modalHandler()}>
                                    <Span>Продолжить покупки</Span>
                                </Button>
                                <Button onClick={() => modalHandler()}>
                                    <Link to='/cart'>
                                        <Span>Оформить заказ</Span>
                                    </Link>
                                </Button>
                            </Flex>
                        </Box>
                    </>
                ) : (
                    <Flex
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        pt='150px'
                    >
                        <Span>Ничего не найдено.</Span>
                        <Button
                            mt='10px'
                            p='13px 0'
                            backgroundColor='#0093A2'
                            borderRadius='5px'
                            style={{ display: 'block' }}
                            onClick={() => modalHandler()}
                        >
                            <Link to='/'>
                                <Span color='#000'>Вернуться домой</Span>
                            </Link>
                        </Button>
                    </Flex>
                )}
            </ModalPanelStyle>
        </ModalStyle>
    )
}

export default Modal
