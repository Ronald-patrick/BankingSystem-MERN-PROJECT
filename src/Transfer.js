import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import './Transfer.css'
import axios from 'axios';

const Transfer = () => {
    let history=useHistory();
    const { id } = useParams();



    const [Users, setUsers] = useState([]);
    const [Curr,setCurr]=useState({});
    const [Next,setNext]=useState({});

    const [dropdown,setDrop]=useState({});
    const [inpval,setInp]=useState("");

    const loadUser = async ()=>{
        const result =await axios.get("http://localhost:8001/users");
         loadCurr(result.data);
        };
    
    const loadCurr = (res)=>{
        
        const pos = res.findIndex(i=>i._id===id);
        const current={
            name:res[pos].name,
            url:res[pos].url,
            amount:res[pos].amount,
            _id:res[pos]._id
        };
    setCurr(current);
    res.splice(pos,1);
    setUsers(res);
    }
    useEffect(() => {
        loadUser();
        
    },[])
    const prevComp=()=>{
        history.push('/customers');
    }

    const updateUser=(e)=>{
        setDrop(e.target.value);
        const pos = Users.findIndex((i)=>
            i._id===e.target.value
        );
        const current={
            name:Users[pos].name,
            url:Users[pos].url,
            amount:Users[pos].amount,
            _id:Users[pos]._id
        };
        setNext(current);
    
    }

    const Nextdetails=()=>{
        if(Next.url)
        {
            return (<img alt="Send to.." src={Next.url}></img>);
        }
        else
        {
            return (<h1>Select Person</h1>)
        }
    };
    const confirmLink={
        pathname: "/confirm", 
        User1: Curr,
        User2: Next,
        amt:inpval
    }

    const updateInp=(e)=>{
        setInp((prev)=>e.target.value);
    }
    return (
        <div className='cust-list'>
            <button onClick={prevComp} className='backbtn'>◀</button>
            <h1>Transfer Money</h1>
            <div className="transfer">
            <div className="card">
                <h1>{Curr.name}</h1>
                <img src={Curr.url} alt='curr user'></img>
                <h1 className='amt'>{Curr.amount}$</h1> 
            </div>
            <h2>➡</h2>
            <div className='card'>
            <select className='dropdown' value={dropdown} onChange={updateUser} >
            {
                Users.map((user)=>(
                    <option key={user._id} value={user._id}>{user.name}</option>
                ))
               
            }
            </select>
                <Nextdetails/>
                <h1 className='amt'>{Next.amount}$</h1>
                <input type='number' min='0' className='inp_value' value={inpval} onChange={updateInp}></input>
            </div>
            </div>
            <Link className='btn' to={confirmLink}>Transfer</Link>
        </div>
    )
}

export default Transfer
