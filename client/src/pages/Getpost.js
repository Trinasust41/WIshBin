import { CollectionsOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function Getpost() {
    const [account, setAccount] = useState([])
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
    return obj._id==="630bf82bcbb4593ab2cc2660"
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
let navigate = useNavigate(); 
const routeChange = () =>{ 
    let path = `/newpost`; 
    navigate(path);
  }


    return (

        <div>
            {f&&(
                <div>
            <h2>id: {f._id}</h2>
          <h2>transaction: {f.transaction.transaction_id}</h2>
          </div>)}
            
        <hr/>
        <div>
            <ul>
            {
                account.map(acc => (
                    <li
                        key={acc._id}>
                        {acc.name}
                    </li>
                   
                ))

            }
            {/* <li key="630bf4e2cbb4593ab2cc2652">{f.name}</li> */}
            
            </ul>
            <button onClick={routeChange} className="btn btn-lg btn-info">
        Add note
      </button>
      
            </div>
       
    </div>

    
    
  
    )


}
export default Getpost;