import React from 'react'
import styled from 'styled-components'
import Zaldo from '../.././assets/videos/pexels-jack-sparrow-5977260 (1).mp4'


export default function About() {
  return (
    <Aboutcomponent>
        <Video playsInline autoPlay muted loop>
            <source src={Zaldo} type="video/mp4" />
        </Video>

      <Aboutcontainer>
        <Body>
          <h2>من نحن؟</h2>
        </Body>
        <Header> 
          <p>فريق من المحترفين بقيادة كاتبة السيرة الذاتية المحترفة جويل يمّين <br /> التي انشهرت على التيك توك بعد أن شاركت أسرار السيرة الذاتية ومقابلة العمل وصوّرت فيديوهات قصيرة على تيك توك عن النصائح والاخطاء الشائعة التي نالت اعجاب الملايين وأودى بخلق </p>
          <a href="https://www.instagram.com/joelleacademy/">Joelle Academy</a>
        
        </Header>
        
        <Footer>

        </Footer>
      </Aboutcontainer>
    </Aboutcomponent>
  )
}

const Aboutcomponent = styled.div`
  
  @keyframes bounce {
        0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        }


`;

const Video = styled.video`
    z-index: -1;
    position: absolute;
    height: 70vh;
    width: 100vw;
    object-fit: cover;
    object-position: top;

`;

const Aboutcontainer = styled.div`
 
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;
  flex-direction: column;
  text-align: center;

  > p {
    color: white;
    font-weight: bold;
    font-size: x-large;
  }

  > a {
    color: #349FCC;
    text-decoration: none;
    font-size: larger;
    font-weight: bold;

  }


`;

const Body = styled.div`
   display: flex;
  justify-content: center;
  
  > h2 {
    font-size: xx-large;
    font-weight: bold;

  }
`;



const Footer = styled.div``;

