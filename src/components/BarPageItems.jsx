import React from 'react';
import barsec from '../assets/images/fitness/bar_sec_img.png';

const BarPageItems = () => {
  return (
    
    <section id="fitness" className="fitness_content bar_fitness_contect">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div className="fitness_content_img">
                    <img src={barsec} alt="personal_tranning" className="img-fluid"/>
                </div>
            </div>
            <div className="col-md-7">
                <div className="fitness_content_detail">
                    <h2>Bar</h2>
                    <p>Enjoying a cocktail at the bar, a good chat over coffee with the friends before or after
                        exercising in one of the cozy seating areas
                        or a solid game of billiards with a nice beer in hand ensure that you feel completely
                        relaxed and the stress disappears in no time ...</p>
                    <p>You can also go there to satisfy the small hunger with a croque monsieurtje or a homemade
                        spaghetti.</p>
                    <div className="vita_btn">
                        <a href="contact_page.html" className="btn btn_style">Contact Us Now!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default BarPageItems