import React from 'react';
import logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom';
 
export default function Header() {
    return (
        <header className="vita_header pt-2">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <img className="img-fluid" src={logo} alt="" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#offers" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Offers
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="fitness_page.html">Fitness</a></li>
                                        <li><a className="dropdown-item" href="activities_page.html">Activities </a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#classes">Classes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bar">Bar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
