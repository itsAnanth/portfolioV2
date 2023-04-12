import styled from "styled-components";

export const Divider = styled.div`
    position: absolute;
    /* top: 50px; */

    height: 50px;
    width: 85%;

    top: 50px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const DividerCircle = styled.div`
    background-color: ${({ theme }) => theme.primary};
    width: 10px;
    height: 10px;
    border-radius: 50%;


    @media (max-width: 800px) {
        height: 7px;
        width: 7px;
    }

    @media (max-width: 600px) {
        height: 5px;
        width: 5px;
    }
    
`;

export const DividerLine = styled.div`
    background-color: ${({ theme }) => theme.primary};
    width: 95%;
    height: 5px;
    border-radius: 10px;

    @media (max-width: 800px) {
        height: 4px;
    }

    @media (max-width: 600px) {
        height: 3px;
        width: 93%;
    }
`;