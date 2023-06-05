import React from "react";
import styled from "styled-components";
import Button from "../Components/Static/Button";
// import Bread from '../Components/Static/Bread'
import hambuger from "../Assets/hamburger-removebg-preview.png";
import Bread from "../Components/Static/Bread";
import bre from "../Assets/Bread2.jpeg";
import brea from "../Assets/Bread3.jpeg";
import soft from "../Assets/soft.webp";
import meatpie from "../Assets/meatpieremovebg-preview (1).png";
import hey from "../Assets/Bread6.jpeg";
import jey from "../Assets/Cake6.jpeg";
const Features = () => {
  return (
    <div id="features">
      <Container>
        <Main>
          <BigText>Our Featured Food</BigText>
          <Smalltext>
            Welcome to the K.D Bread, where culinary wonders come to life.
            Explore our delectable array of artisan bread, mouthwatering
            pastries, and tantalizing treats. Experience the extraordinary
            flavors that make K.D Bread a true sensation in the world of baking
          </Smalltext>
          <Section>
            <Bread image={hambuger} title="Hanburger" price="₦699.99" />
            <Bread image={bre} title="Brown Bread" price="₦999.99" />
            <Bread image={brea} title="Salt Bread" price="₦1599.99" />
            <Bread image={soft} title="SoftBread" price="₦999.99" />
          </Section>
          <Section>
            <Bread image={meatpie} title="MeatPie" price="₦299.99" />
            <Bread image={hey} title="French Bread" price="₦599.99" />
            <Bread image={jey} title="BirthDay Cakes" price="₦3999.99" />
            <Bread image={hambuger} title="Hanburger" price="₦699.99" />
          </Section>
          <ButtonHold>
            <Sub>
              <Button text="Previous" c="darkorange " />
              <Button text="Next" c="white" bgc="darkorange" />
            </Sub>
          </ButtonHold>
        </Main>
      </Container>
    </div>
  );
};

export default Features;

const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  height: 60px;
`;

const ButtonHold = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  align-items: center;
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;
`;

const Smalltext = styled.div`
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 700;
`;

const Section = styled.div`
  width: 100%;
  height: 220px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 70%;
  height: 100%;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  /* height: 700px; */
  height: calc(100vh - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
