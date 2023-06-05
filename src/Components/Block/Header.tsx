import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>
            <span>K.D</span> Bread
          </Logo>
          <NavHolder>
            <Navs to="home" duration={600} smooth={true}>
              Home
            </Navs>
            <Navs to="about" duration={600} smooth={true}>
              About
            </Navs>
            <Navs to="features" duration={600} smooth={true}>
              Features
            </Navs>
            <Navs to="contact" duration={600} smooth={true}>
              Contact
            </Navs>
            <Navs to="order" duration={600} smooth={true}>
              Order
            </Navs>
          </NavHolder>
          <Action>
            <Hold>
              <Icon>
                <CgProfile size={18} />
              </Icon>
              <Text>My Profile</Text>
            </Hold>
            <Hold>
              <Icon>
                <FiShoppingCart size={18} />
              </Icon>
              <Text>Cart</Text>
            </Hold>
          </Action>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  transition: all 450ms;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  span {
    color: darkorange;
  }
`;

const Navs = styled(Link)`
  font-weight: 500;
  transition: all 450ms;

  :hover {
    color: darkorange;
    cursor: pointer;
  }
`;

const NavHolder = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  margin-top: 5px;
`;

const Text = styled.div`
  padding-left: 5px;
`;
const Hold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 450ms;

  :hover {
    color: darkorange;
    cursor: pointer;
  }
`;
const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13%;
`;

const Main = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
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
  z-index: 10;
`;
