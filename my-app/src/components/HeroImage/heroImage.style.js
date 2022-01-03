import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(0,0,0,0) 41%, rgba(0,0,0,0) 100%), url(${({image}) => image}), var(--darkGrey);
    background-size: 100%, cover;
    background-position: center;
    height: 720px;
    position: relative;
    animation: animateHeroImage 1s;

    @keyframes animateHeroImage{
        from{
            opacity:.2;
        }
        to{
            opacity:1;
        }
    }
    @media screen and (max-width:1420px){
        height: 600px;
    }
    @media screen and (max-width:800px){
        height: 400px;
    }
    @media screen and (max-width:500px){
        height: 300px;
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const Text = styled.div`
    z-index: 5;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    h1{
        font-size: var(--fontBig);

        @media screen and (max-width:800px){
            font-size: var(--fontMed);
        }
    }
    
    p{
        font-size: var(--fontMed);
        @media screen and (max-width:800px){
            font-size: var(--fontSmall);
        }
        @media screen and (max-width:450px){
            font-size: var(--fontReg);
        }
    }

    @media screen and (max-width:450px){
        bottom: 20px;
        max-width:100%;
        margin-right: 10px;
    }
`;