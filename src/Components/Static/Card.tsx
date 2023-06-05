import React from "react";
import styled from "styled-components";
interface iCard {
  text?: string;
  image?: any;
}

const Card: React.FC<iCard> = ({ text, image }) => {
  return (
    <div>
      <Container>
        <Image>{image}</Image>
        <Text>{text}</Text>
      </Container>
    </div>
  );
};

export default Card;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-weight: 700;
`;

const Image = styled.div`
  width: 100%;
  height: 150px;
  color: darkorange;
`;

const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  background: white;
  transition: all 450ms;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=29, Direction=96, Color=#000000)"; /*IE 8*/
    -moz-box-shadow: 1px 10px 29px -24px rgba(0, 0, 0, 0.6); /*FF 3.5+*/
    -webkit-box-shadow: 1px 10px 29px -24px rgba(0, 0, 0, 0.6); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
    box-shadow: 1px 10px 29px -24px rgba(0, 0, 0, 0.6); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Shadow(Strength=29, Direction=135, Color=#000000); /*IE 5.5-7*/
  }
`;
