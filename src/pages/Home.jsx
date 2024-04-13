import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Classes from '../components/Classes';
import Customer from '../components/Customer';
import Header from '../components/Header';
import { Joining } from '../components/Joining';
import Offers from '../components/Offers';
import { Footer } from '../components/Footer';


export default function Home() {
    return (
        <div>
            <div className="home_top_section">
            <Header />
            <Banner />
            </div>
            <About />
            <Offers />
            <Customer />
            <Classes />
            <Joining />
            <Footer />
        </div>
    )
}
