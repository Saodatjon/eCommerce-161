import React from 'react'
import {  H1, H2,  SemiSpan, Small } from '../Typography'
import {Flex, Container} from '../index'
import {FooterStyle, FooterPanelStyle} from './FooterStyle'
import {PurseIcon, VisaIcon, MasterCardIcon, MasterIcon, RoundIcon, TickIcon} from '../icons'
import Viki from '../../assets/images/vk.png'
import Insta from '../../assets/images/instagram.png'
import Facebook from '../../assets/images/fb.png'
import  YouTube from '../../assets/images/YouTube.png'
import { Space } from 'antd'


function Footer({ title, items, ...props }) {
    return (
        <>
             <FooterPanelStyle gap='50px' className='footer'>
                <H1>Наши координаты</H1>
                <Space size='large'>
                    <SemiSpan>Служба Доставки</SemiSpan>
                    <H2>+7 (920) 211-49-03</H2>
                </Space>
                <Space>
                    <SemiSpan>Ул. Вл. Невского 17</SemiSpan>
                    <H2>+7 (920) 211-49-03</H2>
                </Space>
                <Space>
                    <SemiSpan>Ул. Революции 1905 года 80</SemiSpan>
                    <H2>+7 (906) 678-65-99</H2>
                </Space>
                <Space>
                    <SemiSpan>E-mail:</SemiSpan>
                    <H2>info@lavkaroz.ru</H2>
                </Space>
            </FooterPanelStyle>
            <FooterStyle>  
        <Flex gap='230px' alignItems='center' className='footer'>
                    <Flex>
                        <Small>© 2014 – 2022. Интернет-магазин «Лавка Роз»</Small>
                    </Flex> 
              <Flex gap='10px'>
                <PurseIcon/>
                <VisaIcon/>
                <MasterCardIcon/>
                <MasterIcon/>
                <TickIcon/>
                <RoundIcon/>
              </Flex>
              <Flex alignItems='center' gap='10px'>
                <Small>Мы в социальных сетях:</Small>
              
                <img src={Viki} alt='Viki'/>
                <img src={Facebook} alt='facebook'/>
                <img src={Insta} alt='instagram'/>
                <img src={YouTube}  alt='youTube'/>
              
                </Flex>
                 </Flex>
            </FooterStyle>

            {/* <FooterPanelStyle gap='50px'>
                <H1>Наши координаты</H1>
                <Space size='large'>
                    <SemiSpan>Служба Доставки</SemiSpan>
                    <H2>+7 (920) 211-49-03</H2>
                </Space>
                <Space>
                    <SemiSpan>Ул. Вл. Невского 17</SemiSpan>
                    <H2>+7 (920) 211-49-03</H2>
                </Space>
                <Space>
                    <SemiSpan>Ул. Революции 1905 года 80</SemiSpan>
                    <H2>+7 (906) 678-65-99</H2>
                </Space>
                <Space>
                    <SemiSpan>E-mail:</SemiSpan>
                    <H2>info@lavkaroz.ru</H2>
                </Space>
            </FooterPanelStyle> */}
          
        </>
       
    )
}

export default Footer