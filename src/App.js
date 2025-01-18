// json-server --watch reg.json

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard/index.jsx';
import Products from "./pages/Products/index.jsx";
import Orders from "./pages/Orders/index.jsx";
import Customers from "./pages/Customers/index.jsx";
import Analytics from "./pages/Analytics/index.jsx";
import Reviews from "./pages/Reviews/index.jsx";
import Setting from "./pages/Setting/index.jsx";
import Sidebar from "./components/sidebar/index.jsx";
import Login from "./components/login/index.jsx";
import Registration from "./components/Registration/index.jsx";
import { useState } from "react";
import Top from "./components/Top/index.jsx"
import UpdateForm from "./pages/Orders/UpdateForm.jsx";
function App() {
  const [side,setSide] = useState(<Sidebar/>);
  const [top,setTop] = useState(<Top/>);
  let a = {
    marginLeft: "10px"
  }
  
  return (
    <>
      <BrowserRouter>
        {side}
        {top}
        <Routes>
          <Route path="/" element={<Login props={setSide} props1={setTop}/>}></Route>
          <Route path='/dashboard' element={<Dashboard style={a} />}></Route>
          <Route path="/registration" element={<Registration props={setSide} props1={setTop}/>}></Route>
          <Route path='/products' element={<Products style={a} />}></Route>
          <Route path='/orders' element={<Orders style={a} />}></Route>
          <Route path='/orders/:id' element={<UpdateForm style={a} />}></Route>
          <Route path='/customers' element={<Customers style={a} />}></Route>
          <Route path='/analytics' element={<Analytics style={a} />}></Route>
          <Route path='/reviews' element={<Reviews style={a} />}></Route>
          <Route path='/setting' element={<Setting style={a} />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;