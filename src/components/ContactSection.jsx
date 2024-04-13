import React from 'react';
import { useFormik } from 'formik';
import mapin from '../assets/images/map-pin.png';
import phone from '../assets/images/phone.png';
import mail from '../assets/images/mail.png';



const validation = values => {
    const errors = {};
    if (!values.first) {
        errors.first = "Must be less than 15 characters";
    }
    // if (values.last.length < 15) {
    //     errors.last = "Must be less than 15 characters";
    // }
    // if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = "Must have a proper email address "
    // }
    // if (values.contact.length < 10) {
    //     errors.contact = "Must be less than 10 characters";
    // }
    return errors;
};

const ContactSection = () => {
    const formik = useFormik({
        initialValues: {
            first: "",
            last: "",
            email: "",
            contact: ""
        
        },
        validation,
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <section className="contact_section">
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-7 bk_white">
                        <div className="contact_form">
                            <div className="contact_form_sub">
                                <h2>Join Vita Sports Club Now!</h2>
                                <p>If you have any type of query please fill this form.We will contact you within 1 business
                                    day
                                    to answer your question.</p>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="contact_input">
                                        <div className="input_col">
                                            <input
                                                name="first"
                                                type="text"
                                                className="form-control mb-4"
                                                onChange={formik.handleChange}
                                                value={formik.values.first}
                                                placeholder="First Name" />
                                            {formik.errors.first ? "":<div>{formik.errors.first}</div> }
                                        </div>
                                        <div className="input_col">
                                            <input type="text" className="form-control mb-4" onChange={formik.handleChange} value={formik.values.last} name="last" placeholder="Last Name" />
                                            {/* {formik.errors.last ? <div>{formik.errors.last}</div> : null} */}
                                        </div>
                                    </div>
                                    <div className="contact_input">
                                        <div className="input_col">
                                            <input type="text" className="form-control mb-4" onChange={formik.handleChange} value={formik.values.email} name="email" placeholder="Email" />
                                            {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
                                        </div>
                                        <div className="input_col">
                                            <input type="password" className="form-control mb-4" onChange={formik.handleChange} value={formik.values.contact} name="contact" placeholder="Contact" />
                                            {/* {formik.errors.contact ? <div>{formik.errors.contact}</div> : null} */}
                                        </div>
                                    </div>
                                    <div className="form_bottom">
                                        <h3>Already a Member?</h3>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Yes</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault2">No</label>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"
                                            placeholder="Message"></textarea>
                                    </div>
                                    <div className="vita_btn">
                                        <button type="submit" className="btn btn_style" >SEND</button>
                                    </div>
                                </form>
                                <div className="job_opp_box">
                                    <div className="">
                                        <h4>Looking For a Opportunity?</h4>
                                        <p>Check out all open positions</p>
                                    </div>
                                    <div className="">
                                        <a href="vitaJob_page.html">View All Jobs!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 bk_blk">
                        <div className="contact_sec_menu">
                            <h5>Contact Us</h5>
                            <ul className="menu_link">
                                <li><a href="#"><img src={mapin} />
                                    <div className="inner_link">Vita SportsClub
                                        Natiënlaan 176 8300 Knokke Belgie</div></a>
                                </li>
                                <li><a href="#"><img src={phone} />
                                    <div className="inner_link">+32 50 700 740</div>
                                </a></li>
                                <li><a href="#"><img src={mail} />
                                    <div className="inner_link">info@vitaknokke.be</div>
                                </a></li>
                            </ul>
                            <div className="">
                                <h5>Opening Hours</h5>
                                <ul className="timimg_list">
                                    <li>Monday <div className="timimg_list_points">8:00 to 12:30 & 17:00 to 22:00</div>
                                    </li>
                                    <li>Tuesday <div className="timimg_list_points">8:00 to 12:30 & 17:00 to 22:00</div>
                                    </li>
                                    <li>Wednesday <div className="timimg_list_points">8:00 to 12:30 & 17:00 to 22:00</div>
                                    </li>
                                    <li>Thursday <div className="timimg_list_points">8:00 to 12:30 & 17:00 to 22:00</div>
                                    </li>
                                    <li>Friday <div className="timimg_list_points">8:00 to 12:30</div>
                                    </li>
                                    <li>Saturday <div className="timimg_list_points">8:00 to 12:30</div>
                                    </li>
                                    <li>Sunday <div className="timimg_list_points">8:00 to 12:30</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection