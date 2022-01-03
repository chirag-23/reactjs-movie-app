import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 50px;
    border-radius: 25px;
    color: var(--white);
    border: none;
    font-size: var(--fontMed);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    :hover{
        opacity: 0.9;
    }
`;