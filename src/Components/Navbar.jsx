import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import DigiClock from './DigiClock'

const Navbar = () => {
  return (
    <Flex justifyContent='space-between'>
        <Box>
            <DigiClock />
        </Box>
    </Flex>
  )
}

export default Navbar