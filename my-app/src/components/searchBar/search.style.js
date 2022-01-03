import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height:50px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 30px;
    color: var(--white);

    img{
        position: absolute;
        left: 15px;
        top: 10px;
        width: 30px;
    }
    input{
        font-size: var(--fontMed);
        position: absolute;
        left: 0;
        margin: 4.5px 0;
        padding: 0 0 0 70px;
        border: none;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus{
            outline: none;
        }
    }
`;