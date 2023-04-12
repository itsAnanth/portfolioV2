import { useState } from 'react';
import { useTheme } from 'styled-components';
import { BTTContainer } from './BackToTop.styled';
import { IoIosArrowDropupCircle, IoMdArrowDropupCircle } from 'react-icons/io';

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) 
            setVisible(true);
        else 
            setVisible(false);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible);


    return (
        <BTTContainer
            style={{ display: visible ? 'inline' : 'none' }}
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <IoIosArrowDropupCircle />
            </button>

        </BTTContainer>
    )
}

export default BackToTop;