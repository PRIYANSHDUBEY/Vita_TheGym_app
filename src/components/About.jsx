import React from 'react';
import Card from './Card';
import about1 from './../assets/images/about/about_1.png';
import about2 from './../assets/images/about/about_2.png';
import about3 from './../assets/images/about/about_3.png';

export default function About() {
const data =[
    {id: 1 , img:about1 , description:"We work out an appropriate schedule for you to achieve your desired goal and follow this very closely." , title: "Milon Training ", linkName:"Know more"},
    {id: 2 , img:about2 , description:"We work out an appropriate schedule for you to achieve your desired goal and follow this very closely." , title: "Personal Training", linkName:"Know more"},
    {id: 3 , img:about3 , description:"We work out an appropriate schedule for you to achieve your desired goal and follow this very closely." , title: "Group Lessons & Cycling", linkName:"Know more"},
]


    return (
        <section id="about" className="about_sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="vita_about text-center">
                            <h4 className="vita_title">about</h4>
                            <h3>Vita SportsClub!</h3>
                            <p>Finally we can welcome you back in our club. The VITA team hopes
                                to see you all again soon. See you soon!</p>
                        </div>
                    </div>
                </div>
                <div className="about_items">
                    <div className="row g-0 img5_col">
                        {data.map((value) =>{
                            return (
                        <Card key={value.id} img={value.img} title={value.title} description={value.description} linkName={value.linkName}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
