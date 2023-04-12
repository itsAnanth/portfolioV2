import { DrawerIcon, DrawerItem, DrawerLinks, Navbar as Nav, NavCloseButton, NavLinkContainer, NavMenu, NavbarContainer, StyledDrawer, StyledIconButton, StyledMenu, ThemeIconButton } from "./Navbar.styled";
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { useState } from "react";
import { FaHome } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { IconButton, MenuItem } from '@mui/material'
import { Close } from '@mui/icons-material'
import { Theme, all } from '../../theme/theme';



function Navbar({ setTheme }: any) {

    const themes = all;
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleThemeChange = (theme: Theme, index: number) => {
        setTheme(theme);
        window.localStorage.setItem('themeIndex', String(index));
    }


    return (
        <Nav>
            {/* <SettingsMenu>
                <SettingsMenuItem>
                    <SettingsMenuHeading>test</SettingsMenuHeading>
                    <div>test1</div>
                </SettingsMenuItem>
            </SettingsMenu> */}
            <NavbarContainer>
                <h1>
                    Ananth
                </h1>


                <StyledMenu
                    id='simple-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {Object.keys(themes).map((item, index) => {
                        // @ts-ignore
                        const themeItem: Theme = themes[item];
                        return (
                            <MenuItem
                                style={{ paddingLeft: '20px', paddingRight: '20px' }}
                                onClick={handleClose}
                                key={index}
                            >
                                <StyledIconButton
                                    style={{
                                        height: '30px',
                                        width: '30px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 0,
                                        
                                    }}
                                    aria-controls='simple-menu'
                                    aria-haspopup='true'
                                    onClick={(e) => handleThemeChange(themeItem, index)}
                                >
                                    <div style={{ width: '15px', height: '30px', backgroundColor: themeItem.primary }} />
                                    <div style={{ width: '15px', height: '30px', backgroundColor: themeItem.secondary }} />
                                </StyledIconButton>
                            </MenuItem>
                        );
                    })}


                </StyledMenu>

                <NavMenu>
                    <IoMenuSharp
                        onClick={() => setOpen(true)}
                    ></IoMenuSharp>
                </NavMenu>


            </NavbarContainer>

            <StyledDrawer
                variant="temporary"
                anchor="left"
                open={open}
                disableScrollLock={true}
            >

                <NavCloseButton
                    onClick={() => setOpen(false)}
                >
                    <Close />
                </NavCloseButton>
                <br />

                <div>
                    <NavLinkContainer>
                        <DrawerItem>
                            <DrawerIcon><FaHome /></DrawerIcon>
                            <DrawerLinks>Home</DrawerLinks>
                        </DrawerItem>

                        <ThemeIconButton
                            onClick={handleClick}
                        >
                            <IconButton />
                        </ThemeIconButton>
                    </NavLinkContainer>
                </div>
            </StyledDrawer>
        </Nav>
    )
}

export default Navbar;
