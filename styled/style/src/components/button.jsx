import styled from "styled-components";

 const Button = styled.button`
background-color: ${(props) => {
    return props.backgroundcolor;
  }};
  padding: 5px 15px;
  color: ${(props) => {
    return props.color;
  }};
  border:${(props) => {
    return props.border;
  }};
  margin: 0px 10px;
  border-radius: 3px;
  

`;
export { Button };
