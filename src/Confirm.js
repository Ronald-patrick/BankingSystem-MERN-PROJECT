import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Confirm = (props) => {
    const [check,setCheck]=useState(false);
    const [userReduce,setUserReduce]=useState({
        name: "",
        _id:"",
        amount:""
    })
    const [userGet,setUserGet]=useState({
        name: "",
        _id:"",
        amount:""
    })
    const confirm=()=>{
        
        const amount=Number(props.location.amt);
        const useramt=Number(props.location.User1.amount);
        const incamt=Number(props.location.User2.amount);
        if((useramt-amount)>=0)  
        {
            setCheck(true);
            
        }
        setUserReduce({
            name: props.location.User1.name,
            _id:props.location.User1._id,
            amount:useramt-amount,
            url:props.location.User1.url
        });
        setUserGet({
            name: props.location.User2.name,
            _id:props.location.User2._id,
            amount:incamt+amount,
            url:props.location.User2.url
        });

    };
    const Success= ()=>
    {
       
        setUsers();

        return (<h1>Sucessfully Transferred</h1>);
        
    }
    function setUsers()
    {
        axios.post("http://localhost:8001/users/update",userGet).then(response=>{
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });

        axios.post("http://localhost:8001/users/update",userReduce).then(response=>{
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
        
        
    }
    const Failure=()=>
    {
        return (<h1>Transaction Could not be Completed</h1>)
    }
    useEffect(() => {
        confirm();
    }, [])
    return (
        <div className='cust-list'>
            {check && Success()}
            {!check && Failure()}

            <Link className='btn' to='/'>Go Home</Link>
        </div>
    )
}

export default Confirm;
