// import React, { useState } from "react";
import styled from "styled-components";
import { AiFillPlayCircle,AiOutlineClose } from "react-icons/ai";
import Button from "../Components/Static/Button";
import { useState } from "react";
import hero from "../Assets/straw.png"
import vid from "../Assets/KD.mp4"
const Home = () => {

  
  const [showVideo, setshowVideo] = useState<boolean>(false)

  const onshowVideo = ()=>{
   setshowVideo(!showVideo)
  }

  return (
    <div id="home">
      <Container>
        <Main>
          <Left>
            <LeftHold>
              <WatchHolder>
                <WatchIcon
                onClick={onshowVideo} 
                />
                <WatchText>Watch Video</WatchText>
              </WatchHolder>
              <BigText>
                The Perfect Baked <br />
                Cake Everyday!
              </BigText>
              <InfoText>
              Welcome to the heroic world of K.D Bread! Our bakery is dedicated to crafting extraordinary treats that will save your taste buds. Join us on this epic culinary journey and savor the magic of our heavenly bread and delightful pastries. Unleash your inner food hero at K.D Bread
            <ButtonHold>
            <Button text="Read More" bgc="darkorange" c="white" />
            <Button text="Order Now" bgc="white" c="orange" />
          </ButtonHold>
              </InfoText>
            </LeftHold>
          </Left>
          <Right src={hero} />

          {
          showVideo ?   
          <Div>
            <Backdrop onClick={onshowVideo}>
            <VideoHolder src={vid} controls  />
            </Backdrop>
            <Icon2 size={30} onClick={onshowVideo}/>
            
           </Div>
           : null
          
        }
        </Main>
      </Container>
      
    </div>
  );
};

export default Home;

const Icon2 = styled(AiOutlineClose)`
font-size: 30px;
color: red;
position: absolute;
top: 170px;
right: 430px;
transition: all 350ms;
:hover{
  transform:(1.09);
  cursor:pointer;
}

`

const Div = styled.div`
width:100%;
height:100%;
display:flex;
justify-content: center;
align-items:center;
`
const VideoHolder = styled.video`
width: 350px;
height: 250px;
object-fit: cover;
border-radius: 10px;
z-index:10;
position:absolute;
overflow:hidden;

`
const Backdrop = styled.div`
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2px );
-webkit-backdrop-filter: blur( 2px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
width:100%;
height:100%;
position: absolute;
top:0;
left:0;
display: flex;
justify-content: center;
align-items:center;
overflow:hidden;
`

const ButtonHold = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 200px;
margin-top: 40px;
`;
const LeftHold = styled.div``;
const InfoText = styled.div`
  color: grey;
  font-size: 16px;
  font-weight: 500;
  margin :30px 0px;
`;
const BigText = styled.div`
  font-weight: 700;
  font-size: 55px;
  line-height: 60px;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;
const WatchText = styled.div`
  font-weight: 600;
  color: darkorange;
  padding-left: 10px;
`;
const WatchIcon = styled(AiFillPlayCircle)`
  font-size: 40px;
  color: darkorange;
  transition: all 450ms;
  :hover {
    cursor: pointer;
    color: grey;
  }
`;
const WatchHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  margin-bottom: 20px;
  transition: all 450ms;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Right = styled.img`
  width: 60%;
  height: 90%;
  object-fit: contain;
  object-position: bottom;
  margin-top: 30px;
`;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Main = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 2px);
  display: flex;
  justify-content: flex-end;
  background: -moz-linear-gradient(90deg, #e0fffa 7%, #fff1f0 55%);
  background: -webkit-gradient(
    linear,
    90deg,
    color-stop(7%, E0FFFA),
    color-stop(55%, FFF1F0)
  );
  background: -webkit-linear-gradient(90deg, #e0fffa 7%, #fff1f0 55%);
  background: -o-linear-gradient(90deg, #e0fffa 7%, #fff1f0 55%);
  background: -ms-linear-gradient(90deg, #e0fffa 7%, #fff1f0 55%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1');
  background: linear-gradient(90deg, #e0fffa 7%, #fff1f0 55%);
`;

