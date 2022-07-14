import React from 'react'
import styled from 'styled-components'
import Pricesimg1 from '../.././assets/images/Service1.png'
import Pricesimg2 from '../.././assets/images/Service2.png'
import Pricesimg3 from '../.././assets/images/Service3.png'
import Pricesimg4 from '../.././assets/images/Service4.png'
import Pricesimg5 from '../.././assets/images/Service5.png'
import Pricesimg6 from '../.././assets/images/Service6.png'
import Pricesimg7 from '../.././assets/images/Service7.png'


export default function Prices() {
  return (
    <PricesComponent className='container'>
        <Header>
            <h1>الأسعار</h1>
            <Body>
                <Div1>
                    <Pricesimg src={Pricesimg3} alt="" />
                    <h2>كتابة سيرة ذاتية 7 الى 11 سنة خبرة</h2>
                    <p>85$</p>
                    <button>Contact us</button>
                </Div1>
                <Div2>
                <Pricesimg src={Pricesimg2} alt="" />

                    <h2>كتابة سيرة ذاتية 3 الى 7 سنين خبرة</h2>
                    <p>70$</p>
                    <button>Contact us</button>
                </Div2>
                <Div3>
                <Pricesimg src={Pricesimg1} alt="" />

                    <h2>كتابة سيرة ذاتية حديث التخرج الى 3 سنوات خبرة</h2>
                    <p>50$</p>
                    
                    <button>Contact us</button>
                </Div3>
                <Div4>
                <Pricesimg src={Pricesimg6} alt="" />

                    <h2>تحسين حسياب اللينكدن</h2>
                    <h2>LinkedIn Profile Optimization</h2>
                    <p>45$</p>
                    <button>Contact us</button>
                </Div4>
                <Div5>
                <Pricesimg src={Pricesimg5} alt="" />

                    <h2>كتابة سيرة ذاتية 15+ سنة خبرة</h2>
                    <p>120$</p>
                    <button>Contact us</button>
                </Div5>
                <Div6>
                <Pricesimg src={Pricesimg4} alt="" />

                    <h2>كتابة سيرة ذاتية 11 الى 15 سنة خبرة</h2>
                    <p>100$</p>
                    <button>Contact us</button>
                </Div6>
                <Div7>
                <Pricesimg src={Pricesimg7} alt="" />

                    <h2>Cover Letter كتابة</h2>
                    <p>30$</p>
                    <button>Contact us</button>
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
      text-shadow: 5px 6px 2px #378ab47d;

        

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
  height: 600px;
  width: 400px;


    > p {
        margin-top: 2em;
        font-weight: bold;

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
  height: 600px;
  width: 400px;

  > p {
        margin-top: 2em;
        font-weight: bold;

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
  height: 600px;
  width: 400px;

  > p {
        margin-top: 2em;
        font-weight: bold;

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
  height: 600px;
  width: 400px;

  > p {
        margin-top: 2em;
        font-weight: bold;

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
  height: 600px;
  width: 400px;

  > p {
        margin-top: 2em;
        font-weight: bold;

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
  height: 600px;
  width: 400px;


  > p {
        margin-top: 2em;
        font-weight: bold;

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
  height: 600px;
  width: 400px;


  > p {
        margin-top: 2em;
        font-weight: bold;

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
