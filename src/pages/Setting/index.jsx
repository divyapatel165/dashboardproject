import { useNavigate } from "react-router-dom";
import UpdatePassword from "../Setting/UpdatePassword";
import { useState } from "react";
const Setting=()=>{
    const [passup,setPassup]= useState(false);

    const navi = useNavigate();
    const logout=()=>{
        navi("/")
    }
    const ppp=()=>{
        setPassup(<UpdatePassword/>)
    }
    return(
        <>
        <div style={{width:"400px",height:"20px",marginTop:"200px",marginLeft:"500px",backgroundColor:"none",textAlign:"center"}}>
        <br/><br/><br/><br/><br/><br/><br/><button onClick={logout}>Logout</button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button onClick={ppp}>Update password</button>
        {passup}
        </div>
        </>
    )
}
export default Setting;