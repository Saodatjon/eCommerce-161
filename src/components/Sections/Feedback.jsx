import React from 'react'
import { FeedbackStyle } from './SectionsStyle'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Box } from '../Box';
import { Flex } from '../Flex';
import Star from '../../assets/images/star.png'
import { Image } from '../Image';
import { H2, SemiSpan, Span } from '../Typography';
import Rose from '../../assets/images/img_1.png'


function Feedback() {
  return (
      <FeedbackStyle className='mySwiper'>
       <Swiper 
      navigation={true} modules={[Navigation]} >
        <SwiperSlide>
          <Box>
            <Flex gap='50px' className='swiper' >
              <Box flexDirection='column' >
                <Flex gap='10px'>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                </Flex>
                <H2 p='10px 0'>Мередова Елена Григорьевна</H2>
                <Span>Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.  </Span>
                <SemiSpan>Отзыв к букету:  Розы 80 см</SemiSpan>
              </Box>
              
              <Box > 
                <Flex  background='gray'  w='100%' h='100vh'  borderRadius='50%' justifyContent='center' alignItems='center' >
                     <Image src={Rose }  alt='Rose img' borderRadius='50%'/>
                </Flex>
             
               </Box>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Flex gap='50px' className='swiper' >
              <Box flexDirection='column' >
                <Flex gap='10px'>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                </Flex>
                <H2 p='10px 0'>Мередова Елена Григорьевна</H2>
                <Span>Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.  </Span>
                <SemiSpan>Отзыв к букету:  Розы 80 см</SemiSpan>
              </Box>
              
              <Box > 
                <Flex  background='gray'  w='100%' h='100vh'  borderRadius='50%' justifyContent='center' alignItems='center' >
                     <Image src={Rose }  alt='Rose img' borderRadius='50%'/>
                </Flex>
             
               </Box>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Flex gap='50px' className='swiper' >
              <Box flexDirection='column' >
                <Flex gap='10px'>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                </Flex>
                <H2 p='10px 0'>Мередова Елена Григорьевна</H2>
                <Span>Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.  </Span>
                <SemiSpan>Отзыв к букету:  Розы 80 см</SemiSpan>
              </Box>
              
              <Box > 
                <Flex  background='gray'  w='100%' h='100vh'  borderRadius='50%' justifyContent='center' alignItems='center' >
                     <Image src={Rose }  alt='Rose img' borderRadius='50%'/>
                </Flex>
             
               </Box>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Flex gap='50px' className='swiper' >
              <Box flexDirection='column' >
                <Flex gap='10px'>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                   <img src={Star }  alt='star img'/>
                </Flex>
                <H2 p='10px 0'>Мередова Елена Григорьевна</H2>
                <Span>Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.  </Span>
                <SemiSpan>Отзыв к букету:  Розы 80 см</SemiSpan>
              </Box>
              
              <Box > 
                <Flex  background='gray'  w='100%' h='100vh'  borderRadius='50%' justifyContent='center' alignItems='center' >
                     <Image src={Rose }  alt='Rose img' borderRadius='50%'/>
                </Flex>
             
               </Box>
            </Flex>
          </Box>
        </SwiperSlide>
      
      </Swiper>
      </FeedbackStyle>
  )
}

export default Feedback