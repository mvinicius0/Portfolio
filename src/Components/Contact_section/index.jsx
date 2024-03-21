import { Component } from "react";
import './styles.css';
import { MdOutlineAttachEmail } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

export class ContactSection extends Component {
    render () {
        return (
            <section className="contact_section" id="contact">
                <h3 className="section_title">Contact Me!</h3>
                <span className="section_subtitle">My e-mail</span>
                <div className="contact_container container grid">
                    <div className="contact_content">
                        <div className="contact_info">
                            <div className="contact_card">
                                <i className="bx bx-mail-send contact_card-icon"><MdOutlineAttachEmail size={20}/></i>
                                <h3 className="contact_card-title">E-mail</h3>
                                <span className="contact_card-data">vinicius.msouza07@gmail.com</span>
                                <a href="mailto:vinicius.msouza07@gmail.com" className="contact_button">Write me 
                                <i className="bx bx-right-arrow-alt contact_button-icon"><GoArrowRight /> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};