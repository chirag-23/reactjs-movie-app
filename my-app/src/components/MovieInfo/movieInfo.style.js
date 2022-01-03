import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
    background: ${({ backdrop }) => backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from{
            opacity: 0.2;
        }
        to{
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0,0,0,0.7);
    border-radius: 10px;

    @media screen and (max-width: 720px){
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .rating{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        border-radius: 50%;
        margin: 0 auto;
    }

    .info{
        margin-right: 50px;
    }

    h3{
        font-size: 1.4rem;
    }

    p{
        font-size: var(--fontSmall);
    }

    @media screen and (max-width: 500px){
        h3{
            font-size: 1.2rem;
        }
        p{
            font-size: 1rem;
        }
        .info{
            margin-right: 20px;
            :last-child{
                margin-right: 0;
            }
        }
        padding: 20px 10px;
    }
`;