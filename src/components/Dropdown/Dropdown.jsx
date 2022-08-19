import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown } from '../icons'
import { H4 } from '../Typography'
import { DropdownPanelStyle, DropdownStyle } from './DropdownStyle'

function Dropdown({ title, items, ...props }) {
    const [open, setOpen] = useState(false)

    function hoverHandeler(bool) {
        setOpen(bool)
    }

    return (
        <DropdownStyle
            onMouseEnter={() => hoverHandeler(true)}
            onMouseLeave={() => hoverHandeler(false)}
        >
            <H4 color='#1B1C21'>{title}</H4>
            <ArrowDown />

            <DropdownPanelStyle open={open}>
                {items.map((item) => {
                    return (
                        <Link key={item.id} to={`/category/${item.slug}`}>
                            <H4>{item.name_ru}</H4>
                        </Link>
                    )
                })}
            </DropdownPanelStyle>
        </DropdownStyle>
    )
}

export default Dropdown