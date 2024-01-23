import { Component } from 'react';
import eu  from '../../img/eu.jpg';
import './styles.css';

export class HomeSection extends Component {
    render () {
        return(
            <div className='home'>

                <div className='home_social'>
                    
                </div>
                <div className='text'>
                <h2>Marcos Souza.</h2>
                    <h3>Dev Front-end</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, incidunt inventore error fugit quia dolorem minus fuga nam omnis porro et expedita, officiis tempora natus quis delectus commodi? Aperiam, ipsum!</p>
                </div>
                <div className='img'>
                    <img src={eu} alt="selfie com meu rosto" />
                </div>
            </div>
        )
    }
} 