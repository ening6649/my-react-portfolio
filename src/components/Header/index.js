import React from 'react';
import './styles.css'

function Header({currerntPage, handlePageChange}) {
    return (
        <section className='header'>
            <p className='home'>
                Ning's React Portfolio
            </p>
            <nav className='headerNav'>
                <ul className='headerNavUl'>
                    <li>
                        <a 
                        href="#about-me"
                        className='headerNavUlLi'
                        onClick={()=> handlePageChange ('about-me')}
                        >
                        About Me
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#what-i-do"
                        className='headerNavUlLi'
                        onClick={()=> handlePageChange ('what-i-do')}
                        >
                        What I Do
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#my-applications"
                        className='headerNavUlLi' 
                        onClick={()=> handlePageChange ('my-applications')}
                        >
                        My Applications
                        </a>
                    </li>
                    <li>
                        <a  
                        href="#contact-me"
                        className='headerNavUlLi'
                        onClick={()=> handlePageChange ('contact-me')}
                        >
                        Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;