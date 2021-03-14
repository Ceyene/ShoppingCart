//dependencies
import styled, { createGlobalStyle } from "styled-components";
//components
import IconButton from "@material-ui/core/IconButton";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  font-family: 'Dosis', sans-serif;
  color: #555555;
  position: relative;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  letter-spacing: 0.07rem;
}`;

export const Wrapper = styled.div`
    box-sizing: border-box;
    margin: 1.5rem auto;
    width: 80vw;
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 1.5rem;
    top: 1.5rem;
    border: 2px solid #bd3f32;
    color: #bd3f32;
    background-color: white;

    &:hover{
        color: white;
        border-color: white;
        background: linear-gradient(to right, #cb356b, #bd3f32);
    }
`;

export default GlobalStyle;