import React, { useState, useRef } from "react";
import Phone_Mila_Ke_Raftaar from '../Songs/Phone_Mila_Ke_Raftaar.mp3';
import { Box, Button, Flex, Icon, Image, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import {IoPlaySkipBackOutline, IoPlaySkipForwardOutline} from 'react-icons/io5';
import {BsPauseCircleFill, BsPlayCircleFill} from 'react-icons/bs';
import skipForward from '../Images/skipForward.svg';
import skipBackward from '../Images/skipBackward.svg';

function convertTime(time) {
    if (!time) return ;
    let minute = Math.floor(time/60);
    let second = Math.floor(time%60);

    let strMin = '';
    if (Math.floor(minute/10)<1) {
        strMin = `0${minute}`;
    } else {
        strMin+=minute;
    }
    let strSec = '';
    if (Math.floor(second/10)<1) {
        strSec = `0${second}`;
    } else {
        strSec+=second;
    }

    return strMin+':'+strSec;
}

function MediaPlayer(props) {
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();

  const play = () => {
    setNowPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setNowPlaying(false);
    audioRef.current.pause();
  };

  const skip15SecBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const skip15SecForward = () => {
    audioRef.current.currentTime += 15;
  };


  const next = () => {
    // Logic to play the next song in the playlist
  };

  const previous = () => {
    // Logic to play the previous song in the playlist
  };

  return (
    <Box>
        <Slider defaultValue={0} max={audioRef.current?.duration} value={audioRef.current?.currentTime} onChange={(time) => audioRef.current.currentTime = time}>
            <SliderTrack >
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
        <Flex w='full' justifyContent='space-between'>
            <Text color='white'>{convertTime(currentTime)}</Text>
            <Text color='white'>{convertTime(audioRef.current?.duration)}</Text>
        </Flex>
        <audio
            ref={audioRef}
            src={Phone_Mila_Ke_Raftaar}
            onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime)}
        ></audio>
        <Flex w='full' justifyContent={'space-between'} alignItems={'center'}>
            <Icon color='white' fontWeight={"bold"} fontSize='30px' as={IoPlaySkipBackOutline} onClick={previous} />
            <Image src={skipBackward} onClick={skip15SecBackward} />
            <Icon color='white' fontSize='60px' as={nowPlaying ? BsPauseCircleFill : BsPlayCircleFill} onClick={nowPlaying ? pause : play} />
            <Image src={skipForward} onClick={skip15SecForward} />
            <Icon color='white' fontWeight={"bold"} fontSize='30px' as={IoPlaySkipForwardOutline} onClick={next} />
        </Flex>
    </Box>
  );
}

export default MediaPlayer;
