import React from 'react'
import BarPageItems from '../components/BarPageItems'
import BarPageJoin from '../components/BarPageJoin'
import { Footer } from '../components/Footer'
import Header from '../components/Header'


const BarPage = () => {
    return <div>
        <div className="home_top_section inner_banner">
            <Header />
            <div className="hero_section">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-12">
                            <div className="top_sec bk_img-2">
                                <div className="vita_fitness text-center">
                                    <h4>Want to Enjoying a cocktail </h4>
                                    <h2>Here is The Bar</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BarPageItems />
        <BarPageJoin/>
        <Footer />
    </div>
}

export default BarPage