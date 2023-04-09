import { DrawerIcon, DrawerItem, DrawerLinks, Navbar as Nav, NavCloseButton, NavLinkContainer, NavMenu, NavbarContainer, StyledDrawer } from "./Navbar.styled";
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { useState } from "react";
import { FaWindowClose, FaHome } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <NavbarContainer>
                <h1>
                    Ananth
                </h1>

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
                    <AiOutlineClose />
                </NavCloseButton>
                <br/>

                <div>
                    <NavLinkContainer>
                        <DrawerItem>
                            <DrawerIcon><FaHome /></DrawerIcon>
                            <DrawerLinks>Home</DrawerLinks>
                        </DrawerItem>
                    </NavLinkContainer>
                </div>
            </StyledDrawer>
        </Nav>
    )
}

export default Navbar;
