import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 380px;
    margin: 0 auto;
    padding: 20px;
    color: var(--darkGrey);
    background-color: var(--white);

    input{
        width: 100%;
        height: 30px;
        border: solid 1px var(--darkGrey);
        border-radius: 20px;
        margin: 10px 0;
        padding:20px;
        font-size: 1.3rem;
        outline: none;
    }

    label{
        font-size: 1.4rem;
    }

    .error{
        color: red;
        font-size: var(--fontSmall);
        margin: 20px 0;
    }
`;