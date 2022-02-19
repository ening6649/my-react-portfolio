import React from 'react';
import './styles.css'

function Header() {
    return (
        <section className='header'>
            <p className='home'>
                Ning's Portfolio
            </p>
            <nav className='headerNav'>
                <ul className='headerNavUl'>
                    <li>
                        <a className='headerNavUlLi' href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a className='headerNavUlLi' href="#what-i-do">What I Do</a>
                    </li>
                    <li>
                      <a className='headerNavUlLi' href="#my-applications">My Applications</a>
                    </li>
                    <li>
                      <a className='headerNavUlLi' href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;