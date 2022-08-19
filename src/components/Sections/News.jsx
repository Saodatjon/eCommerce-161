import { Card, Space } from 'antd';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import {Navigation } from "swiper"
import RImage from '../../assets/images/img_5.png'
import TImage from '../../assets/images/img_6.png'
import MImage from '../../assets/images/img_7.png'
import Title from   '../Title/Title'
import { Container } from '../Container';
import { H3, Small} from '../Typography';


const News = () => (

    <Container>
      <Title title='News' />
    <Swiper
       breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
        slidesPerView={3}
        spaceBetween={100}
       slidesPerGroup={1}
       loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Navigation]}
      //  className='cart'
      >
      
    <SwiperSlide> 
        <Card
          className='card'
     hoverable
    style={{
   width: 300,
}}
cover={<img alt="example" src={RImage} width='100%' />}
        >
          <Space direction='vertical'>
          <H3>Какие цветы дарят мужчинам</H3>
          <Small>Многие мужчины любят цветы не меньше, чем женщины.</Small>
          </Space>
</Card>
      </SwiperSlide>

      <SwiperSlide> 
        <Card
          className='card'
 hoverable
 style={{
   width: 300,
  
}}
cover={<img alt="example" src={TImage} width='100%' />}
>
<Space direction='vertical'>
          <H3>Какие цветы дарят мужчинам</H3>
          <Small>Многие мужчины любят цветы не меньше, чем женщины.</Small>
          </Space>
</Card>
      </SwiperSlide>

      <SwiperSlide> 
        <Card
          className='card'
 hoverable
 style={{
   width: 300,
  
  
}}
cover={<img alt="example" src={MImage} width='100%' />}
>
<Space direction='vertical'>
          <H3>Какие цветы дарят мужчинам</H3>
          <Small>Многие мужчины любят цветы не меньше, чем женщины.</Small>
          </Space>
</Card>
      </SwiperSlide>

  

    </Swiper>
  </Container>
 
);

export default News;
