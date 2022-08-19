import React, { useEffect } from 'react'
import { HeaderBottomStyle } from './HeaderElements'
import { Container, Flex, Dropdown } from '../index'
import { Link } from 'react-router-dom'
import { H4, Span } from '../Typography'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/reducers/categoriesReducer'

function HeaderBottom() {
    const { items, loading } = useSelector((state) => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <HeaderBottomStyle>
            <Container>
                {loading ? (
                    <Span>Loading....</Span>
                ) : (
                    <Flex gap='40px' className='headbot'>
                        {items?.map((item, i) => {
                            return (
                                <Link to={`/categories/${item.slug}`} key={i}>
                                    {item.children.length > 0 ? (
                                        <Dropdown
                                            title={item.name_ru}
                                            items={item.children}
                                        />
                                    ) : (
                                        <H4 color='@#1B1C21'>{item.name_ru}</H4>
                                    )}
                                </Link>
                            )
                        })}
                    </Flex>
                )}
            </Container>
        </HeaderBottomStyle>
    )
}

export default HeaderBottom
