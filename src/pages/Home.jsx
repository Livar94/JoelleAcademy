import React from 'react'
import Hero from '.././components/home/Hero'
import Services from '.././components/home/Services'
import About from '.././components/home/About'
import TheWay from '../components/home/TheWay'
import Prices from './../components/home/Prices';
import Comments from './../components/home/Comments';
import Ats from './../components/home/Ats';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Ats />
      <About />
      <TheWay />
      <Prices />
      <Comments />

    </div>
  )
}
