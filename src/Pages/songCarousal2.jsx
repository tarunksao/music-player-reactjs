import React from 'react'
import {songsList} from '../Songs/songsDB';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Image, Tag, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SongsCarousal2 = () => {
  return (
    <div className='Carousel' style={{marginLeft:'-16px', overflow:'visible'}}>
        <Carousel
        autoPlay={false}
        centerSlidePercentage={60}
        centerMode
        swipeable
        showArrows={true}
        showStatus={false}
        emulateTouch
        thumbWidth={100}
        interval={2000}
        transitionTime={500}
        width={"550px"}
        useKeyboardArrows
        showThumbs={false}
        
      >
        {songsList?.map((el, i) => (
          <div
            style={{
              margin: "16px 0px 16px 10px",
              height: "auto",
              background: "transparent",
              color: "black",
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              padding: "0px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            key={i}
          >
            <Link to={`/player/${el.id-1}`} style={{display:'flex', gap:'10px', justifyContent:'start'}}>
                <Box w='120px' h='120px'>
                  <Image src={el.songImg} alt={el.songName} w='100%' h='100%' borderRadius='6px' />
                </Box>
                <Box textAlign={'left'}>
                  <Tag size='sm' color='white' bgColor='#2E3035' fontSize='10px' lineHeight='16px' borderRadius={'10px'} mb='8px'>Song</Tag>
                  <Text w='178px' color='white' fontSize='14px' letterSpacing={'0.2px'} lineHeight='18px' mb='8px'>{el.songName}</Text>
                  <Text color='white' fontSize='12px' lineHeight='16px' opacity={0.6}>{el.artist}</Text>
                </Box>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SongsCarousal2;