import React from 'react'
import styled from 'styled-components'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <FooterContainer>
      <Header>
        <Body className='container'>
          <Div1>
            <h2>GET IN TOUCH</h2>
            <a href="tel:0096181946089">Phone: 0096181946089</a>
            <a href="mailto:info@joelleacademy.net">E-mail: info@joelleacademy.net</a>



          </Div1>
          <Div2>
            <h2>Business hours</h2>
            <p>Monday – Friday: 10am – 7pm</p>

          </Div2>
          <Div3>
            <IconsMotherContainer>
              <IconContainer>
                <a href="https://www.instagram.com/joelleacademy/"><BsInstagram className='instagramIcon' /></a>
              </IconContainer>
              <IconLinkedin>
                <a href="https://www.linkedin.com/company/joelle-academy/"><BsLinkedin className='linkedinIcon' /></a>
              </IconLinkedin>
              <IconTiktok>
                <a href="https://www.tiktok.com/@joelleacademy?lang=sv-SE"><FaTiktok className='tiktokIcon'/></a>
              </IconTiktok>
            </IconsMotherContainer>

          </Div3>

          <p>created by HolmWeb</p>
        </Body>

      </Header>
    </FooterContainer>
  )
}


const FooterContainer = styled.div`
  padding: 6em 3em;
  background-color: rgb(51,159,208);
  
`;

const Header = styled.div``;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      
    }
  
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;

  > h2 {
    color: white;
  }

  > a {
    text-decoration: none;
    color: white;
  }
  
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  > h2 {
    color: white;
  }

  > p {

    color: white;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  .instagramIcon {
    font-size: 2rem;
    color: white;
  }

  .linkedinIcon {
    font-size: 3rem;
    color: white;

  }

  .tiktokIcon {
    font-size: 3rem;
    color: black;

  }

`;

const IconsMotherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
 
  



  
  
`;

const IconContainer = styled.div`
    background-color: #DB2777;
    max-width: max-content;
    padding: 0.8em;
    padding-bottom: 0.50em;
    border-radius: 50%;
    cursor: pointer;

    animation: beat .50s infinite alternate;
	transform-origin: center;



  @keyframes beat{
	to { transform: scale(1.1); }
}
    
  `;

const IconLinkedin = styled.div`
   animation: beat .50s infinite alternate;
	transform-origin: center;



  @keyframes beat{
	to { transform: scale(1.1); }
}
    
  `;

const IconTiktok = styled.div`
   animation: beat .50s infinite alternate;
	transform-origin: center;



  @keyframes beat{
	to { transform: scale(1.1); }
}
`;

