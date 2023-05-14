import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function convertTime (time) {
    let obj = {};
    obj.hour = time.getHours();
    obj.minute = time.getMinutes();
    obj.second = time.getSeconds();

    if (obj.hour>12) {
        obj.hour = obj.hour%12;
    }

    return obj;
}

const DigiClock = () => {
    const getTime = new Date();
    const [time, setTime] = useState(convertTime(getTime));
    
    const updateTime = () => {
        const getTime = new Date();
        setTime(convertTime(getTime));
    }

    setInterval(updateTime, 1000);
  
    return (
    <Text color='white' fontWeight='500'>{`${time.hour}:${time.minute}`}</Text>
  )
}

export default DigiClock