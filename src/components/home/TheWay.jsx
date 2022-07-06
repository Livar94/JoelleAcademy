import React from 'react'
import styled from 'styled-components'
import WayImage from '../.././assets/images/Service6.png'


export default function TheWay() {
  return (

        <TheWayComponent>


    <BodyWay>
                <img src={WayImage} alt='' />
                <img src={WayImage} alt='' />
                <img src={WayImage} alt='' />
                <img src={WayImage} alt='' />
        </BodyWay>


            <WayText>
            <h1>الطريقة</h1>

        </WayText>
        <WayContainer>



        



    </WayContainer>
        </TheWayComponent>
    
        
  )
}


const TheWayComponent = styled.div`
margin-top: 30%;
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;

@media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2em;
    }
`;


const WayContainer = styled.div`
    

`;

const BodyWay = styled.div`
    position: relative;
    width: 360px;
    height: 300px;
    background: rgba(0, 0, 0, 0);
    transform: rotate(-30deg) skew(25deg) scale(0.8);
    transition: 0.5s;

    @media only screen and (max-width: 768px) {
        height: 200px;
        width: 250px;
    }
   
    > img {
        position: absolute;
  width: 100%;
  transition: 0.5s;
 @media only screen and (max-width: 768px) {
        height: 200px;
        width: 250px;
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




/* const WayImagePic4 = styled.img`

    
    :hover  {
        transform: translate(160px, -160px);
        opacity: 1;
    }

`;

const WayImagePic3 = styled.img`

    
    :hover  {
        transform: translate(120px, -120px);
        opacity: 0.8;
    }

`;

const WayImagePic2 = styled.img`

    
    :hover  {
        transform: translate(80px, -80px);
        opacity: 0.6;

    }

`;

const WayImagePic1 = styled.img`

    
    :hover  {
        transform: translate(40px, -40px);
        opacity: 0.4;

    }

`; */

const WayText = styled.div`
    background-color: red;

`;
/*  

    

    */