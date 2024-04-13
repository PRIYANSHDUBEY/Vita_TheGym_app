import React from 'react'

export default function Cardclasses(props) {
    return (

        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="card_tab">
                <h5>{props.title}</h5>
                <a href="#" className="card_link">{props.linkName} <i
                    className="fa-solid  fa-arrow-right"></i></a>
            </div>
        </div>
    )
}
