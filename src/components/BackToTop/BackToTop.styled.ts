import styled from "styled-components";

export const BTTContainer = styled.div`
    position: fixed;
    right: 10px;
    bottom: 60px;
    height: 30px;
    z-index: 999;

    button {
        font-size: 3rem;
        outline: none;
        border: none;
        cursor: pointer;
        background: none;
        user-select: none;
        padding: 20px;
        color: ${({ theme }) => theme.tertiary};
        transition: all 0.3s;

        @media (hover: hover) and (pointer: fine) {
            :hover {
            transform: scale(1.3);
            color: ${({ theme }) => theme.primary};

            }
        }



    }

    @media (max-width: 800px) {
        right: -4px;
    }


`;