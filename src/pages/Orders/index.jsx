import axios from "axios";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Orders=()=> {
  const navi = useNavigate();
  const [customersData,setCustomersData] = useState([])
  const [afterdel,setAfterdel] = useState(false);

  useEffect(()=>{

  },[afterdel])

    useEffect(()=>{
      const showdata = async()=>{
           const data = await axios.get('http://localhost:3000/Customer/');
           const response = await data.data;
           setCustomersData(response);

      }
      showdata()
    },[])
  const del = (arg)=>{
    alert(arg)
    axios.delete(`http://localhost:3000/Customer/${arg}`).then(()=>{setAfterdel(true)});
    const showdata = async()=>{
      const data = await axios.get('http://localhost:3000/Customer');
      const response = await data.data;
      setCustomersData(response);

 }
 showdata()

  }
    return (
      <>
      <section style={{overflowY:"scroll",height:"700px"}}>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Latest Orders</h1><br/>
    <button onClick={()=>{navi("/customers")}}  style={{position:"fixed",float:"right",width:"170px",marginLeft:"1300px",height:"30px",boxShadow:"1px 0px 5px 0px #1f889f",marginRight:"120px",borderRadius:"10px",border:"2px solid #1f889f"}}>Add Orders</button><br></br><br></br><br></br><br></br>
         <table style={{marginLeft:"230px",border:"2px solid #1f889f"}} align="center"  cellPadding={"20px"} border={"1px"}>
              {customersData.map((e)=>{
                return <tr style={{display:"flex"}} key={e.id} >
                    <td style={{width:"170px",border:"1px solid #1f889f"}}>{e.name}</td>
                    <td style={{width:"170px",border:"1px solid #1f889f"}}>{e.email}</td>
                    <td style={{width:"120px",border:"1px solid #1f889f"}}>{e.money}</td>
                    <td style={{width:"120px",border:"1px solid #1f889f"}}>{e.status}</td>
                    <td style={{width:"120px",border:"1px solid #1f889f"}}>{e.date}</td>
                    <td  style={{width:"20px",border:"1px solid #1f889f"}} ><Link style={{color:"green"}} to={`/orders/${e.id}`}><MdOutlineSecurityUpdate /> </Link></td>
                    <td style={{color:"blue",border:"1px solid #1f889f"}} onClick={()=>{del(e.id)}}><MdDelete/></td>
                  </tr>
              })}
                </table>
                </section>

      </>
    );
  }

  export default Orders;