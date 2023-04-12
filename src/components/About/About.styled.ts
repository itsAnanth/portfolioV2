import styled from "styled-components";

export const About = styled.div`
    min-height: 100vh;
    position: relative;
    background-color: ${({ theme }) => theme.secondary};
`;


export const AboutContainer = styled.div`
    display: flex;
    justify-content: space;
    align-items: center;
    flex-direction: row;
    height: fit-content;
    padding-top: 9rem;

    @media screen and (max-width: 992px) {
        flex-direction: column-reverse;

    }
`;

export const AboutImage = styled.img`
    margin-top: 40px;
    pointer-events: none;
    width: 400px;
    height: 400px;
    flex: 0.5;

    @media screen and (max-width: 992px) {
        width: 250px;
        height: 250px;
        flex: 0.4;

    }

    @media screen and (max-width: 800px) {
        width: 200px;
        height: 200px;
        flex: 0.4;

    }
`;

export const AboutContent = styled.div`
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    flex: 0.5;
    width: 100%;
    height: fit-content;

    h2 {
        margin-bottom: 40px;
        font-size: 3.5rem;
        color: ${({ theme }) => theme.primary};
    }

    p {
        line-height: 2rem;
        color: ${({ theme }) => theme.tertiary80};
        font-size: 1.25rem;
    }

    @media screen and (max-width: 992px) {
        box-sizing: border-box;
        flex: 0.6;
        align-items: center;
        padding: 8% 8%;

        p {
            /* text-align: center; */
        }

    }

    @media screen and (max-width: 800px) {
        h2 {
            font-size: 3rem;
        }

        p {
            line-height: 1.5rem;
            font-size: 1rem;
        }

    }

    @media screen and (max-width: 600px) {
        h2 {
            font-size: 2.5rem;
        }

        p {
            line-height: 1.3rem;
            font-size: 1rem;
        }

    }
`;



