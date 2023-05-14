import React, { useState, useRef } from "react";
import { Box, Button, Flex, Heading, Icon, Image, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import {RiPauseCircleFill, RiPlayCircleFill} from 'react-icons/ri';
import skipForward from '../Images/skipForward.svg';
import skipBackward from '../Images/skipBackward.svg';
import Vector from '../Images/Vector.svg';
import Previous from '../Images/Previous.svg';
import Next from '../Images/Next.svg';
import Book from '../Images/Book.svg';
import {ChevronDownIcon} from '@chakra-ui/icons';
import {songsList} from '../Songs/songsDB';
import { useNavigate, useParams } from "react-router-dom";

function convertTime(time) {
    if (!time) return '00:00' ;
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

function MediaPlayer() {
    const {id} = useParams();
    const [nowPlaying, setNowPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [nowPlayingIndex, setNowPlayingIndex] = useState(id || 0);
    const audioRef = useRef();
    const navigate = useNavigate();

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
        if (nowPlayingIndex === songsList.length-1) {
            // setNowPlayingIndex(0);
            navigate(`/player/${0}`)
        } else {
            setNowPlayingIndex(index => index+1);
            navigate(`/player/${nowPlayingIndex}`)
        }
        setNowPlaying(false);
    };

    const previous = () => {
        if (nowPlayingIndex === 0) {
            setNowPlayingIndex(songsList.length-1);
        } else {
            setNowPlayingIndex(index => index-1);
        }
        setNowPlaying(false);
    };

    return (
        <Box>
            <Flex w={'full'} justifyContent={'space-between'} alignItems={"center"} mb={6}>
                <Icon fontSize='30px' as={ChevronDownIcon} color={'white'} fontWeight={"extrabold"} />
                <Image src={Vector}  alt="vector_icon" />
            </Flex>

            {/* Song Details Section */}

            <Flex 
                justifyContent={'center'} 
                alignItems={"center"} 
                mb={'16px'}   
                >
                <Image 
                    src={songsList[nowPlayingIndex]?.songImg}
                    alt={songsList[nowPlayingIndex]?.songName}
                    w={'326px'} 
                    h={'132px'} 
                    boxShadow= '0px 1px 4px rgba(0, 0, 0, 0.1)'
                    borderRadius='6px'
                    />
            </Flex>
            <Heading mb='8px' textAlign='center' color='white' fontSize={'20px'}>{songsList[nowPlayingIndex].songName}</Heading>
            <Text textAlign='center' color='white' opacity={0.6} mb={4}>{songsList[nowPlayingIndex].artist}</Text>
            <Flex flexDir="column" gap='8px' mb='75px'>
                <Button 
                    m='auto' 
                    colorScheme="blackAlpha" 
                    size='sm' 
                    w='220px' 
                    h='32px'
                    bgColor='#2E3035' 
                    fontWeight='light'
                >
                    View Chapter Notes
                </Button>
                <Button 
                    m='auto' 
                    colorScheme="blackAlpha" 
                    size='sm' 
                    w='220px' 
                    h='32px'
                    bgColor='#2E3035' 
                    fontWeight='light'
                >
                    Attempt Quiz
                </Button>
            </Flex>
            
            {/* Media Player Code */}

            <Slider defaultValue={0} max={audioRef.current?.duration} value={audioRef?.current?.currentTime} onChange={(time) => audioRef.current.currentTime!==null ? audioRef.current.currentTime = time : 0}>
                <SliderTrack bg={'#2E3035'} >
                    <SliderFilledTrack bg={'#3281FF'} />
                </SliderTrack>
                <SliderThumb bg={'#3281FF'} />
            </Slider>
            <Flex w='full' justifyContent='space-between'>
                <Text fontSize='12px' color='white'>{convertTime(currentTime)}</Text>
                <Text fontSize='12px' color='white'>{convertTime(audioRef.current?.duration)}</Text>
            </Flex>
            <audio
                ref={audioRef}
                src={songsList[nowPlayingIndex].songFile}
                onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime)}
            ></audio>
            <Flex w='full' justifyContent={'space-between'} alignItems={'center'} my={'42px'}>
                <Image src={Previous} alt="previous_icon" onClick={previous} w='32px' />
                <Image src={skipBackward} alt="skip_backward_icon" onClick={skip15SecBackward} w='32px' />
                <Icon color='white' fontSize='72px' as={nowPlaying ? RiPauseCircleFill : RiPlayCircleFill} onClick={nowPlaying ? pause : play} />
                <Image src={skipForward} alt="skip_forward_icon" onClick={skip15SecForward}  w='32px' />
                <Image src={Next} alt="next_icon" onClick={next}  w='32px' />
            </Flex>

            <Flex justifyContent={'center'} alignItems={"center"} gap='8px' mt={'106px'} mb={'16px'}>
                <Image src={Book} alt="book_icon" w='22px' />
                <Text color='white' opacity={0.6}>Chapters</Text>
            </Flex>
        </Box>
    );
}

export default MediaPlayer;
