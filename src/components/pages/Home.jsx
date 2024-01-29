import React from 'react'
import HomeAnime from '../animations/HomeAnime'
import { motion } from "framer-motion"


const Home = () => {
  return (
    <div className='h-screen w-screen flex flex-row justify-center items-center'>
        <HomeAnime />
        <div className='my-name title absolute absolute-center'>Arujjwal Negi</div>
    </div>
  )
}

export default Home