import { Header } from '../../Components/header';
import { HomeSection } from '../../Components/home_section';
import './styles.css';
import { Component } from 'react';
import { AboutSection } from '../../Components/About_section';
import { SkillsSection } from "../../Components/Skills_section";
import { PortfolioSection } from '../../Components/Portfolio_section'
import { ContactSection } from '../../Components/Contact_section';
import { Footer } from '../../Components/Footer';


export class Home extends Component {


  render () {

    
    return(


      <section className='container-1'>
      	  <section  id='home' className='header'>
          <Header
          />
          </section>
          <section className='home' id='home'>
            <HomeSection/>
          </section>

          <section className='about' id='about'>
            <AboutSection/>
          </section>

          <section className='skills' id='skills'>
            <SkillsSection/>
          </section>

          <section className='portfolio' id='portfolio'>
          <PortfolioSection/>
          </section>

          <section className='contact' id='contact'>
            <ContactSection/>
          </section>

          
            <Footer/>
          
      </section>
    )
  }
}

