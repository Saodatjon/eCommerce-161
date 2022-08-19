import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper"
import img1 from '../../assets/images/img_1.png'
import img2 from '../../assets/images/img_2.png'
import img3 from '../../assets/images/img_3.png'
import img4 from '../../assets/images/img_4.png'
import { Image } from '../Image';
import Title from   '../../components/Title/Title'
import {  Space } from 'antd';
import {  H3, SemiSpan } from '../Typography';
import { ContainerS } from './SectionsStyle';


function Sections(){
  return (
    <ContainerS>
      <Title title='Sections' />
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
        slidesPerView={4}
        spaceBetween={140}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[ Navigation]}
      // className='cart'
      >
        <SwiperSlide className='my' style={{boxShadow:'5px 5px 5px gray'}} >
          <Image src={img1} />
          <Space>
            <H3>Цветы поштучно</H3>
            <SemiSpan>от 500 ₽</SemiSpan>
          </Space>
        </SwiperSlide>
        <SwiperSlide className='my' style={{ boxShadow: '5px 5px 5px gray' }}>
          <Image src={img2} />
        <Space>
            <H3>Цветы поштучно</H3>
            <SemiSpan>от 500 ₽</SemiSpan>
          </Space>
        </SwiperSlide>
        <SwiperSlide className='my'  style={{ boxShadow: '5px 5px 5px gray' }}>
          <Image src={img3} />
          <Space>
            <H3>Цветы поштучно</H3>
            <SemiSpan>от 500 ₽</SemiSpan>
          </Space>
        </SwiperSlide>
        <SwiperSlide className='my'  style={{ boxShadow: '5px 5px 5px gray' }}>
          <Image src={img4} />
          <Space>
            <H3>Цветы поштучно</H3>
            <SemiSpan>от 500 ₽</SemiSpan>
          </Space>
        </SwiperSlide>  
    </Swiper>
  </ContainerS>
  );
};
export default Sections;
