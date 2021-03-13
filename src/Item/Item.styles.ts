//dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    border: 3px solid #c5c52e;
    border-radius: 20px;
    height: 100%;

    button {
        width: 100%;
        border-radius: 0;
        color: white;
        background-color: #c5c52e;
        box-shadow: inset -0.15rem 0.12rem rgba(197, 197, 46, 0.327);
        font-size: 1rem;

        &:hover {
            background-image: linear-gradient(
        109.5deg,
        rgba(197, 197, 46, 0.6) 11.2%,
        rgba(197, 197, 46, 0.849) 100.2%
      );
            border-color: #ffffff;
        }
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1.5rem;
        height: 100%;
    }
`;


