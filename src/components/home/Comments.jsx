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
import Image12 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.46 (12).jpeg'
import Image13 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.46 (13).jpeg'
import Image14 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.46 (14).jpeg'
import Image15 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.46 (15).jpeg'
import Image16 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.46 (16).jpeg'
import Image17 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.46 (17).jpeg'
import Image18 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.46 (18).jpeg'
import Image19 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.47 (19).jpeg'
import Image20 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.49.47 (20).jpeg'
import Image21 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.52.56 (21).jpeg'
import Image22 from '../../././assets/images/WhatsApp Image 2022-07-19 at 06.52.56 (22).jpeg'


export default function Comments() {
  return (
    <CommentsComponent className='container' id='comments'>
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
                <Commentsimgs src={Image12} alt='' />
                <Commentsimgs src={Image13} alt='' />
                <Commentsimgs src={Image14} alt='' />
                <Commentsimgs src={Image15} alt='' />
                <Commentsimgs src={Image16} alt='' />
                <Commentsimgs src={Image17} alt='' />
                <Commentsimgs src={Image18} alt='' />
                <Commentsimgs src={Image19} alt='' />
                <Commentsimgs src={Image20} alt='' />
                <Commentsimgs src={Image21} alt='' />
                <Commentsimgs src={Image22} alt='' />
                    

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
    object-fit: contain;
    /* height: 250px;
    width: 300px; */
    max-width: 100%;
    max-height: 250px;
    border-radius: 1em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    cursor: pointer;
`;
