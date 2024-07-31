import React from "react";
import { Box,InputBase,Button,styled } from "@mui/material"
import { useState } from "react";
import { getWeather } from "../Services/Api";
const Container =styled(Box)(
 {   background :'#000000',padding:'10px'
})

const Input=styled(InputBase)({
 marginRight:'5px',
fontFamily:"revert",
})


const Form =(props)=>{

const getweatherinfo=async()=>{
let response=await getWeather(data.city); 
// const[setresult]=props;
    props.setresult(response);
 
}

    const[data,setdata]=useState({city:''});
    
    const handlechange=(event)=>{
        setdata({...data, [event.target.name]:event.target.value}) 
    }
    return (
        <Container className="kalu1">
            <Input style={{borderRadius:"3px",color:'white',background:"#d48713",borderColor:"black"}} placeholder="Enter City Name" onChange={handlechange} name='city'></Input>
            <Input  style={{borderRadius:"3px",color:'white',background:"#d48713",borderColor:"black"}} placeholder="Enter Country Name" ></Input>
            <Button   variant="contained"  onClick={getweatherinfo}>GeT wEaThEr</Button>
        </Container>
    )
}   
export default Form