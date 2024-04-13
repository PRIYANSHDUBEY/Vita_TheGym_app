import React from 'react';

export default function Card(props) {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="about_img_card">
                    <img src={props.img} alt="" className="img-fluid" />
                    <div className="about_content">
                        <h5>{props.title}</h5>
                        <p>{props.description}</p>
                        <a href="#" className="btn-link">{props.linkName}<i className="fa-solid fa-angles-right ms-1"></i></a>
                    </div>
                </div>
            </div>
    )
}
