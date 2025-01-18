import axios from "axios";
import { useState } from "react";

const UpdatePassword = () => {
    const [input, setInput] = useState("");
    const id = localStorage.getItem('idstore');
    const afid = parseInt(id);


    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/registration");
        const responseData = await response.data;

        const userToUpdate = responseData.find(user => user.id === afid);

        if (userToUpdate) {
            userToUpdate.password = input;

            await axios.put(`http://localhost:3000/registration/${afid}`, userToUpdate)
 .then(() => { alert("UpDated") });
}
else {
    console.log(`User with ID $(id) not found`);

};

    }
return (
    <>

<input type="text" placeholder="Enter password" value={input} onChange={(e)=>setInput(e.target.value)}> </input>
<button onClick={fetchData}>Update password</button>


    </>
)

}
export default UpdatePassword;