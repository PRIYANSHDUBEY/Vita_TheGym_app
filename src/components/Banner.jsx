import React from 'react';
import bannerImg from './../assets/images/banner_img.png';
import Vitabtn from './Vitabtn';

export default function Banner() {
    return (
        <div className="hero_section home_top">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6">
                        <div className="top_sec bk_img-2">
                            <h4>A real sports club!</h4>
                            <h2>That Is Focused On You</h2>
                            <p>everything for individual fitness, strength fitness and cardio fitness. Experience Vita
                                SportClub for yourself now!</p>
                          <  Vitabtn text="CALL US NOW "/>
                        </div>
                    </div>
                    <div className="col-lg-6"><img src={bannerImg} alt="" className="hero_image" /></div>
                </div>
            </div>
        </div>
    )
}
