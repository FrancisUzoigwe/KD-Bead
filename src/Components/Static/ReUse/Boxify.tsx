import React from 'react'
import styled from 'styled-components';


interface Boxi {
    header?: string;
    title1?: string;
    title2?: string;
    title3?: string;
    title4?: string;
    title5?: string;
}

const Boxify:React.FC<Boxi> = ({header, title1, title2, title3, title4, title5}) => {
  return (
    <div>
        <Box>
            <Header>{header}</Header>
            <Title>{title1}</Title>
            <Title>{title2}</Title>
            <Title>{title3}</Title>
            <Title>{title4}</Title>
            <Title>{title5}</Title>
          </Box>
    </div>
  )
}

export default Boxify

const Title = styled.div`
margin:10px 0px;
font-size: 15px;
font-weight: 500px;
color: white;
transition: all 450ms;

:hover{
  transform: scale(1.1);
  cursor: pointer;
  color: darkorange;
}
`;

const Header = styled.div`
font-size: 20px;
font-weight: 700px;
color: white;
transition: all 450ms;

:hover{
  color: darkorange;
  cursor: pointer;
}
`;

const Box = styled.div`
width: 100%;
height: 300px;
display: flex;
flex-direction: column;
`