import React from 'react'
import { Link } from 'react-router-dom'
import { BagIcon, HeartIcon, SearchIcon } from '../icons/index'
import { Button, Container, Flex, Image } from '../index'
import { H5, SemiSpan } from '../Typography'
import { CartCount, Circle, SearchBar, SearchInput } from './HeaderElements'
import { searchTextAC } from '../../redux/reducers/searchTitleReducer'
import { setCartModalAC } from '../../redux/reducers/modalReducer'
import { sumAllPrice, sumQuantity } from './../../utilis/helpers'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../assets/images/logo.png'

function HeaderMid() {
    const dispatch = useDispatch()
    const { searchTitle, cartProducts } = useSelector((state) => state)

    function onChangeHandler(text) {
        dispatch(searchTextAC(text))
    }

    function modalHandler() {
        console.log(true)
        dispatch(setCartModalAC(true))
    }

    return (
        <Container>
            <Flex alignItems='center' justifyContent='space-between' py='16px' className='headermid'>
                <Link to='/'>
                    <Image src={Logo} />
                </Link>

                <SearchBar className='searchbar'>
                    <SearchInput
                        onChange={(e) => onChangeHandler(e.target.value)}
                        value={searchTitle}
                        placeholder='Поиск по сайту'
                    />
                    <SearchIcon />
                </SearchBar>

                <Flex style={{ gap: '20px' }}>
                    <Circle>
                        <HeartIcon />
                    </Circle>

                    <Button onClick={() => modalHandler()}>
                        <Flex alignItems='center' style={{ gap: '14px' }}>
                            <Circle>
                                {cartProducts.length > 0 ? (
                                    <CartCount>
                                        <SemiSpan>
                                            {sumQuantity(cartProducts)}
                                        </SemiSpan>
                                    </CartCount>
                                ) : null}
                                <BagIcon />
                            </Circle>

                            {cartProducts.length > 0 ? (
                                <H5 color='#E2195B'>
                                    {sumAllPrice(cartProducts)} ₽
                                </H5>
                            ) : null}
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default HeaderMid
