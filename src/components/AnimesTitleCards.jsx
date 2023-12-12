import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOriginal } from '../features/Movie/movieSlice';
import { selectAnimes } from '../features/Anime/animeSlice';
const AnimesTitleCards = (props) => {
    const animes = useSelector((state)=>state.anime);
    console.log("anime insidecard", animes);
    useEffect(()=>{
        console.log("anime insidecard", animes);
    },[animes])
    return (
        <Container>
            <Content>

                {animes && animes.map((anime, key) => {
                    return (
                        <div>
                            <Wrap key={key}>

                                <Link to={'/detail/animes/'+ anime.id}>
                                    <img src={anime.cardImg} alt={anime.title} />
                                </Link>
                            </Wrap>
                            <Heading>{anime.title}</Heading>
                        </div>
                    );
                })
                }
            </Content>
        </Container>
    )
}
const Container = styled.div`
padding: 0 0 26PX;
margin:50px 20px;
`;
const Heading = styled.h3`
padding-top : 10px;
text-align : center;
`
const Content = styled.div`

display:grid;
grid-gap:25px;
gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));
 

@media(max-width:768px){
    grid-template-columns:repeat(2,,minmax(0,1fr));
}

`;

const Wrap = styled.div`
padding-top:56.2%;
border-radius:10px;
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;
overflow:hidden;
position:relative;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
border:3px solid rgba(249,249,249,0.1);

img{
    position:absolute;
    inset:0px;
    height:100%;
    object-fit:cover;
    opacity:1;
    transition:opacity 500ms ease-in-out;
    width:100%;
    z-index:1;
}

&:hover{
    box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
}
`
export default AnimesTitleCards;