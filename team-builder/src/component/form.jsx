import React from "react";


function Form(props){
    
return(
    <form onSubmit={props.onFSubmit}>
        <label>Name: 
            <input
            onChange={props.onInputChange}
            value={props.teamInfo.fname}
            name="fname"
            type="text"
            />
        </label><br />
        <label>Email:
            <input
            onChange={props.onInputChange}
            value={props.teamInfo.email}
            name="email"
            type="email"
            />
        </label><br />
        <label>Role:
            <input
            onChange={props.onInputChange}
            value={props.teamInfo.role}
            name="role"
            type="text"
            />
        </label><br />
            <button>Submit</button>

          
    </form>
)
}


export default Form;