//dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    border: 3px solid rgba(118,8,23,1);
    background-color: white;
    border-radius: 20px;
    height: 100%;

    button {
        width: 100%;
        border-radius: 0;
        color: white;
        background-image: linear-gradient( 178.2deg,  rgba(118,8,23,1) 10.9%, rgba(158,12,33,1) 62.6% );
        font-size: 1rem;

        &:hover {
            background-image: linear-gradient( 178.2deg,  rgba(158,12,33,1) 10.9%, rgba(118,8,23,1) 62.6% );
        }
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: 'Dosis', sans-serif;;
        padding: 1.5rem;
        height: 100%;
    }
`;


