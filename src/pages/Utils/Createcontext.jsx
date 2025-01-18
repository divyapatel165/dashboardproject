import React,{createContext,useState,useEffect} from "react";
const StateContext = createContext();
const StateProvider = ({children})=>{
    const [token,setToken]= useState(false);
    useEffect(()=>{
        console.log("hioi")
        console.log(token)
        if(token === true){
            localStorage.setItem('infostate',token)
        }
    },[token])
    return(
        <>
        <StateContext.Provider value={{token,setToken}}>
            {children}
        </StateContext.Provider>
        </>
    )
}
export {StateContext,StateProvider};