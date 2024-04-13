import React from 'react'
import Cardof from './Cardof';
import offersgl from '../assets/images/offers/offers_gellery.jpg';
import activities1 from '../assets/images/offers/activities_1.png';
import activities2 from '../assets/images/offers/activities_2.png';
import activites3 from '../assets/images/offers/activities_3.png';
import activites4 from '../assets/images/offers/activities_4.png';


export default function Offers() {

    const data = [
        { id: 1, img: activities1, href: "Squash" },
        { id: 2, img: activities2, href: "Indoor Cycling" },
        { id: 3, img: activites3, href: "Squash" },
        { id: 4, img: activites4, href: "Squash" }
    ]
    return (
        <section id="offers" className="offers_sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 image_top">
                        <div className="offers_gellery">
                            <img src={offersgl} alt="offer-left" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 offer_bg">
                        <div className="vita_offers">
                            <h5 className="vita_title">We also Offers</h5>
                            <h2>Great Fitness Activities</h2>
                            <p>Vita SportsClub is the fitness where you want to train.
                                Not only for the sport, but simply because of the nice
                                pleasant atmosphere and good guidance. There is a
                                completely new range of strength and cardio equipment.
                            </p>
                        </div>
                        <div className="offers_activites">
                            {data.map((value) => {
                                return (
                                    <Cardof key={value.id} img={value.img} href={value.href} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
