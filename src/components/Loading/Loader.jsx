import React from 'react'
import { LoaderSpinner, LoaderStyle } from './LoaderStyle'

function Loader() {
    return (
        <LoaderStyle>
            <LoaderSpinner />
        </LoaderStyle>
    )
}

export default Loader