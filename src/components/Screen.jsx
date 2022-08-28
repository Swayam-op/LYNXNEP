import React from 'react'
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import './detail.css'
const Screen = () => {
  const {video}=useParams();
  return (
    <div>
       <BgImage>            
      </BgImage>
        <Container>
              <VideoPlayer>
              <ReactPlayer url={'https://www.youtube.com/watch?v='+video} playIcon={true} playing={true} controls={true} width='100%' height='100%' />
               
        
              </VideoPlayer>
        </Container>
    </div>
  )
}

const BgImage=styled.div`
height:100vh;
position:fixed;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url('/images/whiteblack.jpg');
top:0;
right:0;
left:0;
z-index:-1;
`;

const Container=styled.div`
margin-top:100px;
width:100%;
height:80vh;
display:flex;
justify-content:center;
align-items:center;
`;

const VideoPlayer=styled.div`
width:840px;
height:500px;
border:10px solid black;
border-radius:10px;

@media (max-width:780px){
  width:100%;
  height:400px;
}
`;

export default Screen;