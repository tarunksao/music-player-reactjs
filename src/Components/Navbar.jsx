import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import DigiClock from './DigiClock'
import Wifi from '../Images/Wifi.svg';
import MobileSignal from '../Images/MobileSignal.svg';
import Battery from '../Images/Battery.svg';

const Navbar = () => {
  return (
    <Flex justifyContent='space-between' mb={'35px'} px='8px'>
        <Box>
            <DigiClock />
        </Box>
        <Flex gap={2}>
            <Image src={MobileSignal} />
            <Image src={Wifi} />
            <Image src={Battery} />
        </Flex>
    </Flex>
  )
}

export default Navbar