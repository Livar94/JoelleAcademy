import React from 'react'
import styled from 'styled-components';

export default function Services() {
  return (
    <Servicescomponent>
      <Header>
        <Title>
          <h1>الخدمات</h1>
        </Title>
        <Body>
          <ProfessionalCV>
            <h2>ATS Friendly Proffessional CV سيرة ذاتية محترفة</h2>
            <p> .كتابة سيرة ذاتية باستخدام المعايير العالميّة مع محتوى محترف لاظهار قيمتك المضافة لمهاراتك</p>
            <p> استخدام نموذج صالح للقراءة والمسح من قبل برنامج فلترة الطلبات</p>
            <p>Applicant tracking System-ATS  من دون أي عائق لضمان مقابلات أكثر</p>

          </ProfessionalCV>

          <CoverLetter>
            <h2>Cover Letter</h2>
            <p>؟Cover Letter هل تهرب من اعلانات الوظائف التي تتطلّب</p>
            <p>خاص بخبرتك يكفي تغيير بعض الكلمات ليتوافق مع كل وظيفة تّم عليها Cover Letter نكتب لك</p>
            <p>تحسين حساب اللينكدن</p>

          </CoverLetter>

          <LinkedInProfile>
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
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin: 2em;
padding: 5em 3em;
`;

const Header = styled.div` 
  
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const CoverLetter = styled.div`
  padding: 1.5em;
  cursor: pointer;
  text-align: center;
  border-radius: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const LinkedInProfile = styled.div`
  padding: 1.5em;
  cursor: pointer;
  text-align: center;
  border-radius: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;