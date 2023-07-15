import { useState, useContext } from "react";
import userContext from "../context/Auth/userContext";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const [cridentials, setCridentials] = useState({email:"", password:""});
  const { userLogin } = useContext(userContext);
  const navigate = useNavigate ();

  const onSubmit = async (event) =>{
    event.preventDefault();
    const login = await userLogin(cridentials.email, cridentials.password);
    if(login === true){
      navigate("/");
    }
  }

  return (
    <div className="container">
      <h3 className="m-2">Login</h3>
      <form className="container mt-3" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={cridentials.email || ""} onChange={(event) => {setCridentials({...cridentials, email : event.target.value})}}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={cridentials.password || ""} onChange={(event) => {setCridentials({...cridentials, password : event.target.value})}}/>
        </div>
        <button type="submit" style={{'width':'100%'}} className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  )
}

export default Login;