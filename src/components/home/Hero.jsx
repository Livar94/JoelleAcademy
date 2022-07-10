import React from 'react'
import styled from 'styled-components'
import Navbar from '../layout/Navbar'
import Pattern from '../../assets/images/crissxcross.png'
import Friends from '../../assets/images/friends.png'
import Joelle from '../../assets/images/joelle.png'

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
      <div className="banner">
        <img id='friends' src={Friends} alt="" />
        <img id='joelle' src={Joelle} alt="" />
      </div>
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
  padding-top: 1rem;
  /* padding-bottom: 20em; */
  background-color: white;
  background-image: url(${Pattern});
  
  background-position: center;
  max-width: 100vw;
  overflow: hidden;

  .banner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    #friends {
      max-width: 700px;
      height: auto;
      object-fit: contain;
    }

    #joelle {
      max-width: 300px;
    }
  }

  @media only screen and (max-width: 768px) {
    background-size: contain;
    background-position: bottom;
    .banner {
    #friends {
      max-width: 250px;
    }

    #joelle {
      max-width: 100px;
    }
  }
  }


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