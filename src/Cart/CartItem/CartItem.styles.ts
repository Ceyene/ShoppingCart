//dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Display", sans-serif;
    border-bottom: 1px solid grey;
    padding: 1.5rem 0;

    div {
        flex: 1;
    }

    .information,
    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }

    img {
        max-width: 80px;
        object-fit: cover;
        margin-left: 2rem;
    }
`;