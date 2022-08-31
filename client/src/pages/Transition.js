import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

function Transition() {
    //   const [input,setInput]=useState({
    //     transaction_amount:'',
    //     new_summary:'',
    //     to_id:'',

    //   })
    const location = useLocation();
    const id1 = location.pathname.split("/")[2];
    const id3=location.state.name;
    console.log(id1)
    //   const [tran, setTran] = useState({});

    //   const dispatch = useDispatch();

    //   const handleChange = e=>{
    //     const {name,value} = e.target;
    //     setInput({...input,
    //         [name]:value
    //       }
    //     )

    //   }


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
    console.log(account)

    const f=account.find(obj=>{
    return obj.name==="ayeshaAfroze"
    });;
    console.log(f);
    
const navigate = useNavigate();

const toComponentB=()=>{
navigate('/trial2',{state:{id:2,name:id1,val:f._id}});
}

   
    // const id2 = f._id;
    // console.log(id2)

    //   const registerbankSubmit = async e =>{
    //     e.preventDefault()
    //     try {
    //         await axios.post('/transaction/user/'+id2, {...input})
    //          console.log("jl");

    //         localStorage.setItem('newtry', true)


    //         window.location.href = "/order";
    //     } catch (err) {
    //       console.log("gi");
    //         alert(err.response.data.msg)
    //     }
    // }





    // const f=account.find(obj=>{
    // return obj.name===id1
    // });
    // console.log(f)
//     let navigate = useNavigate(); 
// const routeChange = () =>{ 
//     let path = "/tran2/"+id2;
//     navigate(path);
//   }

    return (
        <div>
            

                
          <h1>{location.state.name}</h1>
          <div> <button onClick={()=>{toComponentB()}} >Component B</button></div>
        <h1>{id3}</h1>
        
        </div>

    )
}
export default Transition;