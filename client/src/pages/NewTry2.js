import axios from "axios";
import React, { useState } from "react";
import {Link} from 'react-router-dom';

import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import {useEffect} from "react";

function NewTry2(){
  const [input,setInput]=useState({
    transaction_amount:'',
    new_summary:'',
    to_id:'',
   
  })
  const location = useLocation();
  const id1 = location.pathname.split("/")[2];
  console.log(id1)
  const [tran, setTran] = useState({});
  
  const dispatch = useDispatch();
  
  const handleChange = e=>{
    const {name,value} = e.target;
    setInput({...input,
        [name]:value
      }
    )

  }


  // const [account, setAccount] = useState([])
  //   useEffect(() => {
  //       axios.get("/users").then(res => {
  //           console.log(res)
  //           setAccount(res.data.user)

  //       }

  //       ).catch(err => {
  //           console.log(err)
  //       })
  //   }, [])

  
  // const f=account.find(obj=>{
  //   return obj.name===id1
  //   });
  //   console.log(f._id)
  //   const id2=f._id;
  //   console.log(id2)
    
  const registerbankSubmit = async e =>{
    e.preventDefault()
    try {
        await axios.post('/transaction/user/'+id1, {...input})
         console.log("jl");

        localStorage.setItem('newtry', true)
         

        window.location.href ='/';
    } catch (err) {
      console.log("gi");
        alert(err.response.data.msg)
    }
}





// const f=account.find(obj=>{
// return obj.name===id1
// });


  return (
  <div >
    <h1>This is money transaction form</h1>
    <form onSubmit={registerbankSubmit}>
      <div>
        <input onChange={handleChange} name="transaction_amount" value={input.transaction_amount} autoComplete="off" className="form-control" placeholder="transaction_amount">
        </input>
      </div>

      <div >
        <input onChange={handleChange} name="new_summary" value={input.new_summary} autoComplete="off" className="form-control" placeholder="new_summary">
        </input>
        
      </div>

      <div >
        <input onChange={handleChange} name="to_id" value={input.to_id} autoComplete="off" className="form-control" placeholder="to_id">
        </input>
      </div>

      
     <div>

    

      <button className="btn btn-lg btn-info">
      
        Add note
       
      </button>
      <Link to="/">Home</Link>
      </div>
    </form>

  </div>
  )
}
export default NewTry2;