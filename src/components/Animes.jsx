import React from 'react'
import {useEffect, useCallback} from 'react';
import {useDispatch,useSelector} from 'react-redux'; 
import styled from 'styled-components';
import db from '../firebase';
import { collection, getDocs } from "firebase/firestore"; 
import { selectUserName } from '../features/user/userSlice';
import AnimesTitleCards from './AnimesTitleCards';
import { setAnimes } from '../features/Anime/animeSlice';
const Animes = (props) => {

  const dispatch=useDispatch();
  const userName=useSelector(selectUserName);
  

  

  
  
  const fetchData=useCallback(async()=>{
    let animes=[];
    try{
      const querySnapshot = await getDocs(collection(db, "animes"));
    //   console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        animes=[...animes,{id:doc.id,...doc.data()}];
      });
    //   console.log("ANimes ,", animes);
      dispatch(
        setAnimes({
        animes
      })
      );
    }catch(error){
      alert(error.message);
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
      <AnimesTitleCards />
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

export default Animes;