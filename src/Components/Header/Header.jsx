import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import './Header.css';

const Header = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
    <div className='navbar'>
        <div className='logo' onClick={scrollToTop}>
            <span className='pro'>pro</span>fanor</div>
        <ul>
            <li>
                <Link
                    activeClass='active-link'
                    to='about-me'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    >
                    AboutMe
                </Link>
            </li>
            <li>
                <Link
                    activeClass='active-link'
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    activeClass='active-link'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    activeClass='active-link'
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    > 
                    Contact
                </Link>    
            </li>
        </ul>
    </div>
    );
}

export default Header;