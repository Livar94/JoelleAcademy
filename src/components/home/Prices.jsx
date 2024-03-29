import React from 'react'
import styled from 'styled-components'
import Pricesimg1 from '../.././assets/images/Service1.png'
import Pricesimg2 from '../.././assets/images/Service2.png'
import Pricesimg3 from '../.././assets/images/Service3.png'
import Pricesimg4 from '../.././assets/images/Service4.png'
import Pricesimg5 from '../.././assets/images/Service5.png'
import Pricesimg6 from '../.././assets/images/Service6.png'
import Pricesimg7 from '../.././assets/images/Service7.png'
import ReactWhatsapp from 'react-whatsapp'



export default function Prices() {
  return (
    <PricesComponent className='container' id='prices'>
        <Header>
            <h1>الأسعار</h1>
            <Body>
                <Div1>
                    <Pricesimg src={Pricesimg3} alt="" />
                    <h2>كتابة سيرة ذاتية 7 الى 11 سنة خبرة</h2>
                    <p>( 90$ ) </p>
                    <ReactWhatsapp number="96181946089" message="Hello, can I have more information about your service?">
                      Contact us
                    </ReactWhatsapp>
                </Div1>
                <Div2>
                <Pricesimg src={Pricesimg2} alt="" />

                    <h2>كتابة سيرة ذاتية 3 الى 7 سنين خبرة</h2>
                    <p>( 75$ )</p>
                    <ReactWhatsapp number="96181946089" message="Hello, can I have more information about your service?">
                      Contact us
                    </ReactWhatsapp>
                </Div2>
                <Div3>
                <Pricesimg src={Pricesimg1} alt="" />

                    <h2>كتابة سيرة ذاتية حديث التخرج الى 3 سنوات خبرة</h2>
                    <p>( 50$ )</p>
                    
                    <ReactWhatsapp number="96181946089" message="Hello, can I have more information about your service?">
                      Contact us
                    </ReactWhatsapp>
                </Div3>
                <Div4>
                <Pricesimg src={Pricesimg6} alt="" />

                    <h2>تحسين حساب اللينكدن</h2>
                    <h2>LinkedIn Profile Optimization</h2>
                    <p>( 45$ )</p>
                    <ReactWhatsapp number="96181946089" message="Hello, can I have more information about your service?">
                      Contact us
                    </ReactWhatsapp>
                </Div4>
                <Div5>
                <Pricesimg src={Pricesimg5} alt="" />

                    <h2>كتابة سيرة ذاتية 15+ سنة خبرة</h2>
                    <p>( 140$ )</p>
                    <ReactWhatsapp number="96181946089" message="Hello, can I have more information about your service?">
                      Contact us
                    </ReactWhatsapp>
                </Div5>
                <Div6>
                <Pricesimg src={Pricesimg4} alt="" />

                    <h2>كتابة سيرة ذاتية 11 الى 15 سنة خبرة</h2>
                    <p>( 110$ )</p>
                    <ReactWhatsapp number="96181946089" message="Hello, can I have more information about your service?">
                      Contact us
                    </ReactWhatsapp>
                </Div6>
                <Div7>
                <Pricesimg src={Pricesimg7} alt="" />

                    <h2>Cover Letter كتابة</h2>
                    <p>( 30$ )</p>
                    
                    <ReactWhatsapp number="96181946089" message="Hello, can I have more information about your service?">
                      Contact us
                    </ReactWhatsapp>
                    
                </Div7>


            </Body>
        </Header>
       
    </PricesComponent>
  )
}

const PricesComponent = styled.div`
    margin-top: 7rem;
    margin-bottom: 10rem;
    


    

    /* @media only screen and (max-width: 1263px) {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
    } */
    
    

@media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
    }
    
`;

const Header = styled.div`
    text-align: center;
    > h1 {
      /* text-shadow: 5px 6px 2px #378ab47d; */

        

    }
`;

const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
    gap: 2em;
    margin-top: 3em;
    
    @media only screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;

    }

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
    }

    
    
`;

const Div1 = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;
    border-radius: 1em;
    /* padding: 5em 3em; */
    height: 500px;
    width: 400px;
    @media only screen and (max-width: 1024px) {
      order: 4;

    }
    @media only screen and (max-width: 768px) {
          order: 3;
      }


    > p {
        margin-top: 2em;
        font-weight: bold;
        animation: beat .40s infinite alternate;
        transform-origin: center;



        @keyframes beat{
        to { transform: scale(1.1); }
      }

    }
  > button {
    padding: 1em 3em;
    margin-top: 2em;
    border-radius: 1em;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    :hover {
        background-color: lightgray;
        color: black;
        font-weight: bold;
    }
  }

  
`;

