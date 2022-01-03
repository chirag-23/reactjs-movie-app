import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: var(--medGrey);
    color: var(--white);
`;

export const Content = styled.div`
    /* display: flex; */
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 12px;

    span{
        font-size: var(fontSmall);
        color: var(--white);
        padding-right: 8px;
    }
`;