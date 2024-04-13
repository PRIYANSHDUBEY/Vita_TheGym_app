import React from 'react';
import ContactJoin from '../components/ContactJoin';
import ContactSection from '../components/ContactSection';
import { Footer } from '../components/Footer';
import Header from '../components/Header';

const ContactPage = () => {
  return (
    <>
    <div className="home_top_section inner_banner">
  <Header/>
  <div className="hero_section">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-12">
                        <div className="top_sec bk_img-2">
                            <div className="vita_fitness text-center">
                                <h4>Contact Us</h4>
                                <h2>Get In Touch!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <ContactSection/>
  <ContactJoin/>
<Footer/>
</>
  )
}

export default ContactPage