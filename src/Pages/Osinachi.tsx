import React from "react";
import styled from "styled-components";
import Button from "../Components/Static/Button";
import hero from "../Assets/Cake4-removebg-preview.png";

const osinachi = () => {
  return (
    <div id="order">
      <Container>
        <Main>
          <Left>
            <BigText>
              Best Sell <br />
              Cake In This Week!
            </BigText>
            <SmallText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos incidunt in ea eaque consectetur est facilis
              architecto dolore numquam eius!
            </SmallText>
            <Price>₦13,000.00</Price>
            <ButtonHold>
              <Button text="Buy Now" bgc="darkorange" c="white" />
            </ButtonHold>
          </Left>
          <Right src={hero} />
        </Main>
      </Container>
    </div>
  );
};

export default osinachi;
const ButtonHold = styled.div`
  width: 15%;
  height: 40px;
  margin-right: 300px;
`;
const Price = styled.div`
  margin: 20px 10px;
  font-weight: 500;
  font-size: 20px;
`;

const SmallText = styled.div`
  color: grey;
  font-weight: 600;
  font-size: 15px;
  margin: 10px 10px;
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-top: 150px;
`;

const Left = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
`;

const Right = styled.img`
  width: 55%;
  object-fit: contain;
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

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
