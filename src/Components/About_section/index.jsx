import { Component } from 'react';
import eu  from '../../img/eu.jpg';
import cv from '../../utils/CV.pdf';
import { LiaFileAlt } from "react-icons/lia";
import { FaJsSquare } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import './styles.css';

export class AboutSection extends Component {
    render() {

        return(
            <section className='about_section' id='about'>
                
                <h2 className='title_2'>About Me</h2>
                <span className='tt'>Introduction</span>
                <div className='about_container container grid'>
                
                
                    <img className='img_me' src={eu} alt="" />
                    <div className='about_data'>
                        <div className='about_info grid'>
                            <div className='about_box'>
                            <i><FaJsSquare size={20}/></i>
                                <h3>Experiece</h3>
                                <span className='pp'>Personal Projects</span>
                            </div>
                            <div className='about_box'>
                                <i><FaBriefcase size={20}/></i>
                                <h3 className='title_box'>Completed</h3>
                                <span>x - Projects</span>
                            </div>
                            <div className='about_box'>
                                <i> <FaBug size={20}/></i>
                                <h3>Study</h3>
                                <span>7 months</span>
                            </div>
                        </div>
                        <p className='text'>I am currently studying to specialize in web development with React.js, with a lot of experience in personal projects.</p>
                        <a className='cv' href='../../utils/CV.pdf' src='../../utils/CV.pdf' download={cv} >
                            DOWNLOAD CV <LiaFileAlt size={20}/>
                            
                        </a>
                    </div>
                </div>
            </section>
        )
    };
        
       
};