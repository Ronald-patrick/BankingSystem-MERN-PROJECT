import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Customers.css'
import Card from './Card'
import { useHistory } from 'react-router-dom'

const Customers = () => {
    let history=useHistory();
    const [users,setUser]= useState([]);
    const loadUsers= async()=>{
        const result =await axios.get("http://localhost:8001/users");
        setUser(result.data);
    }
    useEffect(()=>{
        loadUsers();
    },[]);
    const prevComp=()=>{
        history.push('/');
    }
    return (
        <div className='cust-list'>
        <button onClick={prevComp} className='backbtn'>◀</button>
        <h1>Our Customers</h1>
        <div className="card-cont">
        {
            users.map(
                (user)=>(
                    <Card key={user._id} id={user._id} name={user.name} url={user.url} amount={user.amount}/>
                    )
                    )
        }
        </div>
            
        </div>
    )
}

export default Customers
