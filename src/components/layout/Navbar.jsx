import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/logojo.png'
import Typewriter from 'typewriter-effect';


export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent className="container">
{/*         <NavbarLinks>
          <li>
            <NavbarLink href="#services">lorem</NavbarLink>
          </li>
        </NavbarLinks> */}

        <LogoContainer>
          <LogoContent src={Logo} />
        </LogoContainer>

        <HeroContent>
                <h1><Typewriter
                  options={{
                    strings: ['احصل على وظيفة احلامك'],
                    autoStart: true,
                    loop: true
                  }}
                /></h1>
                          <h2>ثقة 300.000 متابع</h2>

                {/* <h2><Typewriter
                  options={{
                    strings: ['ثقة 300.000 متابع'],
                    autoStart: true,
                    loop: true
                  }}
                /></h2> */}

        </HeroContent>

        <div className=""></div>
        
      </NavbarContent>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`

`

const NavbarContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
    }
`

const NavbarLinks = styled.ul`

`

const NavbarLink = styled.a`

`

const LogoContainer = styled.a`
display: block;
  overflow: hidden;
  height: 300px;
  width: 140px;

`

const LogoContent = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

`
const HeroContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
`