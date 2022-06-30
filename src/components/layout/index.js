import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <LayoutContainer>
        {children}
      <Footer />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
`
