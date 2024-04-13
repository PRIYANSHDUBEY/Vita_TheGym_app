import React from 'react';


export default function Card2(props) {
    return (
                <div className="customer_items">
                    <img src={props.img} alt="icons-quote"   />
                <p>{props.description} </p>
                <h5>{props.title}</h5>
                </div>
        
    )
}
