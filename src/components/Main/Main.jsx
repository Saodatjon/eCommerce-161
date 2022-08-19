import React from 'react'
import { routes } from '../../utilis/routes'
import { Routes, Route } from 'react-router-dom'
import { Flex } from '../Flex'
import { ImageMain, } from '../Image'
import MainBottom from './MainBottom'
import MainImage from '../../assets/images/MainImg.jpg'

function Main() {
    return (
        <main className='main'>
            <Flex flexWrap='wrap' className='mainimg'>
                <ImageMain
                    src={MainImage}
                />
                <MainBottom/>
            </Flex>
            <Routes>
                {routes.map((item) => {
                    return (
                        <Route
                            key={item.id}
                            path={item.path}
                            element={item.component}
                        />
                    )
                })}
            </Routes>
        </main>
    )
}
export default Main
