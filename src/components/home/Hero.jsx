import React from 'react'
import styled from 'styled-components'
import Navbar from '../layout/Navbar'
import Banner from '../../assets/images/banner.png'

export default function Hero() {
  return (
    <>
    <Top>
      <div className="container">
      <p >Contact me -</p>
      <a href='mailto:info@joelleacademy.net'>info@joelleacademy.net</a>
      </div>
    </Top>
    <HeroContainer>
      <Navbar />
    </HeroContainer>
{/*     <HeroContainer>
      <Navbar />
      <HeroContent className="container">
        <h1>احصل على وظيفة احلامك</h1>
        <h2>ثقة 300.000 متابع</h2>
      </HeroContent>
    </HeroContainer> */}
    </>
  )
}

const Top = styled.div`
  background-color: #111;
  padding: 0.25em 0;
  color: white;
  .container {
    display: flex;
    gap: .3em;
  }
  p {
    display: inline-block;
  }
  a {
    display: inline-block;
    color: white;
    font-weight: 500;
  }
`

const HeroContainer = styled.div`
padding: 2em 0;
padding-bottom: 20em;
  background-image: url(${Banner});
  background-size: cover;
  background-repeat: no-repeat;
`
/* 
const HeroContent = styled.div`
top: 0;
position: absolute;
text-align: center;
h1 {
  font-size: 3rem;
}

` */