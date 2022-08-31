import { CollectionsOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Getpost() {
    const [account, setAccount] = useState([])
    const location = useLocation();
    const id1 = location.pathname.split("/")[2];
    console.log(id1)
    useEffect(() => {
        axios.get("/users").then(res => {
            console.log(res)
            setAccount(res.data.user)

        }

        ).catch(err => {
            console.log(err)
        })
    }, [])

const f=account.find(obj=>{
    return obj.name===id1
});
console.log(f)
// const r=account.map(i => (
//     i._id==="630bf4e2cbb4593ab2cc2652"?i.name:''
//     ));
//     console.log(r)
// const t=account.map((acc,i)=>{
//     return (<span key={i}>{
//              acc._id==="630bf4e2cbb4593ab2cc2652"?
//              acc.name:""
// }</span>)
// })
// console.log(t)

const navigate = useNavigate();

  const toComponentB=()=>{
navigate('/trial2',{state:{id:1,name:id1,}});
  }


    return (

        <div>
            {f&&(
                <div>
                    <h2>name:{f.name}</h2>
            <h2>id: {f._id}</h2>
          <h2>transaction: {f.transaction.transaction_id}</h2>
          <button><Link to="/trial">
            Add note
           </Link> </button>
          </div>
          
          )
          
          }
          <div> <button onClick={()=>{toComponentB()}} >Component B</button></div>
            
        <hr/>
        <div>
            <ul>
            {
                account.map(acc => (
                    <li
                        key={acc._id}>
                        {acc.name}
                        <button><Link to={`/tran2/${acc._id}`}>
            Add note
           </Link> </button>
           <button><Link to={`/trial/${acc._id}`}>
            check
           </Link> </button>
           
                    </li>
                   
                   
                ))

            }
           
            {/* <li key="630bf4e2cbb4593ab2cc2652">{f.name}</li> */}
            
            </ul>
            <button  className="btn btn-lg btn-info">
            {/* <Link to={`/tran/${f._id}`}> */}
            Add note
          {/* </Link> */}
       

      </button>
      
            </div>
       
    </div>

    
    
  
    )


}
export default Getpost;