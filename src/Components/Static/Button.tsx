import React from "react";
import styled from "styled-components";

interface iButton {
  c?: string;
  bgc?: string;
  text?: string;
}

const Button: React.FC<iButton> = ({ c, bgc, text }) => {
  return (
    <div>
      <Container c={c} bgc={bgc}>
        {text}
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{ c?: string; bgc?: string }>`
  color: ${(props) => props.c};
  font-size: 14px;
  background-color: ${(props) => props.bgc};
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid darkorange;
  transition: all 450ms;

  :hover{
    transform: scale(1.1);
    cursor: pointer;
  }
`;
