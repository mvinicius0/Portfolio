import { Component } from 'react';
import './styles.css';
import { AiTwotoneAppstore } from "react-icons/ai";

export class Header extends Component {

    render() {

        return(
            <header className='header-1 scroll' >
            <nav className='nav nav_container'>
                <a href="#home" className='logo'>Marcos</a>
                <div className='nav_menu'>
                    <ul className='nav_list item'>
                        <li className='nav_item'>
                            <a href="#home">Home</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#about">About</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#skills">Skills</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className='nav_item'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <i className='ui uil-times nav_close'>
                    <AiTwotoneAppstore />
                    </i>
                </div>
                <div className='nav_toggle'>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
        )
    };
        
       
};