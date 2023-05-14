import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import MediaPlayer from '../Pages/MediaPlayer'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/player/:id' element={<MediaPlayer />}></Route>
    </Routes>
  )
}

export default AllRoutes