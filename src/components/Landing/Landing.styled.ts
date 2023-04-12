import styled from "styled-components";
import Typewriter, { TypewriterClass } from 'typewriter-effect';


export const Landing = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


`;

export const LandingContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 100%;
    position: relative;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const LandingImage = styled.img`
    position: absolute;
    left: 35%;
    transform: translateX(-50%);
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s;
    border-color: ${({ theme }) => theme.secondary};
    /* animation: animate 15s linear infinite; */

    @media (max-width: 1100px) {
        width: 350px;
        height: 350px;
    }

    @media (max-width: 900px) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: 710px) {
        width: 250px;
        height: 250px;
    }

    @media (max-width: 600px) {
        width: 200px;
        height: 200px;
        left: 50%;
        top: 30%;
        border: 3px solid #eaeaea;
        transform: translate(-50%, -50%);
    }


    @keyframes animate {
	0% {
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	}
	15% {
		box-shadow: 0px 0px 30px ${({ theme }) => theme.primary};
	}

    35% {
		box-shadow: 0px 0px 30px red;
    }

    50% {
		box-shadow: 0px 0px 30px ${({ theme }) => theme.primary50};
    }
	100% {
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	}
}
`;

export const LandingContainerLeft = styled.div`
    flex: 35%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.primary};

    @media (max-width: 600px) {
        flex: initial;
        width: 100%;
        height: 30%;
    }
`;


export const LeftContent = styled.div`
    margin: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 600px) {
        display: none;

    }
`;

export const LandingSocial = styled.a`
    font-size: 35px;
    margin: 0 1rem;
    transition: all 0.3s;
    color: ${({ theme }) => theme.secondary};

    &:hover {
        color: ${({ theme }) => theme.tertiary};
        transform: scale(1.5);
    }
`;

export const LandingContainerRight = styled.div`
    flex: 65%;
    height: 100%;
    background-color: ${({ theme }) => theme.secondary};;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;


    @media (max-width: 600px) {
        box-sizing: border-box;
        padding: 0 2rem;
        flex: initial;
        height: 70%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;


export const RightContent = styled.div`
    /* width: 100%; */
    padding-right: 20%;
    display: flex;
    text-align: left;
    flex-direction: column;
    align-items: flex-start;
    /* margin-right: 7rem; */
    font-style: normal;
    color: ${({ theme }) => theme.tertiary};

    h6 {
        text-align: left;
        font-weight: 500;
        font-size: 1.25rem;
        margin-bottom: -0.85rem;
        opacity: 0.8;
    }

    h1 {
        text-align: left;
        font-weight: 600;
        font-size: 3.25rem;
        line-height: 110%;
        margin: 1rem 0;
    }

    .wrap {
        text-align: left;
        margin-top: 1.45rem;
        font-weight: 500;
        font-size: 1.15rem;
        opacity: 0.7;
    }

    @media (max-width: 1100px) {
        h6 {
            font-size: 1.1rem;
        }

        h1 {
            font-size: 3rem;
        }

        .wrap {
            margin-top: 0.3rem;
            margin-bottom: 1rem;
            font-weight: 500;
            font-size: 1rem;
        }
    }


    @media (max-width: 900px) {
        /* padding-right: 4rem; */
        /* margin-top: 10%; */
        /* margin-right: 6%; */
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 2.5rem;
        }

        h6 {
            font-size: 1rem;
        }
        padding-left: 25%;
    }

    @media (max-width: 660px) {

        /* padding-right: 1rem; */
    }

    @media (max-width: 600px) {

        padding: 0;
        align-items: center;
        margin-top: 20%;
        margin-right: initial;
        width: 100%;

        h6 {
            font-size: 1rem;
            text-align: center;
        }

        h1 {
            font-size: 2.5rem;
            text-align: center;
        }

        .wrap {
            margin: 0 auto;
            text-align: center;
            width: 90%;
            font-size: 0.95rem;
        }
    }

`;