import { Component } from 'react';
import './styles.css';
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { DiReact } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaLanguage } from "react-icons/fa6";

export class SkillsSection extends Component {
    render() {

        return(
            <section className='skill_section' id='skills'>
               <h2 className='section_title'>Skills</h2>
               <span className='section_subtitle'>technical level</span>
               <div className='skills_container container grid'>
                <div className='skills_content'>
                    <h3 className='skills_title'>Frontend</h3>
                    <div className='skills_box'>
                        <div className='skills_group'>
                        <div className='skills_data'>
                            <i className='bx bx-badge-check'> <DiHtml5/></i>
                            <div>
                                <h3 className='skill_name'>HTML</h3>
                                <span className='skill_level'>intermediary</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        <i className='bx bx-badge-check'> <DiCss3 /></i>
                            <div>
                                <h3 className='skill_name'>CSS</h3>
                                <span className='skill_level'>intermediary</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        <i className='bx bx-badge-check'> <RiJavascriptFill /></i>
                            <div>
                                <h3 className='skill_name'>JavaScript</h3>
                                <span className='skill_level'>Basic</span>
                            </div>
                        </div>
                        </div>
                        <div className='skills_group'>
                            <div className='skills_data'>
                            <i className='bx bx-badge-check'> <DiReact /></i>
                            <div>
                                <h3 className='skill_name'>React.js</h3>
                                <span className='skill_level'>Basic</span>
                            </div>
                            </div>
                            <div className='skills_data'>
                            <i className='bx bx-badge-check'> <BiLogoTypescript /></i>
                            <div>
                                <h3 className='skill_name'>Typescript</h3>
                                <span className='skill_level'>Basic</span>
                            </div>
                            </div>
                            <div className='skills_data'>
                            <i className='bx bx-badge-check'> <IoLogoFigma /></i>
                            <div>
                                <h3 className='skill_name'>Figma</h3>
                                <span className='skill_level'>Basic</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills_content'>
                <h3 className='skills_title'>Backend</h3>
                <div className='skills_box'>
                        <div className='skills_group'>
                        <div className='skills_data'>
                            <i className='bx bx-badge-check'> <IoLogoNodejs /></i>
                            <div>
                                <h3 className='skill_name'>Node.js</h3>
                                <span className='skill_level'>Basic</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        <i className='bx bx-badge-check'> <SiMongodb /></i>
                            <div>
                                <h3 className='skill_name'>MongoDB</h3>
                                <span className='skill_level'>Basic</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        <i className='bx bx-badge-check'> <RiJavascriptFill /></i>
                            <div>
                                <h3 className='skill_name'>JavaScript</h3>
                                <span className='skill_level'>Basic</span>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className='skills_content'>
                <h3 className='skills_title'>Languages</h3>
                <div className='skills_box'>
                        <div className='skills_group'>
                        <div className='skills_data'>
                            <i className='bx bx-badge-check'> <FaLanguage /></i>
                            <div>
                                <h3 className='skill_name'>Portugues</h3>
                                <span className='skill_level'>Fluenty</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        <i className='bx bx-badge-check'> <FaLanguage /></i>
                            <div>
                                <h3 className='skill_name'>English</h3>
                                <span className='skill_level'>intermediary</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        <i className='bx bx-badge-check'> </i>
                            <div>
                                <h3 className='skill_name'></h3>
                                <span className='skill_level'></span>
                            </div>
                            
                        </div>

                        <div className='skills_data'>
                        <i className='bx bx-badge-check'> </i>
                            <div>
                                <h3 className='skill_name'></h3>
                                <span className='skill_level'></span>
                            </div>
                            
                        </div>
                        <div className='skills_data'>
                        <i className='bx bx-badge-check'> </i>
                            <div>
                                <h3 className='skill_name'></h3>
                                <span className='skill_level'></span>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                    </div>
                </div>
               </div>
            </section>
        )
    };
        
       
};