import React from 'react'
import { Button } from '../Button'
import { H5 } from '../Typography'
import { CounterStyle } from './CounterStyle'

function Counter({ qty, decrement, increment, ...props }) { 
    return(
        <CounterStyle>
            <Button
                color='#7D818E'
                fontSize='20px'
                borderWidth='0'
                onClick={() => decrement()}
            >-
            </Button>
            <H5>{qty}</H5>
            <Button
                color='#7D818E'
                fontSize='20px'
                borderWidth='0'
                onClick={() => increment()}
            >+
            </Button>
        </CounterStyle>
    )
}

export default Counter