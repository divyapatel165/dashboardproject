import {Link,Outlet, useNavigate} from "react-router-dom";
import '../../assets/styles/index.css'; 
import { useEffect } from "react";
import { useContext } from "react";
import {StateContext} from "../../pages/Utils/Createcontext";
function Sidebar(){
    let information = localStorage.getItem('infoimg');
    let aaa = localStorage.getItem('infostate') 
    let {token} = useContext(StateContext)
    let nav = useNavigate()
    useEffect(()=>{
        if(token || aaa){
            console.log("ok")
        }
        else{
            nav("/")
        }
    },[token])
    return(
        <>
        <aside id="sidebar">
        <ul>
            <li><img src={information} width="100px" height="130px" style={{marginTop:"70px"}} alt="..."></img></li>
            <li><Link to="/" style={{display:"none"}}>Login</Link></li>
            <li><Link to="/registration" style={{display:"none"}}>Registration</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            {/* <li><Link to="orders/:id">Dashboard</Link></li> */}
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/setting">Setting</Link></li>
            </ul>
        <Outlet/>
        </aside>
        </>
    );
    
}
export default Sidebar ;