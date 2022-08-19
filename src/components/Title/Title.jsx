import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from '../Flex'
import { ArrowRightIcon } from '../icons'
import { H1 } from '../Typography'

function Title({ title, path, ...props }) {
    return (
        <Flex justifyContent='space-between' alignItems='center' mb='30px'>
            <H1>{title}</H1>

            {path && (
                <Link to={path}>
                    <ArrowRightIcon />
                </Link>
            )}
        </Flex>
    )
}

export default Title