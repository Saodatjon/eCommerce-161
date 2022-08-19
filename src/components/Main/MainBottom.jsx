import React from 'react'
import { Box } from '../Box'
import { Container } from '../Container'
import { Flex } from '../Flex'
import {  NizkiIcon, PrizeIcon, TrackIcon, FlowerIcon } from '../icons'
import { MainBottomBox } from './MainStyle'

function MainBottom() {
  return (
    <Container className='mainBot'>
       <Flex justifyContent='space-between' alignItems='center' gap='30px'  >
      <MainBottomBox>
        <Box>< FlowerIcon /></Box>
        <Box>Экспресс-доставка от 90 минут</Box>
      </MainBottomBox>
      <MainBottomBox>
      <Box>   <PrizeIcon /></Box>
        <Box>Низкие цены</Box>
      </MainBottomBox>
      <MainBottomBox>
      <Box><NizkiIcon /></Box>
        <Box>Каждый день поступле ниесвежих цветов</Box>
      </MainBottomBox>
      <MainBottomBox>
      <Box><TrackIcon/></Box>
        <Box>Низкие цены</Box>
        </MainBottomBox>
        <MainBottomBox>
      <Box>   <PrizeIcon /></Box>
        <Box>Низкие цены</Box>
      </MainBottomBox>
    </Flex>
    </Container>
  )
}

export default MainBottom