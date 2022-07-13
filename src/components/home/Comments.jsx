import React from 'react'
import styled from 'styled-components'
import Image1 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (1).jpeg'
import Image2 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (2).jpeg'
import Image3 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (3).jpeg'
import Image4 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (4).jpeg'
import Image5 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (5).jpeg'
import Image6 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (6).jpeg'
import Image7 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (7).jpeg'
import Image8 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (8).jpeg'
import Image9 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (9).jpeg'
import Image10 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34 (10).jpeg'
import Image11 from '../.././assets/images/WhatsApp Image 2022-07-12 at 06.36.34.jpeg'

export default function Comments() {
  return (
    <CommentsComponent className='container'>
        <Header>
            <h1>آراء عملائنا</h1>
            <Body>
                <Commentsimgs src={Image1} alt='' />
                <Commentsimgs src={Image2} alt='' />
                <Commentsimgs src={Image3} alt='' />
                <Commentsimgs src={Image4} alt='' />
                <Commentsimgs src={Image5} alt='' />
                <Commentsimgs src={Image6} alt='' />
                <Commentsimgs src={Image7} alt='' />
                <Commentsimgs src={Image8} alt='' />
                <Commentsimgs src={Image9} alt='' />
                <Commentsimgs src={Image10} alt='' />
                <Commentsimgs src={Image11} alt='' />
                    

            </Body>
        </Header>

    </CommentsComponent>
  )
}

const CommentsComponent = styled.div``;

const Header = styled.div`
    text-align: center;
    > h1 {
        margin-bottom: 2em;
        text-shadow: 5px 6px 2px #378ab47d;
    }
`;

const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
    justify-content: center;
    align-items: center;
    justify-items: center;
    text-align: center;
    margin-bottom: 3em;


    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
      margin-bottom: 3em;
    }
    
`;

const Commentsimgs = styled.img`
    height: 250px;
    width: 300px;
    border-radius: 1em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    cursor: pointer;
`;
