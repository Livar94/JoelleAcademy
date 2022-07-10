import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import { useSidebar } from '../../context/useSidebar'
import { Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import { IoIosClose } from 'react-icons/io';

export default function Layout({ children }) {
  const { isOpen, setIsOpen } = useSidebar();
  const closeSidebar = () => setIsOpen(prev => !prev);

  return (
    <>
    {isOpen === true ? <MenuContainer>
        <Menu isOpen={isOpen} onClose={ () => setIsOpen(false) } right styles={{
          bmMenu: {
            background: '#339FD0',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            
          },
          bmMorphShape: {
            fill: '#FCD306'
          },
          bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
          },
          bmItem: {
            display: 'block',
            color: '#f1f1f1'
          },
        }}>
          <MenuBtn className='crossbtn' onClick={() => setIsOpen(prev => !prev)} ><IoIosClose /></MenuBtn>

          
          {/* <MenuLink onClick={closeSidebar}>
            <Link to="/">Home</Link>
          </MenuLink>
          <MenuLink onClick={closeSidebar}>
            <Link to="/services">Services</Link>
          </MenuLink>
          <MenuLink onClick={closeSidebar}>
            <Link to="/about">About</Link>
          </MenuLink>
          <MenuLink onClick={closeSidebar}>
            <Link to="/contact">Contact</Link>
          </MenuLink> */}
          <a onClick={closeSidebar} className="menu-item" href="#">Home</a>
          <a onClick={closeSidebar} className="menu-item" href="#services">Services</a>
          <a onClick={closeSidebar} className="menu-item" href="#about">About</a>
          <a onClick={closeSidebar} className="menu-item" href="#theway">The Way</a>
          
        </Menu>
      </MenuContainer> : ""}
    <LayoutContainer>
      
        {children}
      <Footer />
    </LayoutContainer>
    </>
  )
}

const LayoutContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
`

const MenuBtn = styled.button`
cursor: pointer;
  background: transparent;
  padding: 0;
  border: 0;
  font-size: 2.5rem;
  color: white;
  margin-left: -10px;
`

const MenuContainer = styled.div`
/*   left: 0;
  position: absolute; */
`
const MenuLink = styled.div`
  a {
    text-decoration: none;
    color: white;
    background-color: #111;
    padding: 0.75em 2em;
    display: block;
    margin: 1em 0;
    border-radius: 1em;
    display: flex;
    justify-content: center;
  }
`