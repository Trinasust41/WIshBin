import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function NewTry(){
  const [input,setInput]=useState({
    name:'',
    email:'',
    password:'',
    amount:''
  })

  
  const handleChange = e=>{
    const {name,value} = e.target;
    setInput({...input,
        [name]:value
      }
    )

  }
  const registerbankSubmit = async e =>{
    e.preventDefault()
    try {
        await axios.post('/register', {...input})
         console.log("jl");

        localStorage.setItem('newtry', true)
         

        window.location.href = "/tran/"+input.name;
        // window.location.href="/newtry2";
    } catch (err) {
      console.log("gi");
        alert(err.response.data.msg)
    }
}



  return (
  <div >
    <h1>This is a Bank registration form</h1>
    <form onSubmit={registerbankSubmit}>
      <div>
        <input onChange={handleChange} name="name" value={input.name} autoComplete="off" className="form-control" placeholder="name">
        </input>
      </div>

      <div >
        <input onChange={handleChange} name="email" value={input.email} autoComplete="off" className="form-control" placeholder="email">
        </input>
        
      </div>

      <div >
        <input onChange={handleChange} name="password" value={input.password} autoComplete="off" className="form-control" placeholder="password">
        </input>
      </div>

      <div >
        <input onChange={handleChange} name="amount" value={input.amount} autoComplete="off" className="form-control" placeholder="amount">
        </input>
      </div>
     <div>

    

      <button className="btn btn-lg btn-info">
        check
      </button>
      <Link to="/">Home</Link>
      </div>
    </form>

  </div>
  )
}
export default NewTry;