const Div2 = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  border-radius: 1em;
  height: 500px;
  width: 400px;
  @media only screen and (max-width: 1024px) {
      order: 1;

    }
  @media only screen and (max-width: 768px) {
        order: 2;
    }

  > p {
        margin-top: 2em;
        font-weight: bold;
        animation: beat .40s infinite alternate;
        transform-origin: center;



        @keyframes beat{
        to { transform: scale(1.1); }
      }

    }

  > button {
    padding: 1em 3em;
    margin-top: 2em;
    border-radius: 1em;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    :hover {
        background-color: lightgray;
        color: black;
        font-weight: bold;
    }
  }
`;

const Div3 = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
  border-radius: 1em;
  height: 500px;
  width: 400px;
  @media only screen and (max-width: 1024px) {
     order : 2;

    }
  @media only screen and (max-width: 768px) {
        order: 1;
    }

  > p {
        margin-top: 2em;
        font-weight: bold;
        animation: beat .40s infinite alternate;
        transform-origin: center;



        @keyframes beat{
        to { transform: scale(1.1); }
      }

    }

  > button {
    padding: 1em 3em;
    margin-top: 2em;
    border-radius: 1em;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    :hover {
        background-color: lightgray;
        color: black;
        font-weight: bold;
    }
  }
`;

const Div4 = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
  border-radius: 1em;
  height: 500px;
  width: 400px;
  @media only screen and (max-width: 1024px) {
     order : 5;

    }
  @media only screen and (max-width: 768px) {
        order: 6;
    }

  > p {
        margin-top: 2em;
        font-weight: bold;
        animation: beat .40s infinite alternate;
        transform-origin: center;



        @keyframes beat{
        to { transform: scale(1.1); }
      }

    }

  > button {
    padding: 1em 3em;
    margin-top: 2em;
    border-radius: 1em;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    :hover {
        background-color: lightgray;
        color: black;
        font-weight: bold;
    }
  }
`;

const Div5 = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
  border-radius: 1em;
  height: 500px;
  width: 400px;
  @media only screen and (max-width: 1024px) {
     order : 6;

    }
  @media only screen and (max-width: 768px) {
        order: 5;
    }

  > p {
        margin-top: 2em;
        font-weight: bold;
        animation: beat .40s infinite alternate;
        transform-origin: center;



        @keyframes beat{
        to { transform: scale(1.1); }
      }

    }

  > button {
    padding: 1em 3em;
    margin-top: 2em;
    border-radius: 1em;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    :hover {
        background-color: lightgray;
        color: black;
        font-weight: bold;
    }
  }
`;

const Div6 = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
  border-radius: 1em;
  height: 500px;
  width: 400px;
  @media only screen and (max-width: 1024px) {
     order : 3;

    }
  @media only screen and (max-width: 768px) {
        order: 4;
    }


  > p {
        margin-top: 2em;
        font-weight: bold;
        animation: beat .40s infinite alternate;
        transform-origin: center;



        @keyframes beat{
        to { transform: scale(1.1); }
      }

    }

  > button {
    padding: 1em 3em;
    margin-top: 2em;
    border-radius: 1em;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    :hover {
        background-color: lightgray;
        color: black;
        font-weight: bold;
    }
  }
`;

const Div7 = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;
    border-radius: 1em;
    height: 500px;
    width: 400px;
    @media only screen and (max-width: 1024px) {
     order : 7;

    }
    @media only screen and (max-width: 768px) {
          order: 7;
      }
  


  > p {
        margin-top: 2em;
        font-weight: bold;
        animation: beat .40s infinite alternate;
        transform-origin: center;



        @keyframes beat{
        to { transform: scale(1.1); }
      }

    }

  > button {
    padding: 1em 3em;
    margin-top: 2em;
    border-radius: 1em;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    :hover {
        background-color: lightgray;
        color: black;
        font-weight: bold;
    }
  }
`;

const Pricesimg = styled.img`
    height: 210px;
    width: 300px;
    border-radius: 1em;
    margin-top: 3.5em;

`;
