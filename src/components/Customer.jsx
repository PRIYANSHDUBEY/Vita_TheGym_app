import React from 'react';
import Card2 from './Card2';
import icon_park from '../assets/images/icon-park_quote.png';


export default function Customer() {
const data = [
 
    { id: 1, img:{icon_park} , description:"The best on the net! The best on the net! I don't know what else tosay. We've used Fitness club for  the last five years."  , title:"Yelena Delta"},
]



    return (
        <section id="customers" className="customers_sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="vita_customers text-center">
                            <h4 className="vita_title">Happy</h4>
                            <h2>Customers</h2>
                        </div>
                    </div>
                </div>
                <div className="customer_content">
                    <div className="customer_slider owl-carousel">
                    {data.map((value) => {
                         return(
                   <Card2 key={value.id} img={value.img}   description={value.description} title={value.title}/>
                         )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
