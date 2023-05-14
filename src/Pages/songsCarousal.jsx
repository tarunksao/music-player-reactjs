import React from 'react'
import {songsList} from '../Songs/songsDB';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SongsCarousal = () => {
  return (
    <div className='Carousel'>
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
        width={"100%"}
        useKeyboardArrows
        showThumbs={false}
      >
        {songsList?.map((el, i) => (
          <div
            style={{
              margin: "16px",
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
            <Link to={`/player/${el.id-1}`}>
                <Image src={el.songImg} alt={el.songName} w='280px' h='160px' />
                <Heading color='white' fontSize='16px' letterSpacing={'0.2px'} lineHeight='18px'>{el.songName}</Heading>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SongsCarousal