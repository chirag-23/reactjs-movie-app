import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 10px;
    text-align: center;
    padding: 5px;

    h3{
        margin: 10px 0;
        margin-top: 2px;
        font-size: var(--fontSmall);
    }
    p{
        margin: 2px 0;
        font-size: var(--fontReg);
        padding: 0 4px;
    }
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    height: 250px;

    animation: animateThumb 0.5s;
    @keyframes animateThumb {
        from{
            opacity: 0.3;
        }
        to{
            opacity: 1;
        }
    }
`;