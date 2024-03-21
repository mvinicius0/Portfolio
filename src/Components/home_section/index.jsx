import { Component } from 'react';
import eu  from '../../img/eu.jpg';
import { PiArrowBendRightDownThin } from "react-icons/pi";
import instagram  from '../../img/instagram.png';
import github  from '../../img/github.png';
import linkedin  from '../../img/linkedin.png';

import './styles.css';

export class HomeSection extends Component {
    render () {
        return(
            <section className='home section' id='home'>
                <div className='home_container container-2 grid'>
                    <div className='home_content grid'>
                        <div className='home_social'>
                        <a href="https://www.instagram.com/mvinicius07?igsh=MWZraXU3b3IzcTNmNw==" target='_blank'>
                        <img src={instagram} alt="" />
                        </a>
                        <a href="https://github.com/mvinicius0" target='_blank'>
                        <img src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/marcos-souza-540a61148/" target='_blank'><img src={linkedin} alt="" /></a>
                            
                            
                        </div>
                        <div className='home_img'>
                            <img className='me' src={eu} alt="" />

                            
                        </div>
                        <div className='home_text'>
                            <h1 className='title'>Marcos Souza</h1>
                            <h2 className='subtitle'> Dev Front-end</h2>
                            <p className='text'>Hello, I'm Marcos, I'm 23 years old and I'm a web development student, I'm currently looking for my first opportunity in the area, and to develop my skills.</p>
                            

                            <a href='#contact' className='contact_1'> Contact <PiArrowBendRightDownThin color='white' size={20} className='icon' /> </a>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
} 