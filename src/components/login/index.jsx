import '../../assets/styles/index.css';
import Sidebar from '../../components/sidebar/index';
import { useNavigate } from 'react-router-dom';
import Top from '../../components/Top/index';
import { useContext, useState,} from 'react';
import { StateContext } from '../../pages/Utils/Createcontext';
import axios from 'axios';
const Login=({props,props1})=>{
    const {setToken}=useContext(StateContext);
    localStorage.removeItem('infodata');
    localStorage.removeItem('infostate');
    let navi = useNavigate();
    props(false);
    props1(false);
    let [input,setInput]=useState({
        "name":'',
        "password":'' 
    }
    )
    const handleInput =(e)=>{
        let email = e.target.name;
        let value = e.target.value;
        setInput({...input,[email]:value})

    }
    const Loggedin= async()=>{
        // props(<Sidebar/>);
        // props1(<Top/>);
        let data = await axios.get('http://localhost:3000/registration');
        let response = await data.data;
        let info = response.find(e=> e.email === input.email && e.password === input.password)
        if(info){
            setToken(true);
            // localStorage.setItem('infodata',JSON.stringify(info))
            localStorage.setItem('infoimg',info.img)
            localStorage.setItem('infoemail',info.email)
            localStorage.setItem('infoname',info.name)
            localStorage.setItem('idstore',info.id)
            // console.log(info);
        props(<Sidebar/>);
        props1(<Top/>);
        navi(`/dashboard/${info.id}`);
        }
        else{
            navi("/")
        }
    
    }
    return(
        <>
        <section>
 {/* <center> <img src={"https://s-media-cache-ak0.pinimg.com/originals/46/59/6e/46596e8677ef1d7ab151d76ec67cdb38.jpg"} style={{width:"830px",height:"800px",marginTop:"40px",borderRadius:"20px"}} alt='...'></img></center>  */}
      <center><img src={"https://th.bing.com/th/id/OIP.WogtZi-CqyrnfZevgnEKbgHaEo?rs=1&pid=ImgDetMain"} style={{width:"600px",height:"560px",marginTop:"40px",borderRadius:"20px"}} alt='...'></img></center>
           <div id="login" style={{ height:"440px",width:"360px",borderRadius:"20px",marginTop:"-160px",marginLeft:"-445px"}}>
     <h1>Login Form</h1><br></br>
                <input type="text" name="email" placeholder="Enter username" value={input.email} onChange={handleInput}></input><br></br>  <br></br>
                <input type="password" name="password" placeholder="Enter Password" value={input.password}  onChange={handleInput}></input><br></br>
        <br></br> <button onClick={Loggedin}> Log  in </button> <br></br>
           <h2 style={{color:"white"}}>--------or--------</h2>
           <div style={{color:"white",textDecoration:"underline",fontSize:"28px",cursor:"pointer"}} onClick={()=>{navi("/Registration")}}>Signup </div>      
            </div>
       
        </section>
        </>
    )
}
export default Login;