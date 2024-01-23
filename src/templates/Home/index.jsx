import { Header } from '../../Components/header';
import { HomeSection } from '../../Components/home_section';
import './styles.css';
import { Component } from 'react';


export class Home extends Component {


  render () {
    
    return(
      <section className='container'>
      	  <section  id='home' className='header'>
          <Header/>
          </section>
          <section className='home' id='home'>
            <HomeSection/>
          </section>
      </section>
    )
  }
}

