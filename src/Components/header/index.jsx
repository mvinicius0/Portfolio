import { Component } from 'react';
import './styles.css';

export class Header extends Component {
    render() {

        return(
            <header className='header'>
            <nav className='nav_container'>
                <a href="#home" className='logo'>Marcos</a>
                <div className='nav_menu'>
                    <ul className='nav_list item'>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="about">About</a>
                        </li>
                        <li>
                            <a href="skills">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        )
    };
        
       
};