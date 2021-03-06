import React from 'react'
import Hero from '.././components/home/Hero'
import Services from '.././components/home/Services'
import About from '.././components/home/About'
import TheWay from '../components/home/TheWay'
import Prices from './../components/home/Prices';
import Comments from './../components/home/Comments';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <TheWay />
      <Prices />
      <Comments />

    </div>
  )
}
