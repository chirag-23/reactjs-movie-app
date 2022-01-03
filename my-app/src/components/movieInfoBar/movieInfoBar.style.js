import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 80px;
    background: var(--darkGrey);
    padding: 0 10px;
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;
    height: 60px;

    .clm{
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 20px;
        flex: 1;
        margin: 0 10px;
        

        :first-child{
            margin-left: 0;
        }
        :last-child{
            margin-right: 0;
        }
    }

    p{
        font-size: var(--fontSmall);
    }

    @media screen and (max-width: 600px){
        .clm{
            flex-direction: column;
            padding: 10px;
            padding-bottom: 10px;
            margin: 0 4px;
            border-radius: 10px;
        }
    }
    @media screen and (max-width: 400px){
        .clm{
            flex-direction: column;
            padding: 5px;
            padding-bottom: 10px;
            margin: 0 2px;
            border-radius: 10px;
        }
        p{
            font-size: var(--fontReg);
        }
    }
`;