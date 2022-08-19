import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation } from "swiper"
import Fgirl from '../../assets/images/girl_1.png'
import Sgirl from '../../assets/images/girl_2.png'
import Tgirl from '../../assets/images/girl_3.png'
import FoGirl from '../../assets/images/girl_4.png'
import Title from   '../Title/Title'
import { Container } from '../Container';
import { Card, Space } from 'antd';

function SwiperGallery(){
  return (
    <Container>
      <Title title='Gallery' />
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
        spaceBetween={150}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      >
          <SwiperSlide> 
        <Card
          className='card'
     hoverable
    style={{
      width: 300,
      height:400,
      
}}
cover={<img alt="example" src={Fgirl} width='100%' />}
        >
          <Space direction='vertical'>
          
          </Space>
     </Card>
        </SwiperSlide>

        <SwiperSlide> 
        <Card
          className='card'
     hoverable
    style={{
      width: 300,
      height:400,
      
}}
cover={<img alt="example" src={Sgirl} width='100%' />}
        >
          <Space direction='vertical'>
          
          </Space>
     </Card>
        </SwiperSlide>

        <SwiperSlide> 
        <Card
          className='card'
     hoverable
    style={{
      width: 300,
      height:400,
      
}}
cover={<img alt="example" src={Tgirl} width='100%' />}
        >
          <Space direction='vertical'>
          
          </Space>
     </Card>
        </SwiperSlide>

        <SwiperSlide> 
        <Card
          className='card'
     hoverable
    style={{
      width: 300,
      height:400,
      
}}
cover={<img alt="example" src={FoGirl} width='100%' />}
        >
          <Space direction='vertical'>
          
          </Space>
     </Card>
        </SwiperSlide>
    </Swiper>
  </Container>
  );
};
export default SwiperGallery;