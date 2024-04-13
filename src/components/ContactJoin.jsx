import React from 'react';
import Vitabtn from './Vitabtn';


const ContactJoin = () => {
  return (
    <section id="join" className="join_sec">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="vitajoin contactp_vitajoin text-center">
                    <h4 className="vita_title">Grab The Opportunity</h4>
                    <h2>To Take The Membership</h2>
                    <p>In addition, we want to make sure you’re taking full advantage of all the membership benefits
                        now available to you! Here are a few other things you can get started with right away</p>
                 <Vitabtn text="ENROLL NOW"  />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactJoin