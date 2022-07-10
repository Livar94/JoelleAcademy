import React from 'react'
import styled from 'styled-components';
import CoverLetterImg from '../.././assets/images/COVER-LETTER.png'
import CvWriting from '../.././assets/images/CV-WRITING.png'
import LinkedIn from '../.././assets/images/LINKEDIN.png'

export default function Services() {
  return (
    <Servicescomponent>
      <Header>
        <Title>
          <h1>الخدمات</h1>
        </Title>
        <Body>
          <ProfessionalCV>
          <ServicesImages src={CvWriting} alt='' className='fa-solid fa-heart fa-beat' />
            <h2>ATS Friendly Proffessional CV سيرة ذاتية محترفة</h2>
            <p> .كتابة سيرة ذاتية باستخدام المعايير العالميّة مع محتوى محترف لاظهار قيمتك المضافة لمهاراتك</p>
            <p> استخدام نموذج صالح للقراءة والمسح من قبل برنامج فلترة الطلبات</p>
            <p>Applicant tracking System-ATS  من دون أي عائق لضمان مقابلات أكثر</p>

          </ProfessionalCV>

          <CoverLetter>
            <ServicesImages src={CoverLetterImg} alt='' />

            <h2>Cover Letter</h2>
            <p>؟Cover Letter هل تهرب من اعلانات الوظائف التي تتطلّب</p>
            <p>خاص بخبرتك يكفي تغيير بعض الكلمات ليتوافق مع كل وظيفة تّم عليها Cover Letter نكتب لك</p>
            <p>تحسين حساب اللينكدن</p>

          </CoverLetter>

          <LinkedInProfile>
          <ServicesImages src={LinkedIn} alt='' />
            <h2>LinkedIn Profile Optimization</h2>
            <p>،(Headline) نحوّل حسابك في اللنكدن الى حساب محترف من صورة الغلاف، الصورة الشخصية، العنوان </p>
            <p> ، (About Section) النبذة الذاتية </p>
            <p>(Experience) الخبرات</p>
            <p>وباقي الأجزاء باستخدام الكلمات المفتاح للظهور أكثر في البحوث وبالنالي الحصول على المزيد من المشاهدات للبروفايل وبناء علاقات مهنية أفضل</p>            
          </LinkedInProfile>





        </Body>
      </Header>
    </Servicescomponent>
  )
}

const Servicescomponent = styled.div`
display: flex;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.147) 0px 3px 8px;
margin: 2em;
padding: 5em 3em;
padding-top: 4em;
`;

const Header = styled.div` 
  
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  font-size: 1.25rem;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`;

const ProfessionalCV = styled.div`
  padding: 1.5em;
  cursor: pointer;
  text-align: center;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`;

const CoverLetter = styled.div`
  padding: 1.5em;
  cursor: pointer;
  text-align: center;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`;

const LinkedInProfile = styled.div`
  padding: 1.5em;
  cursor: pointer;
  text-align: center;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`;

const ServicesImages = styled.img`
  max-height: 150px;
  max-width: 150px;
  animation: beat .40s infinite alternate;
	transform-origin: center;



  @keyframes beat{
	to { transform: scale(1.1); }
}



`;