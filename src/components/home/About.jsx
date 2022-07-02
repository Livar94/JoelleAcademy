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
          <a href="">Joelle Academy</a> 
          <p>فريق من المحترفين بقيادة كاتبة السيرة الذاتية المحترفة جويل يمّين <br /> التي انشهرت على التيك توك بعد أن شاركت أسرار السيرة الذاتية ومقابلة العمل وصوّرت فيديوهات قصيرة على تيك توك عن النصائح والاخطاء الشائعة التي نالت اعجاب الملايين وأودى بخلق </p>
          
        
        </Header>
        
        <Footer>

        </Footer>
      </Aboutcontainer>
    </Aboutcomponent>
  )
}

const Aboutcomponent = styled.div`


`;

const Video = styled.video`
    z-index: -1;
    position: absolute;
    height: 100vh;
    width: 100vw;
    object-fit: cover;

`;

const Aboutcontainer = styled.div`
 
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;

  > p {
    color: white;
    font-weight: bold;
    font-size: ;
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

