import React from 'react'
import Hslider from '../home/hscrool';
import LiveEvents from '../home/liveevents';
import RecommendedMovies from '../home/recommend';

const Home = () => {
  return (
    <>
      <header className='bg-white shadow-md sticky top-0 z-50'>
        <Hslider />
        <LiveEvents/>
        <RecommendedMovies/>
      </header>

      
    </>
  )
}

export default Home