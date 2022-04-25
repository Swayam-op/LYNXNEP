import React,{useEffect} from 'react'
import styled from 'styled-components';
import {auth,provider} from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName,selectUserPhoto,setUserLoginDetails,setSignOutState } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { BsPower } from "react-icons/bs";
import { IconContext } from "react-icons";
import { signInWithPopup } from "firebase/auth";

const Header = (props) => {
  
  const navigate=useNavigate();
  const dispatch=useDispatch();


  // selecting user data
  const userName=useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  
  //useEffect while loging in to app
  //onAuthStateChanged function is an async function


  useEffect(() => {

   auth.onAuthStateChanged(async(user)=>{
     if(user){
       setUser(user);
     }
     else{
       navigate('/');
     }
   })
  },[userName]);
  


  const handleAuth=()=>{
    if(!userName){
      signInWithPopup(auth,provider).then((result)=>{
        setUser(result.user);
        navigate('/home');
      }).catch((error)=>{
        alert(error.message);
      })
    }
    else if(userName){
      auth.signOut().then(()=>{//signout function of firebase
        dispatch(setSignOutState());//calling redux setSignOutState
        navigate('/');
      }).catch((error)=>{
        alert(error.message);
      })
    }
  };
  
  
  const setUser=(user)=>{
    dispatch(
      setUserLoginDetails({
        name:user.displayName,
        email:user.email,     //all the datas are collected from googleAuthenticate object
        photo:user.photoURL,
      })
    )
  }


  return (
    <Nav>
      <LOGO>
        <img src="/images/logo.svg" alt="Disney+" />
      </LOGO>
     
     {
       !userName?
       <Login onClick={handleAuth} >LOGIN</Login> :
       <>
       <NavMenu>
        <a href="/home">
          <img src="images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img src="images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a href="/home">
          <img src="images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a href="/home">
          <img src="images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a href="/home">
          <img src="images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
        <a href="/home">
          <img src="images/series-icon.svg" alt="" />
          <span>ANIMES</span>
        </a>
      </NavMenu>

       
       {/* <LogOut > <IconContext.Provider value={{ style: { fontSize:'30px' } }}><BsPower/></IconContext.Provider> </LogOut> */}
       <SignOut>
       <UserImage src={userPhoto} alt=""/>
       <DropDown>
         <span onClick={handleAuth}><IconContext.Provider value={{ style: { fontSize:'25px' } }}><BsPower/></IconContext.Provider></span>
       </DropDown>
       </SignOut>
       </>
     }

      

      

    </Nav>
  )
}
const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content: space-between;
align-items:center;
padding:0 36px;
letter-spacing:16px;
z-index:3;
`;

const LOGO = styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:0;
display:inline-block;

img{
  display:block;
  width:100%;
}

`;

const NavMenu = styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:25px;

a{
  display:flex;
  align-items:center;
  padding:0 12px;

  img{
   height:20px;
   min-width:20px;
   width:20px;
   z-index:auto;
  }
  
  span{
    color:rgb(249,249,249);
    font-size:13px;
    letter-spacing:1.42px;
    padding:2px 0px;
    white-space:nowrap;
    position:relative;
    
    &:before{
      background-color:rgb(249,249,249);
      border-radius:0px 0px 4px 4px;
      content:"";
      height:2px;
      opacity:0;
      position:absolute;
      bottom:-6px;
      right:0px;
      left:0px;
      transform-origin:left center;
      transform:scaleX(0);
      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
      visibility:hidden;
      width:auto;
  
      }
  }

&:hover{
   
  span:before{
    transform:scaleX(1);
    opacity:1 !important;
    visibility:visible;
  }
}

}

`;

const Login=styled.a`
cursor:auto;
background-color:rgba(0,0,0,0.6);
padding:8px 18px;
letter-spacing:1.7px;
border:1px solid #f9f9f9;
border-radius:4px;
transition:all .5s ease 0s; 

&:hover{
  background-color:#f9f9f9;
  color:#000;
  border-color:transparent; 
  cursor:default;
}

`;
const UserImage=styled.img`
height:100%; 
border-radius:50%;
margin-right:20px;
`;
const DropDown=styled.div`
position:absolute;
top:30px;
transform:scale(.5);
right:-4px;
background:rgb(19,19,19);
border:1px solid rgba(151,151,151,0.34);
border-radius:4px;
box-shadow:rgba(0 0 0 / 50%) 0px 0px 18px 0px;
padding:14px;
font-size:14px;

opacity:0;
transition:all 0.2s ease-in-out;

`;

const SignOut=styled.div`
position:relative;
height:44px;
width:48px;
cursor:pointer;

 &:hover{
  ${DropDown}{
    top:44px;
    opacity:1;
    transform:scale(1);
  }
 }
`;

export default Header;