import React,{useEffect} from 'react'
import styled from 'styled-components';
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';

 const Login = (props) => {
  const navigate=useNavigate();

  useEffect(() => {

    auth.onAuthStateChanged(async(user)=>{
      if(user){
        navigate('/home');
      }
      else{
        navigate('/');
      }
    })
   },[]);
  //  const storeDataInFB=async()=>{
   
  //   console.log("storedatain",typeof(Data));
  
  
  //       await addDoc(collection(db, "movies"), {
  //         "backgroundImg":"sdf",
  //         "cardImg":"dfsdf",
  //         "description":"sdfsdf",
  //         "subTitle":"sdfsdf",
  //         "title":"fgd",
  //         "titleImg":"sdfsd",
  //         "type":"sdfsd",
  //       }).then((result)=>{
  //         console.log(result);
  //       }).catch((error)=>{
  //         console.log(error);
  //       });

  
   
  // }
  return (
    <Container>
        <Content>
            <BgImage>            
            </BgImage>
            <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg'></CTALogoOne>
                    <SignUp >Get All There</SignUp>
                    <Description>
                        Get Premier Acces to Raya and the last Dragon for
                        an additional fee with a Disney+ subscription.As of
                        03/26/21, the price of Disney+ and The Disney Bundle
                        will increase by $1.
                    </Description>
                    <CTALogoTwo src='/images/cta-logo-two.png'></CTALogoTwo>
            </CTA>
        </Content>
    </Container>
  )
}

const Container= styled.section`
   overflow: hidden;
   display: flex;
   flex-direction:column;
   text-align:center;
   height:100vh;
`
const Content= styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items :center;

padding:80px 40px;
height:100%;
`;

const BgImage=styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url('/images/login-background.jpg');
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const CTA= styled.div`

max-width:650px;
width:100%;
display:flex;
flex-direction:column;

align-items :center;

flex-wrap:wrap;

`;

const CTALogoOne= styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;

`;

const SignUp=styled.a`
max-width:600px;
font-weight:bold;
font-size:18px;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;

&:hover{
background-color:#0483ee;
cursor:pointer;
}
`;

const Description=styled.p`
color:hsla(0,0%,95.3%,1);
font-size:11px;
margin-bottom:24px;
line-height:1.5;
letter-spacing:1.2px;

`;

const CTALogoTwo=styled.img`
margin-bottom:20px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`

export default Login;