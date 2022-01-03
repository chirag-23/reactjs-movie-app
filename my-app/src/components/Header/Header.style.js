import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0px 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 8px 0;
    margin: 0px auto;
    color: var(--white);
    font-size: var(--fontSmall);

    @media screen and (max-width:500px){
        font-size: var(--fontReg);
    }
    @media screen and (max-width:350px){
        font-size: 10px;
    }
`;

export const LogoImg = styled.img`
    width: 120px;

    @media screen and (max-width: 500px){
        width: 80px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px){
        width: 70px;
    }
`;