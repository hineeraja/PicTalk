import React from 'react'


const Login=()=>{
	return(
		<div style={{display: "flex", marginTop: "5em", width: "200px", height: "200px"}}>
			<form action=""> 
				<div> 
					<label style={{color: "black", fontSize: "25px"}} htmlFor="email">Email</label>
					<input style={{display: "flex", width: "400px"}} type="text" name="email" id="email"/> 
				</div> 
        <br />
        <br />
				<div> 
					<label style={{color: "black", fontSize: "25px"}} htmlFor="passw">Password</label>
					<input style={{display: "flex", width: "400px"}} type="text" name="passw" id="passw"/> 
				</div>  
        <br />
        <br />
				<button style={{borderRadius: "8px", width: "100px", fontSize: "20px"}} type="submit">Login</button>
        <br />
        <br />
        <button style={{borderRadius: "8px", width: "100px", fontSize: "20px"}} type="submit">Sing In</button>
			</form>
		</div>
	)
}

export default Login    