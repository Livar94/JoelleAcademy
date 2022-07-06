import React from 'react'
import styled from 'styled-components'
import WayImage from '../.././assets/images/Service6.png'


export default function TheWay() {
  return (

        <TheWayComponent>
            <WayText>
            <h1>الطريقة</h1>

        </WayText>
        <WayContainer>



        <BodyWay>
                <WayImagePic1 src={WayImage} alt='' />
                <WayImagePic1 src={WayImage} alt='' />
                <WayImagePic1 src={WayImage} alt='' />
                <WayImagePic1 src={WayImage} alt='' />
        </BodyWay>



    </WayContainer>
        </TheWayComponent>
    
        
  )
}


const TheWayComponent = styled.div``;


const WayContainer = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const BodyWay = styled.div`
    position: relative;
    width: 360px;
    height: 640px;
    margin-top: 150px;
    background: rgba(0, 0, 0, 0);
    transform: rotate(-30deg) skew(25deg) scale(0.8);
    transition: 0.5s;
   

`;




const WayImagePic1 = styled.img`
    position: absolute;
    width: 100%;
    transition: 0.5s;

    

    
    :hover  {
        transform: translate(160px, -160px);
        opacity: 1;
    }
    :hover  {
        transform: translate(120px, -120px);
        opacity: 0.8;
    }

    :hover  {
        transform: translate(80px, -80px);
        opacity: 0.6;

    }

    :hover  {
        transform: translate(40px, -40px);
        opacity: 0.4;

    }

`;

const WayText = styled.div`
    background-color: red;

`;
