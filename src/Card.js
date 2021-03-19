import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
             <div className='card'>
                <img alt='pic' src={props.url}></img>
                <h4>{props.name}</h4>
                <p>{props.amount}$</p>
                <Link to={`/transfer/${props.id}`} className='btn'>Transfer 💲</Link>
             </div>
            
        
    )
}

export default Card
