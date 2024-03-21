import { Component } from "react";
import './styles.css';
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

export class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer_container container">
                    <h1 className="footer_title">Marcos Souza</h1>
                    <ul className="footer_list">
                        <li> <a href="#about" className="footer_link">About</a></li>
                        <li> <a href="#skills" className="footer_link">Skills</a></li>
                        <li> <a href="#portfolio" className="footer_link">Portfolio</a></li>
                    </ul>

                    <div className="footer_social">
                        <a href="https://www.instagram.com/mvinicius07?igsh=MWZraXU3b3IzcTNmNw%3D%3D" className="footer_social-link">
                            <i className="bx bx1-instagram">
                            <FiInstagram />
                            </i>
                        </a>

                        <a href="https://github.com/mvinicius0" className="footer_social-link">
                            <i className="bx bx1-github">
                            <FiGithub />
                            </i>
                        </a>

                        <a href="https://www.linkedin.com/in/marcos-souza-540a61148/" className="footer_social-link">
                            <i className="bx bx1-linkedin">
                            <AiOutlineLinkedin />
                            </i>
                        </a>
                    </div>

                    <span className="footer_copy">©C.P | M.V  </span>

                    <a href="#" className="scrollup show-scroll">
                        <i className="uil uil-arrow-up scrollup_icon">

                        </i>
                    </a>
                </div>
            </footer>
        )
    }
};