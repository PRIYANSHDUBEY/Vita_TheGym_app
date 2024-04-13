import React from 'react'

export default function Cardupdates(props) {
    return (
        <div className='card_tab'>
            <h5>{props.head}</h5>
            <p>{props.page}</p>
            <a href="#" className='card_link'>{props.link}</a>
        </div>
    )
}
   