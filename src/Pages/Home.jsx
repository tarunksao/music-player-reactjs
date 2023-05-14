import { Box, Button, Flex, Heading, Highlight, Image, Text } from '@chakra-ui/react'
import React from 'react';
import userImg from '../Images/userImg.svg';
import Discord_Icon from '../Images/Discord_Icon.svg';
import SongsCarousal from './songsCarousal';

const Home = () => {
  return (
    <Box px='4px' h='1332px'>
        <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
            <Heading fontSize='22px' color={'white'}>Hey <Highlight query={'Anirudh'} styles={{bgGradient:'linear(to-l, #5065DA,#556FFF,#C557AD,#E65F9A,#E66176)',bgClip:'text'}} >Anirudh</Highlight> 👋</Heading>
            <Image src={userImg} alt='User_Image' w='32px' />
        </Flex>
        <Text color='white' fontSize='14px' letterSpacing={'0.2px'} lineHeight='22px' mb='16px' opacity={0.6}>It’s a nice day to learn something new</Text>
        <Flex justifyContent='space-between' alignItems='center' bgColor='#202022' w='366px' h='40px' m='auto' p='9px 16px' mb='40px'>
            <Text color='white' fontSize='12px' letterSpacing={'0.2px'} lineHeight='22px' opacity={0.6}>Join and help us in building Airvoice!</Text>
            <Button colorScheme='whatsapp' borderRadius='3px' w='75px' h='22px'>
                <Image src={Discord_Icon} alt='discord_icon' w='12px' />
                <Text fontSize='8px' lineHeight='22px'>Comunity</Text>
            </Button>
        </Flex>
        <Heading fontSize='22px' color={'white'} mb='4px'>Songs for you</Heading>
        <Text color='white' fontSize='14px' letterSpacing={'0.2px'} lineHeight='22px' mb='16px' opacity={0.6}>Listen to the songs from my collection.</Text>
        <SongsCarousal />
        <Heading fontSize='22px' color={'white'} mb='4px'>Songs for you</Heading>
        <Text color='white' fontSize='14px' letterSpacing={'0.2px'} lineHeight='22px' mb='16px' opacity={0.6}>Listen to the songs from my collection.</Text>
        <SongsCarousal />
        <Heading fontSize='22px' color={'white'} mb='4px'>Songs for you</Heading>
        <Text color='white' fontSize='14px' letterSpacing={'0.2px'} lineHeight='22px' mb='16px' opacity={0.6}>Listen to the songs from my collection.</Text>
        <SongsCarousal />
    </Box>
  )
}

export default Home