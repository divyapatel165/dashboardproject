import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
const Customers=(props,props1)=>{
    let navi = useNavigate();
    let [input,setInput]=useState({
        "name":'',
        "email":'',
        "money":'',
        "status":'',
        "date":'',
        "month":''
    }
    )
    useEffect(()=>{},[input])

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput({...input,[name]:value})
    }
    const reg=()=>{
        axios.post('http://localhost:3000/Customer',input).then(()=>{alert("Submitted")}).then(()=>{setInput({"name":'',
       "email":'',
        "money":'',
        "status":'',
        "date":'',
       " month":''
    })}).then(()=>{navi("/orders")})
     }
    return(
        <>
         <center>
            <section>
            <img src={"https://e0.pxfuel.com/wallpapers/221/690/desktop-wallpaper-blue-sky-blue-colour-background-teahub-io.jpg"} style={{width:"100%",height:"100vh"}} alt='...'></img>
                <div id="login" style={{height:"450px",width:"340px",marginTop:"-100px",marginLeft:"-400px"}} >
                    <h1>Add Form</h1>
                    <input type="text" placeholder="Enter username..." name="name" value={input.name} onChange={handleInput}></input><br/>
                    <input type="text" placeholder="Enter Email Address..." name="email" value={input.email} onChange={handleInput}></input><br/>
                    <input type="text" placeholder="Enter Money..." name="money" value={input.money} onChange={handleInput}></input><br/><br/>
                    <select style={{width:"314px",height:"30px",backgroundColor:"unset",border:"none",outline:"none",borderBottom:"2px solid white"}} name="status" onChange={handleInput}>
                        <option > select a product status</option>
                        <option value={"booked"}>Booked</option>
                        <option value={"delivered"}>Delivered</option>
                        <option value={"on delivery"}></option>
                    </select><br/><br/>
                    <input style={{width:"314px",height:"30px",backgroundColor:"unset",outline:"none",border:"none",borderBottom:"1px solid white"}} type="Datetime-local" placeholder="Enter Date..." name="date" value={input.date} onChange={handleInput}></input><br/><br/>
                    <input style={{width:"314px",height:"30px",backgroundColor:"unset",outline:"none",border:"none",borderBottom:"1px solid white"}} type="month" placeholder="Enter month..." name="month" value={input.month} onChange={handleInput}></input><br/>
                   <button onClick={reg}>Submit</button>
                   {/* npm install react-redux /npm */}
                </div>
            </section>
        </center>


        </>
    )
}
export default Customers;