import React from 'react'
import logo2 from '../assets/images/logo_2.png';
import mappin from '../assets/images/map-pin.png';
import phone from '../assets/images/phone.png';
import mail from '../assets/images/mail.png';


export const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer_banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-sm-12">
                        <div className="footer_info">
                            <div className="text-center">
                                <img className="footerlogo" src={logo2} alt=""/>
                            </div>
                            <div className="social_icons d-flex justify-content-center">
                                <a href="#" className="icons"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icons"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <p className="copyright">© 2022 Vita SportsClub. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        {/* <!-- <div className="col-md-6 col-sm-12"> --> */}
                        <div className="footer_menu footer_nav">
                            <h5>Quick Links</h5>
                            <ul className="menu_link">
                                <li><a href="#">Training</a></li>
                                <li><a href="#">Milon Training</a></li>
                                <li><a href="#">Group Lessions</a></li>
                                <li><a href="#">Vita Bar</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                        {/* <!-- </div> --> */}
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="footer_contact_sec_menu">
                            <h5>Contact Us</h5>
                            <ul className="menu_link">
                                <li><a href="#"><img src={mappin}/>
                                        <div className="inner_link">Vita SportsClub
                                            Natiënlaan 176 8300</div>
                                </a></li>
                                <li><a href="#"><img src={phone}/>
                                        <div className="inner_link">+32 50 700 740</div>
                                    </a></li>
                                <li><a href="#"><img src={mail}/>
                                        <div className="inner_link">info@vitaknokke.be</div>
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="privacydetails">
                    <div className="infodetails">
                        <div className="privacycontent">
                            <h5>This website uses cookies</h5>
                            <p>Welcome to our website! We, and third parties, use cookies on our websites. We use
                                cookies to keep statistics, to save your preferences, but also for marketing purposes
                                (for example, tailoring advertisements). By clicking on 'Set yourself' you can read more
                                about our cookies and adjust your preferences. By clicking 'Accept and continue' you
                                agree to the use of all cookies as described in our cookie statement .</p>
                        </div>
                        <a href="#" className="btn btn_privacy">Accept All Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}