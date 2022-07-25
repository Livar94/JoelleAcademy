import React from 'react'
import styled from 'styled-components'
import WayImage from '../.././assets/images/Ats.png.jpg'


export default function Ats() {
  return (
    <DivAts className='container'>
  
        
        

    
        <BodyWay>
                <img src={WayImage} alt='' />
                <img src={WayImage} alt='' />
                <img src={WayImage} alt='' />
                <img src={WayImage} alt='' />
        </BodyWay>
        <Text>
            <h1>What is ATS (Applicant Tracking System)?</h1>
            <p>إذا كنت تتقدم لوظائف عبر الإنترنت ، فستواجه نظام تتبع المتقدمين  ، وهو برنامج الموارد البشرية الذي يعالج طلبات التوظيف</p>
            <p>يجب إنشاء سيرة ذاتية صالحة للقراءة من قبل هذا البرنامح لمنحك مقابلات اكثر</p>
            <p>بصفتك متقدمًا على وظيفة، يجب عليك تحسين سيرتك الذاتية وتخصيصها للوظيفة التي تتقدم لها ضمناً الكلمات المفتاح</p>
        </Text>
    </DivAts>
  )
}


const DivAts = styled.div`
    display: flex;
    /* grid-template-columns: 1fr 1fr; */
    justify-content: center;
    align-items: center;
    margin-top: 15em;
    margin-bottom: 10em;
    padding: 2em 1em;
    /* background-color: #0000001a; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;

      /* grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
      margin-bottom: 3em; */
    }
`;

const Text = styled.div`
    text-align: center;
    > h1 {
        margin-bottom: 1em;
        
    }
    > p {
        text-align: end;
    }

`;

const BodyWay = styled.div`
    position: relative;
    width: 460px;
    height: 400px;
    cursor: pointer;
   
    background: rgba(0, 0, 0, 0);
    transform: rotate(-30deg) skew(25deg) scale(0.8);
    transition: 0.5s;

    @media only screen and (max-width: 768px) {
        height: 300px;
        width: 350px;
    }
   
    > img {
        position: absolute;
        width: 100%;
        transition: 0.5s;
        border-radius: 1em;
 @media only screen and (max-width: 768px) {
        height: 300px;
        width: 350px;
    }
    }

    :hover {
        img:nth-child(4) {
        transform: translate(160px, -160px);
        opacity: 1;
        }

        img:nth-child(3) {
        transform: translate(120px, -120px);
        opacity: 0.8;
        }

        img:nth-child(2) {
        transform: translate(80px, -80px);
        opacity: 0.6;
        }

        img:nth-child(1) {
        transform: translate(40px, -40px);
        opacity: 0.4;
        }
    }
`;
