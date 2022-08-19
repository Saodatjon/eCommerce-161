import React from 'react'
import { SemiSpan } from '../Typography'
import { BadgeStyle } from './BadgeStyle'

function Badge({ qty }) {
    return (
        <BadgeStyle>
            <SemiSpan color='#fff'>{qty}</SemiSpan>
        </BadgeStyle>
    )
}

export default Badge