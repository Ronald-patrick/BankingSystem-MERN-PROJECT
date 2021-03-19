import React from 'react'
import {Link} from 'react-router-dom';
const MainContent = () => {
    return (
        <div className="main">
            <img alt="Customer pic" src="customer.svg"></img>
            <div className="info">
                <h1>Send your Money Easily from anywhere</h1>
                <h3>We are here for a service of trust🤝</h3>
                <Link className='btn' to="/customers">Our Customers👉</Link>
            </div>
        </div>
    )
}

export default MainContent;
