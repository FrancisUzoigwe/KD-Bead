// // import React from 'react'
// import {AiFillFacebook} from "react-icons/ai"
// import {AiFillTwitterSquare} from "react-icons/ai"
// import {FaInstagramSquare} from "react-icons/fa"
// import {AiFillLinkedin} from "react-icons/ai"
// // import {ImLocation} from "react-icons/im"
// // import {BsTelephoneFill} from "react-icons/bs"
// // import {MdMessage, MdWidthFull} from "react-icons/md"

// import styled from "styled-components"

// const Footer = () => {
//   return (
//     <div id="contact">
//     <  Container>
//     <Main>
//       <Box>
//         <Title><span>K.D</span> Bread</Title>
//         <Div style={{width : "80%"}}>Lorem ipsum dolor sit amet<br /> consectetur  adipisicing elit. numquam eos.</Div>
//         <Hold style={{display : "flex" , justifyContent : "space-between" ,
//         width : "200px" , height : "40px" , alignItems : "center" }} >
//           <Icon>
//             <AiFillFacebook/>
//           </Icon>
//           <Icon>
//             <AiFillTwitterSquare/>
//           </Icon>
//           <Icon>
//             <FaInstagramSquare/>
//           </Icon>
//           <Icon>
//             <AiFillLinkedin/>
//           </Icon>
//         </Hold>
//       </Box>
//       <Box>
//         <Title>Resources</Title>
//         <Div>Resources</Div>
//         <Div>Contact Us</Div>
//         <Div>FAQ</Div>
//         <Div>Email Support</Div>
//         <Div>API Documentation</Div>
//       </Box>
//       <Box>
//       <Title>Menu</Title>
//         <Div>Cup Cake</Div>
//         <Div>Sand Wich</Div>
//         <Div>Cookies</Div>
//         <Div>Bread</Div>
//         <Div>Biscuits</Div>
//         <Div>StrawBerry Cake</Div>
//       </Box>
//       <Box>
//       <Title>Services</Title>
//         <Div>Office Delivery</Div>
//         <Div>Event</Div>
//         <Div>Birthday</Div>
//         <Div>Restaurant</Div>
//         <Div>Reservations</Div>
//       </Box>
//       </Main>
//       </Container>
//     </div>
//   )
// }

// export default Footer

// const Hold = styled.div`
// transition: all 450ms;

// `

// const Title= styled.div`
// font-weight: 700;
// font-size: 25px;
// span{
//   color: darkorange;
// }
// `

// const Icon = styled.div`
// font-size: 30px;
// transition: all 450ms;
// :hover{
//   cursor: pointer;
//   color: darkorange;
//   padding-left: 10px;
// }
// `

// const Div = styled.div`
// margin: 20px 0;

// :hover {
//   color: darkorange;
//   transform: scale(1.1);
// }
// `

// const Box = styled.div`
// /* border: 1px solid black; */
// `

// const Main = styled.div`
// width: 90%;
// height: 100%;
// /* background-color: lightblue; */
// color: white;
// display: grid;
// grid-template-columns: repeat(4, 1fr);
// cursor: pointer;
// transition: all 450ms;

// `

// const Container = styled.div`
// width: 100%;
// padding-top: 25px;
// height: 350px;
// background-color: black;
// display: flex;
// justify-content: center;
// align-items: center;
// `

import styled from "styled-components";
import Boxify from "../Static/ReUse/Boxify";

const Footer = () => {
  return (
    <div id="contact">
      <Container>
        <Main>
          <Box>
            <Head>
              <span>K.D</span> Bread
            </Head>
          </Box>
          <Boxify
            header="Menu"
            title1="Cakes"
            title2="Brown Bread"
            title3="Cup Cakes"
            title4="Meat Pies"
            title5="Birthday Cakes"
          />
          <Boxify
            header="Services"
            title1="Home Delivery"
            title2="Office Delivery"
            title3="Event Management"
            title4="Social Events"
            title5="Birthday Events"
          />
          <Boxify
            header="Contact Us"
            title1="speak2kd@gmail.com"
            title2="kd/facebook.com"
            title3="wa.me//kd/chat"
            title4="kd.instagram.com"
            title5="+2347047474886"
          />
          <Boxify
            header="Address Location"
            title1="#96 Ago-Hausa, Apapa 
            Lagos State"
          />
        </Main>
      </Container>
    </div>
  );
};

export default Footer;

const Head = styled.h1`
  font-size: 30px;
  font-weight: 700;
  transition: all 450ms;
  color: white;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  span {
    color: darkorange;
  }
`;

const Box = styled.div`
  width: 20%;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
