import React from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'

function Header() {
    return (
        <header className='header'>
            <HeaderTop />
            <HeaderMid />
            <HeaderBottom />
        </header>
    )
}

export default Header
