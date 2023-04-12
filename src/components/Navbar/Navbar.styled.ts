import styled from 'styled-components';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';

export const StyledMenu = styled(Menu)`
    .MuiPaper-root {

        background-color: slategray;

    }
`

export const Navbar = styled.div`
    height: 6.5rem;
    position: absolute;
    background-color: transparent;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;


    @media only screen and (min-device-width: 320px) and (max-device-width: 
  480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    height: 5rem;

  }
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 3rem;
    margin-top: 1rem;

    h1 {
        color: ${({ theme }) => theme.secondary};
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 
  480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    padding: 0 1rem;
    margin-top: 0rem;

    h1 {
        font-size: 1.5rem;
    }

  }
`;

export const NavMenu = styled.div`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.tertiary};
    cursor: pointer;
    transform: translateY()(-10px);
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const NavCloseButton = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
    position: absolute;
    right: 10%;
    top: 5%;
    transition: all 0.2s;

    &:hover {
        color: ${({ theme }) => theme.tertiary};
    }
`;

export const NavLinkContainer = styled.div`
    margin-top: 5rem;

    @media (max-width: 800px) {
        margin-top: 3rem;

    }

`

export const DrawerItem = styled.div`
    margin: 2rem auto;
    border-radius: 78.8418px;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    width: 85%;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    border: 2px solid ${({ theme }) => theme.primary};
    transition: background-color 0.2s, color 0.2s;

    :hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.secondary}
    }
`;

export const StyledDrawer = styled(Drawer)`
    .MuiPaper-root {
        padding: 0rem 1.8rem;
        width: 360px;
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        background-color: ${({ theme }) => theme.secondary};
        overflow: hidden;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;

        @media (max-width: 1100px) {
            width: 300px;

        }

        @media (max-width: 900px) {
            font-size: 1rem !important;

        }


        @media (max-width: 600px) {
            border-radius: 0 !important;
    
        }
    }



    /* .MuiPaper-root { */
        /* background-color: transparent; */
    /* } */
    /* .MuiBackdrop-root { */
        /* background: rgba(33, 33, 33, 0.15) !important; */
        /* backdrop-filter: blur(20px) !important; */
    /* } */
`;

export const DrawerLinks = styled.span`
    width: 50%;
    font-size: 1.3rem;
    font-weight: 600;

    @media (max-width: 900px) {
        font-size: 1rem !important;

    }


    @media (max-width: 600px) {
        font-size: 0.9rem !important;
    
    }

`;

export const DrawerIcon = styled.div`
    font-size: 1.6rem;
`;

export const ThemeIconButton = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    overflow: 'hidden';
    background-color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.type === 'light' ? 'black' : 'white'};
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    padding: 0;

`;

export const StyledIconButton = styled(IconButton)`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    @media (hover: hover) and (pointer: fine) {
        :hover {
            transform: scale(1.3);
        }
    }
`

// export const SettingsMenu = styled.div`
//     background-color: blue;
//     position: fixed;
//     height: 90vh;
//     width: 90vw;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     justify-content: center;
// `;

// export const SettingsMenuItem = styled.div`
//     background-color: red;
//     margin: 30px 30px;
//     width: 100%;
//     height: 5rem;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     padding: 3rem;
// `;

// export const SettingsMenuHeading = styled.div`
//     height: 100%;
//     display: flex;
//     align-items: center;
//     background-color: green;
//     flex: 0.3;
// `