import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/index.css';
const Login=({props,props1})=>{
 
    let navi=useNavigate();
    let[input,setInput] = useState({
        "name":'',
        "email":'',
        "mobile":'',
        "img":'',
        "password":''
    })
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput({...input,[name]:value})
    }
 const reg=()=>{
    axios.post('http://localhost:3000/registration',input).then(()=>{navi("/")})

 }

    return(

        <>
      
            <section>
            <img src={"https://e0.pxfuel.com/wallpapers/221/690/desktop-wallpaper-blue-sky-blue-colour-background-teahub-io.jpg"} style={{width:"100%",height:"100vh"}} alt='...'></img>
             <center> <div id="login" style={{height:"480px",width:"360px",marginLeft:"-500px",marginTop:"-180px",backgroundColor:"blue"}}>
                    <h1>Registration Form</h1>
                    <input type="text" placeholder="Enter username..." name="name" value={input.name} onChange={handleInput}></input>
                    <input type="text" placeholder="Enter Email Address..." name="email" value={input.email} onChange={handleInput}></input>
                    <input type="text" placeholder="Enter Mobile Number..." name="mobile" value={input.username} onChange={handleInput}></input>
                    <input type="text" placeholder="Enter imgage url..." name="img" value={input.img} onChange={handleInput}></input>
                    <input type="text" placeholder="Enter password..." name="password" value={input.password} onChange={handleInput}></input>
                   <button onClick={reg}>Register</button>
                </div> </center> 
            </section>
       
        </>
    )
}
export default Login;