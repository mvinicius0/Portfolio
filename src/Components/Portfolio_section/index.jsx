import { Component } from 'react';
import pokedex from '../../img/pokedex.png';
import tarefas from '../../img/tarefa.png';
import load from '../../img/load.svg';
import { GoArrowRight } from "react-icons/go";
import './styles.css';

export class PortfolioSection extends Component {
    render() {

        return(
            <section className='skill_section' id='skills'>
               <h2 className='title_2'>Portfolio</h2>
                <span className='tt'>Projects</span>
                <div className='filter'>
                    <div className='work_filter'>
                        <span className='active-work work_item'>All</span>
                    </div>
                    <div className='work_container container grid'>
                        <div className='work_card'>
                            <img className='work_image' src={pokedex} alt="" />
                            <h3>Pokedex</h3>
                            <a className='demo_title' target='_blank' href="https://pokedexmarcos.netlify.app/">Demo
                            <i> <GoArrowRight /></i>
                            </a>
                        </div>
                        <div className='work_card'>
                            <img className='work_image img1' src={tarefas} alt="" />
                            <h3>to-do list</h3>
                            <a className='demo_title' target='_blank' href="https://todolistmarcos.netlify.app/">Demo
                            <i> <GoArrowRight /></i>
                            </a>
                        </div>
                        <div className='work_card'>
                            <img className='work_image load' src={load} alt="" />
                            <h3>E-commerce</h3>
                            <a href="" className='demo_title'>in progress
                            <GoArrowRight />
                            </a>
                        </div>
                        <div className='work_card'>
                            <img className='work_image load' src={load} alt="" />
                            <h3>Loading...</h3>
                            <a className='demo_title' href="">in progress
                            <GoArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    };
        
       
};