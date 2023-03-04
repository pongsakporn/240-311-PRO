import React,{useEffect} from "react";

function Input( props ) {

const handleInputUserName = (event)=>{
    props.setUsername(event.target.value)
}

return(
    <div className="Input">
        <div className="Input__header">Login</div>
        <input className="Input__username" type="text" onChange={(e)=>handleInputUserName(e)}/>
        <input className="Input__password" type="text" />
        <input type="submit" value="Login"></input>
    </div>

)
}

export default Input;