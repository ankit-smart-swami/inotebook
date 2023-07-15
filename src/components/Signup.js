import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../context/Auth/userContext";

const Signup = () => {
  const { userSignUp } = useContext(userContext);
  const [userdata, setUserdata] = useState({ name: "", email: "", password: "", confirmPass: "" });
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const signup = await userSignUp(userdata.name, userdata.email, userdata.password);
    if (signup === true) {
      navigate("/");
    }
  }

  const onChange = (event) => {
    setUserdata({ ...userdata, [event.target.name]: event.target.value })
  }

  return (
    <div className="container">
      <h3 className="m-2">Signup</h3>
      <form className="container mt-3" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={userdata.name || ""} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={userdata.email || ""} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={userdata.password || ""} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword2" name="confirmPass" value={userdata.confirmPass || ""} onChange={onChange} />
          <div className="mt-1" style={{ "color": "red" }} hidden={userdata.confirmPass === "" || userdata.confirmPass === userdata.password}>
            <i className="fa-solid fa-circle-xmark fa-shake"></i> Password dosent match
          </div>
        </div>
        <button type="submit" style={{ 'width': '100%' }} className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}

export default Signup;