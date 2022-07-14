import React from 'react'
import styled from 'styled-components'
// import WayImage from '../.././assets/images/Step3.png'
import Wayimg1 from '../.././assets/images/Step1.png'
import Wayimg2 from '../.././assets/images/Step2.png'
import Wayimg3 from '../.././assets/images/Step3.png'
import Wayimg4 from '../.././assets/images/Step4.png'
import Wayimg5 from '../.././assets/images/Step5.png'



export default function TheWay() {
  return (

        <TheWayComponent className='container' id='theway'>
            <h1>الطريقة</h1>

            {/* <BodyWay>
                    <img src={WayImage} alt='' />
                    <img src={WayImage} alt='' />
                    <img src={WayImage} alt='' />
                    <img src={WayImage} alt='' />
            </BodyWay> */}

            <WayText>
                <WayText1>
                    <Image1 src={Wayimg1} alt="" />

                    <h3>الحصول على السيرة الذاتية خلال 3 أيام عمل عند انتهاء الاجتماع يبدأ العمل على سيرتك الذاتية فوراً مع بحث شامل على ما يطلبه سوق العمل في مجالك</h3>
                </WayText1>
                <WayText2>
                    <Image1 src={Wayimg2} alt="" />
                    <h3> الاجتماع مع أحد خبرائنا عبر اتصال زووم خلال الاجتماع يتم مناقشة الخبرة والاهداف المهنية المستقبلية لكتابة السيرة الذاتية </h3>
                </WayText2>
                <WayText3>
                    <Image1 src={Wayimg3} alt="" />
                    <h3>التواصل معنا على الواتساب لتحديد موعد فريق العمل جاهز لاستقبال رسائلكم ومساعدتكم في اختيار الخدمات</h3>
                </WayText3>
                <WayText4>
                    <Image1 src={Wayimg4} alt="" />
                    <h3>الحصول على سيرة ذاتية محترفة لتقديمها على وظائف مبروك أصبح لديك سيرة ذاتية تقدّمها على فرص العمل بكلّ ثقة</h3>
                </WayText4>
                <WayText5>
                    <Image1 src={Wayimg5} alt="" />
                    <h3>اضافة ملاحظاتك على السيرة الذاتية اعلامنا بأي اضافات أو تصليح أمر طبيعي قبل المنتج الأخير، نضيف الملاحظات بأسرع وقت ممكن</h3>
                </WayText5>
            </WayText>

            
        </TheWayComponent>
    
        
  )
}


const TheWayComponent = styled.div`

margin-top: 60vh;
display: grid;
grid-template-columns: 1fr;
justify-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
padding:  3em;
margin-bottom: 4em;
justify-content: center;
    > h1 {
        margin-top: 1em;
        margin-bottom: 2em;
        text-shadow: 5px 6px 2px #378ab47d;

    }

/* margin-left: 5em;
margin-right: 5em; */

@media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2em;
    }
`;




const BodyWay = styled.div`
    /* position: relative; */
    /* width: 360px;
    height: 300px; */
    /* background: rgba(0, 0, 0, 0);
    transform: rotate(-30deg) skew(25deg) scale(0.8);
    transition: 0.5s; */

    /* @media only screen and (max-width: 768px) {
        height: 200px;
        width: 250px;
    }
   
    > img {
        position: absolute;
        width: 100%;
        transition: 0.5s;
        border-radius: 2em;
 @media only screen and (max-width: 768px) {
        height: 200px;
        width: 250px;
    }
    } */

    /* :hover {
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
    }*/
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
/*     justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center; */
    @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2em;
    }
`;

const WayText1 = styled.div`
    /* display: flex;
    flex-direction: column; */
    
    /* > p {
        padding-right: 1em;
        position: relative;
        ::after {
            margin-left: 1em;
           content: "";
        height: 7.5px;
        width: 7.5px;
        position: absolute;
        right: 0;
        top: 7.5px;
        border-radius: 50%;
        background-color: black;
        }
        

    } */
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.5em;
    cursor: pointer;
    text-align: center;
    border-radius: 1em;

`;

const WayText2 = styled.div`  
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.5em;
    cursor: pointer;
    text-align: center;
    border-radius: 1em;
`;

const WayText3 = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.5em;
    cursor: pointer;
    text-align: center;
    border-radius: 1em;
`;

const WayText4 = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.5em;
    cursor: pointer;
    text-align: center;
    border-radius: 1em;
`;

const WayText5 = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 1.5em;
    cursor: pointer;
    text-align: center;
    border-radius: 1em;
`;

const Image1 = styled.img`
    height: 210px;
    width: 300px;
    border-radius: 1em;
`;




