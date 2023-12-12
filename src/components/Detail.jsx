import React,{useCallback, useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import db from '../firebase';
import styled from 'styled-components';
import { doc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import './detail.css';
const Detail = () => {
  const {id, collectionName}=useParams();
  const [detailData,setDetailData]=useState({});
  
  const fetchDetail = useCallback(async()=>{
 
    try{
        const docRef = doc(db, collectionName, id);
        const detail = await getDoc(docRef);
        if (detail.exists()) {
            console.log("Document data:", detail.data());
            setDetailData(detail.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document! in firebase 🔥");
          }
    }catch(error){
        console.log(error);
        window.alert(error);
    }
  },[id, collectionName])

  useEffect(()=>{
    fetchDetail();
  });
    
  

  return (
    <Container>
        <Background>
            <img src={detailData.backgroundImg} alt="" />
        </Background>

        <ImageTitle>
           
            <img src={detailData.titleImg} alt="" />
        </ImageTitle>
        <ContentMeta>
            <Controls>
                <Player>
                <Link to={'/screen/'+collectionName+'/'+id+'/'+detailData.video} className='link'>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span > Play </span>
                </Link>
                </Player>
                <Trailer>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span/>
                    <span/>
                </AddList>

                <GroupWatch>
                    <div>
                        <img src="/images/group-icon.png" alt="" />
                    </div>
                </GroupWatch>
            </Controls>

            <SubTitle>
                {detailData.subTitle}
            </SubTitle>
            <Description>
                {detailData.description}
            </Description>
        </ContentMeta>
    </Container>
  )
}
const Container=styled.div`
position:relative;
min-height:calc(100vh-250px);
overflow-x:hidden;
display:block;
top:72px;
// padding:0 calc(3.5vw+5px);
padding: 0px 40px;

@media(max-width:780px){
    padding:0px 20px;
}
`;

const Background=styled.div`
position:fixed;
// inset:0;
left:0;
right:0;
top:0;
opacity:1;
z-index:-1;

img{
    width:100vw;
    height:100vh;


    @media(max-width:768px){
        width:initial;
    }
}
`;

const ImageTitle=styled.div`
align-items:flex-end;
display:flex;
-webkit-box-pack:start;
justify-content:flex-start;
margin:0px auto;
height:30vw;
min-height:170px;
width:100%;
padding-bottom:24px;
z-index:2;
// border:2px solid red;



img{
    max-width:600px;
    min-width:200px;
}
`;

const ContentMeta=styled.div`

max-width:874px;
`;

const Controls=styled.div`
align-items:center;
display:flex;
flex-flow:row no-wrap;
min-height:56px;

`;

const Player=styled.button`
font-size:15px;
margin:0px 22px 0px 0px;
padding:0px 24px;
height:45px;
border-radius:4px;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
letter-spacing:1.8px;
text-align-center;
text-tranform:uppercase;
background:rgb(249,249,249);
border:none;
color:blue;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;


img{
    width:32px;
}
&:hover{
 background:rgb(198,198,198);   
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;    
}

@media(max-width:768px){
    height:45px;
    padding:0 12px;
    font-size:12px;
    margin:0px 10px 0px 0px;
    
    img{
        width:25px;
    }
}
`;

const Trailer=styled(Player)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
`;

const AddList=styled.div`
margin-right:16px;
height:44px;
width:44px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.6);
border-radius:50%;
cursor:pointer;
border:2px solid white;

 span{
     background-color:rgb(249,249,249);
     display:inline-block;

     &:first-child{
         height:2px;
         tranform:translate(1px,0px) rotate(0deg);
         width:16px;

     }
     &:nth-child(2){
         height:16px;
         transform:translateX(-8px) rotate(0deg);
         width:2px;
     }
 }
`;

const GroupWatch=styled.div`
margin-right:16px;
height:44px;
width:44px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.6);
border-radius:50%;
cursor:pointer;
border:2px solid white;

div{
    height:40px;
    width:40px;
    background:rgb(0,0,0);
    border-radius:50%;

    img{
        width:100%;
    }
}
`;

const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
padding-top:30px;
@media(max-width:768px){
    font-size:12px;
}
`;

const Description=styled.div`
line-height:1.4;
font-size:20px;
padding:16px 0;
color:rgb(249,249,249);

@media(max-width:768px){
    font-size:14px;
}
`;

export default Detail