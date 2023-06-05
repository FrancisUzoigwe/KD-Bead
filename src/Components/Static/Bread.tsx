import React from "react";
import styled from "styled-components";

interface iBread {
  image?: any;
  price?: string;
  title?: string;
}
const Bread: React.FC<iBread> = ({ image, price, title }) => {
  return (
    <div>
      <Container>
        <Image src={image} />
        <Price>{price}</Price>
        <Title>{title}</Title>
      </Container>
    </div>
  );
};

export default Bread;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px 15px 0px 0px;
  background: white;
  object-fit: cover;
`;

const Price = styled.div`
  font-weight: 500;
  width: 150px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-weight: 700;
  width: 150px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 450ms;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    color: darkorange;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=29, Direction=96, Color=#000000)"; /*IE 8*/
    -moz-box-shadow: 1px 10px 29px -13px rgba(0, 0, 0, 0.6); /*FF 3.5+*/
    -webkit-box-shadow: 1px 10px 29px -13px rgba(0, 0, 0, 0.6); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
    box-shadow: 1px 10px 29px -13px rgba(0, 0, 0, 0.6); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Shadow(Strength=29, Direction=135, Color=#000000); /*IE 5.5-7*/
  }
`;
