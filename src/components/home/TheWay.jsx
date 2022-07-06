import React from 'react'
import styled from 'styled-components'
import WayImage from '../.././assets/images/Service6.png'


export default function TheWay() {
  return (
    <WayContainer>
        <BodyWay>
            <BodyWay1>
                <WayImagePic1 src={WayImage} alt='' />
                <WayImagePic1 src={WayImage} alt='' />
                <WayImagePic1 src={WayImage} alt='' />
                <WayImagePic1 src={WayImage} alt='' />
            </BodyWay1>
        </BodyWay>



    </WayContainer>
  )
}


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

const BodyWay1 = styled.div`
    
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
