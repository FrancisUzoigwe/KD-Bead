import React from "react";
import styled from "styled-components";
import Card from "../Components/Static/Card";
import {
  GiCakeSlice,
  GiSlicedBread,
  GiSandwich,
  GiFrenchFries,
} from "react-icons/gi";

const Contact = () => {
  return (
    <div id="about">
      <Container>
        <Main>
          <BigText>Welcome To Our Store</BigText>
          <SmallText>
            Welcome to K.D Bread, where passion meets perfection. Step into a
            world of irresistible aromas and artisanal creations. <br /> Discover our
            heavenly bread, pastries, and more, crafted with love to satisfy
            your cravings. Experience pure delight at K.D Bread!
          </SmallText>
          <Holder>
            <Card text="SandWich" image={<GiSandwich size={150} />} />
            <Card text="Cake" image={<GiCakeSlice size={150} />} />
            <Card text="Bread" image={<GiSlicedBread size={150} />} />
            <Card text="French Fries" image={<GiFrenchFries size={150} />} />
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Contact;

const SmallText = styled.div`
  text-align: center;
  font-size: 14px;
  color: grey;
  font-weight: 600;
`;

const BigText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 35px;
`;

const Holder = styled.div`
  width: 75%;
  height: 200px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 90%;
  height: 90%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
