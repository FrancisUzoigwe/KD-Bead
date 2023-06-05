import React from "react";
import styled from "styled-components";
import pic from "../Assets/chococookies-removebg-preview.png";
import Button from "../Components/Static/Button";

const Emma = () => {
  return (
    <div id="about">
      <Container>
        <Main>
          <Left src={pic} />
          <Right>
            <BigText>
              About <br />
              K.D Bread
            </BigText>
            <SmalText>
              Welcome to K.D Bread, where every bite is a taste of pure joy.
              Indulge in our freshly baked goods made with love and the finest
              ingredients. From heavenly pastries to artisan bread, experience
              true bliss in every bite. Join us and savor the deliciousness
              today!
            </SmalText>
            <ButtonHold>
              <Button text="Read More" bgc="darkorange" c="white" />
            </ButtonHold>
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Emma;
const ButtonHold = styled.div`
  width: 20%;
  height: 40px;
  margin-top: 20px;
`;

const Left = styled.img`
  width: 55%;
  height: 100%;
  object-fit: contain;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  width: 40%;
`;
const SmalText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: grey;
  margin-top: 20px;
`;
const BigText = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
`;

const Main = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-start;
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
