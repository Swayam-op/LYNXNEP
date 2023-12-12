import React from 'react'
import {useEffect, useCallback} from 'react';
import {useDispatch,useSelector} from 'react-redux'; 

import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewsers from './Viewsers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trendings from './Trendings';
 


import db from '../firebase';
import { collection, getDocs } from "firebase/firestore"; 
import { setMovies } from '../features/Movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
const Home = (props) => {

  const dispatch=useDispatch();
  const userName=useSelector(selectUserName);
  

  


  
  const fetchData=useCallback(async()=>{
    let recommends=[];
    let newDisneys=[];
    let originals=[];
    let trendings=[];
    try{
      const querySnapshot = await getDocs(collection(db, "movies"));
      console.log("home : ",querySnapshot);
      querySnapshot.forEach((doc) => {
        
        // console.log(doc.data());
        console.log(trendings);
        switch (doc.data().type){
          case 'trending':
            trendings=[...trendings,{id:doc.id,...doc.data()}];
            break;
          case 'original':
            originals=[...originals,{id:doc.id,...doc.data()}]
            break;
          case 'recommend':
            
            recommends=[...recommends,{id:doc.id,...doc.data()}];
            break;
          case 'new':
            newDisneys=[...newDisneys,{id:doc.id,...doc.data()}];
            break;
          default:
            break;
        }
  
      });

      dispatch(
        setMovies({
        recommend:recommends,
        newDisney:newDisneys,
        original:originals,
        trending:trendings,
      })
      );
    }catch(error){
      console.log(error);
    }
    
  },[dispatch])
 
  useEffect(()=>{
    fetchData();
  },[userName, fetchData]);

  return (
   
    <>
      <Container>
      <BgImage>            
      </BgImage>

      <ImgSlider/>
      <Viewsers/>  
      <Recommends/>  
      <NewDisney/>
      <Originals/>
      <Trendings/>
      </Container>
    </>
  )
}

const Container = styled.main`
position:relative;
display:block;
top:72px;
padding:25px;
width:100%;
overflow-x:hidden;

`;
const BgImage=styled.div`
height:100vh;
position:fixed;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(32,32,32,1) 0%, rgba(18,17,19,1) 79%);
top:0;
right:0;
left:0;
z-index:-1;
`;

export default Home;