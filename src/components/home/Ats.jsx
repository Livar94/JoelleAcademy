import React from 'react'
import styled from 'styled-components'
import WayImage from '../.././assets/images/Ats.png.jpg'


export default function Ats() {
  return (
    <DivAts className='container'>
  
        
        

        <div className="AtsContent">
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
        </div>



        <div className="wrapper">
          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>


    </DivAts>
  )
}


const DivAts = styled.div`
/* overflow: hidden; */
position: relative;
    border-radius: 1em;
    margin-top: 15em;
    margin-bottom: 10em;
    padding: 2em 1em;
    /* background-color: #0000001a; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .AtsContent {
        position: relative;
        z-index: 999;
        display: flex;
    /* grid-template-columns: 1fr 1fr; */
    justify-content: center;
    align-items: center;
        @media only screen and (max-width: 768px) {
            flex-wrap: wrap;

        /* grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        justify-items: center;
        text-align: center;
        margin-bottom: 3em; */
        }
    }
    .wrapper {
        border-radius: 1em;
        background: #50a3a2;
  background: -webkit-linear-gradient(top left,#50a3a2 0%,#53e3a6 100%);
  background: -moz-linear-gradient(top left,#50a3a2 0%,#53e3a6 100%);
  background: -o-linear-gradient(top left,#50a3a2 0%,#53e3a6 100%);
  background: linear-gradient(to bottom right,#50a3a2 0%,#53e3a6 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
/*   margin-top: -200px; */
  overflow: hidden;
  .bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255,255,255,0.15);
  bottom: -160px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
.bg-bubbles li:nth-child(1) {
  left: 10%;
}
.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 80px;
  height: 80px;
  animation-delay: 2s;
  animation-duration: 17s;
}
.bg-bubbles li:nth-child(3) {
  left: 25%;
  animation-delay: 4s;
}
.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-duration: 22s;
  background-color: rgba(255,255,255,0.25);
}
.bg-bubbles li:nth-child(5) {
  left: 70%;
}
.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  animation-delay: 3s;
  background-color: rgba(255,255,255,0.2);
}
.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  animation-delay: 7s;
}
.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  animation-delay: 15s;
  animation-duration: 40s;
}
.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  animation-delay: 2s;
  animation-duration: 40s;
  background-color: rgba(255,255,255,0.3);
}
.bg-bubbles li:nth-child(10) {
  left: 90%;
  width: 160px;
  height: 160px;
  animation-delay: 11s;
}
@-webkit-keyframes square {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
  }
}
    }
`;

const Text = styled.div`
    text-align: center;
    color: white;
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
