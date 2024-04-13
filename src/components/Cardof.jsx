import React from 'react'

export default function Cardof(props) {
    return (    
            <div className="card">
                        <img src={props.img} alt=" " className="card-img-top" />
                        <div className="card-body bg-light">
                        <a href="#">{props.href} </a>
                    </div>
                </div>
  
    )
}
