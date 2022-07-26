import React from 'react'
import styled from 'styled-components'
import Navbar from '../layout/Navbar'
import Pattern from '../../assets/images/white-elegant-texture-background_23-2148445781.webp'
import Friends from '../../assets/images/MicrosoftTeams-image.png'
import Joelle from '../../assets/images/joelle.png'
// import Ticker from 'react-ticker'
import ReactWhatsapp from 'react-whatsapp'

export default function Hero() {
  return (
    <>
    <Top>
      <div className="container">
{/*       <p >Contact me -</p>
      <a href='mailto:info@joelleacademy.net'>info@joelleacademy.net</a> */}
          {/* <Ticker mode='await' >
              {() => (
                  <>
                      <p>hello vdfdff </p>
                  </>
              )}
          </Ticker> */}
              <Whatsapp>
                <ReactWhatsapp number="96181946089" message="Hello, can I have more information about your service?">
                  <p>Phone: 0096181946089 - تواصلو معنا الان على الواتساب</p>

                </ReactWhatsapp>
              </Whatsapp>
      </div>
    </Top>
    <HeroContainer>
      <Navbar />
      <div className="banner">
        <img id='friends' src={Friends} alt="" data-aos="fade-right" data-aos-duration="2000"/>
        <img id='joelle' src={Joelle} alt="" data-aos="fade-left" data-aos-duration="2000"/>
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

const Whatsapp = styled.div`
button {
  all: unset;
  cursor: pointer;
}

`

const Top = styled.div`
  > div > p > a {
    text-decoration: none;
  }


  background-color: #111;
  width: 100%;
  color: white;
  .container {
    width: 100%;
  }


  .ticker {
    width: 100%;
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
  background-position: top;
  background-size: cover;
  
  max-width: 100vw;
  overflow: hidden;

  .banner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    #friends {
      max-width: 900px;
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
      max-width: 300px;
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