import React from 'react'
import {songsList} from '../Songs/songsDB';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SongsCarousal = () => {
  return (
    <div className='Carousel' style={{marginLeft:'-16px', overflow:'visible'}}>
        <Carousel
        autoPlay={false}
        centerSlidePercentage={50}
        centerMode
        swipeable
        showArrows={true}
        showStatus={false}
        emulateTouch
        thumbWidth={100}
        interval={2000}
        transitionTime={500}
        width={"500px"}
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
              gap: "16px",
              padding: "0px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            key={i}
          >
            <Link to={`/player/${el.id-1}`} style={{display:'flex', gap:'10px', flexDirection:'column'}}>
                <Box w='280px' h='160px' mb='12px' borderRadius='6px'>
                  <Image src={el.songImg} alt={el.songName} w='100%' h='100%' borderRadius='6px' fit={'contain'} />
                </Box>
                <Heading color='white' textAlign={'left'} fontSize='16px' letterSpacing={'0.2px'} lineHeight='18px'>{el.songName}</Heading>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SongsCarousal