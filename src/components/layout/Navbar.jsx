import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/images/logojo.png'
// import Typewriter from 'typewriter-effect';
import { IoIosMenu } from 'react-icons/io';
import { useSidebar } from '../../context/useSidebar'


export default function Navbar() {
  const { setIsOpen } = useSidebar();
  
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
          <MenuBtn className='menubtn' onClick={() => setIsOpen(prev => true)}>
            <IoIosMenu />
          </MenuBtn>
        </LogoContainer>

        <HeroContent>
                {/* <h1><Typewriter
                  options={{
                    strings: ['احصل على وظيفة احلامك'],
                    autoStart: true,
                    loop: true
                  }}
                /></h1> */}
                <h1>احصل على وظيفة احلامك</h1>
                <h2>ثقة 300.000 متابع</h2>
                {/* <h2><Typewriter
                  options={{
                    strings: ['ثقة 300.000 متابع'],
                    autoStart: true,
                    loop: true
                  }}
                /></h2> */}

        </HeroContent>

        <div className="desktop">
          <MenuBtn className='menubtn' onClick={() => setIsOpen(prev => true)}>
            <IoIosMenu />
          </MenuBtn>
        </div>
        
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

    .desktop {
      display: flex;
      justify-content: flex-end;
      @media only screen and (max-width: 768px) {
        .menubtn {
          display: none;
        }
      }
    }
`

// const NavbarLinks = styled.ul`

// `

// const NavbarLink = styled.a`

// `

const LogoContainer = styled.a`
display: block;
  overflow: hidden;
  /* height: 300px; */
  

  @media only screen and (min-width: 768px) {
    .menubtn {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1em;
  }
`

const LogoContent = styled.img`
  max-width: 140px;
  max-height: 100%;
  object-fit: cover;

`
const HeroContent = styled.div`
height: max-content;
display: flex;
flex-direction: column;
align-items: center;
  h1 {
    font-size: 3rem;
    text-align: end;


  }
  h2 {
    font-size: 2rem;

  }
  @media only screen and (max-width: 768px) {
    padding: 2em 0;
    display: none;
  }
`

const MenuBtn = styled.button`
  background: transparent;
  padding: 0;
  border: 0;
  font-size: 2.5rem;
  color: black;
  cursor: pointer;
`