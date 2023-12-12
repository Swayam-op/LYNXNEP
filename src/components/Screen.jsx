import React, { useCallback, useEffect,  useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import './detail.css'
import VideoCards from './VideoCards';
import { getDocs, collection } from 'firebase/firestore';
import db from '../firebase';

const Screen = () => {
  const [episodes, setEpisodes] = useState();
  const [recommends, setRecommends] = useState();
  const { collectionName, obj, video } = useParams();
  console.log("video url : " ,video,recommends);

  const fetchVideoDetails = useCallback(async()=>{
    let videos = [];
    try {
      
      const collectionName2 = collectionName === "animes" ? "episodes" : "recommends";
      console.log(collectionName, obj, collectionName2);
      const docRef = collection(db, collectionName, obj,collectionName2);
      const relatedVideos = await getDocs(docRef);

         relatedVideos.forEach((doc)=>{
          videos = [...videos,{id:doc.id, ...doc.data()} ];
        })
        switch(collectionName2){
          case 'episodes':
            setEpisodes(videos);
            break;
          case 'recommends':
            setRecommends(videos);
            break;
          default:
            break;
        }
        console.log("videos, ", videos);
    }
    catch (err) {
      console.log(err);
    }
  },[collectionName,obj])

  useEffect(() => {
    fetchVideoDetails();
  }, [episodes, fetchVideoDetails])

 
  return (
    <div className=''>
      <BgImage>
      </BgImage>
      <Container className='items-stretch'>
      
      <VideoPlayer>
          <iframe
            //src = "https://res.cloudinary.com/" + video
            src={`https://player.cloudinary.com/embed/?public_id=${video}`}
            // src="https://player.cloudinary.com/embed/?public_id=Naruto%20Shipuden%2Fepisode-1-feu2heef4nonspl0wcos&cloud_name=dc7zoecy9&source[textTracks][captions][label]=English&source[textTracks][captions][language]=en&source[textTracks][captions][url]=https%3A%2F%2Fres.cloudinary.com%2Fdc7zoecy9%2Fraw%2Fupload%2Fv1702190600%2FNaruto%2520Shipuden%2Fsubtitle-e-1-ftebqtp4cvmexy4sjnrs.vtt&source[textTracks][captions][default]=true"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            frameborder="0"
            width="100%"
            height={"100%"}
            title={video}
          ></iframe>              {/* <player/> */}
        </VideoPlayer>
      
        
        {
          !episodes ? <></> : (
            <div className='basis-1/2 w-full lg:px-8 md:px-2 shadow-2xl   relative '>
          <div  style={{ background: "", maxHeight:"500px" }} className='w-full h-full border rounded-md py-10 lg:px-6 scrollbar overflow-y-scroll'>
            {
              episodes && episodes.map((data, index)=>{
                return(
                  <>
                  <div key={index}>
                  <VideoCards data={data} />
                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
          )
        }
        
      </Container>
    </div>
  )
}

const BgImage = styled.div`
height:100vh;
position:fixed;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(32,32,32,1) 0%, rgba(18,17,19,1) 79%);
top:0;
right:0;
left:0;
z-index:-1;
`;

const Container = styled.div`
align-items: stretch;
margin-top:100px;
padding : 0px 20px;
width:100%;
height:70vh;
display:flex;
justify-content:space-between;
@media (max-width:780px){
  flex-direction : column;
  height : auto;
  padding : 0px;
}
${'' /* align-items:center; */}
`;

const VideoPlayer = styled.div`
flex-basis:60%;
height:480px;
border-radius:5px;
overflow:hidden;
border : 2px solid #121113;
box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
@media (max-width:780px){
  width:100%;
  height:480px;
  margin-bottom : 50px;
}
`;

export default Screen;