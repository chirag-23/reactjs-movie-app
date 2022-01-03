import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--lightGrey);
    color: var(--darkGrey);
    margin: 0;
    padding: 4px;
    font-size: 1.1rem;
    margin-top: 50px;
`;

export const Content = styled.div`
    .github, .github:hover{
    color: rgb(47, 47, 47);
    text-decoration: none;
    padding-left: 5px;
    padding-right: 1px;
    }
    .ln, .ln:hover{
    color: #0077b5;
    text-decoration: none;
    padding-left: 5px;
    }
    p{
        color: var(--darkGrey);
        text-align: center;
        margin: 0;
        padding: 2px;
        font-size: 1.05rem;
    }
    div{
        padding: 0 10px;
    }
    text-align: center;
`;