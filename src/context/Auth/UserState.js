import { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
    const host = 'https://inotebookbackend-gizl.onrender.com/';
    const [alert, setAlert] = useState({type : null, msg : null});
    const [userName, setUserName] = useState("");

    const showAlert = (type, msg) =>{
        setAlert({ type, msg });
        setTimeout(() => {
            setAlert({type : null, msg : null})
        }, 2000);
    }

    // Creating a new account
    const userSignUp = async (name, email, password) => {
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();
        if (response.status === 200) {
            localStorage.setItem('auth-token',json.authToken);
            showAlert("success", "Account Created Successfully.");
            return true;
        }
        else{
            localStorage.setItem('auth-token','');
            showAlert("warning", json.error);
            return false;
        }
    }

    // Logging in an account
    const userLogin = async (email, password) => {
        try {
            const response = await fetch(`${host}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const json = await response.json();
            if (response.status === 200) {
                localStorage.setItem('auth-token',json.authToken);
                showAlert("success", "Login Successful.");
                return true;
            }
            else{
                localStorage.setItem('auth-token','');
                showAlert("danger", json.error);
                return false;
            }
        }
        catch(e){
            showAlert("danger", "Something went wrong !!!");
        }
    }

    // Fetching user details
    const fetchUserDetails = async () => {
        const authToken = localStorage.getItem('auth-token');
        if(authToken === '') return;

        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'auth-token': authToken
            }
        });
        const json = await response.json();
        setUserName(json.name);
    }

    // Logout a user
    const userLogout = async() =>{
        localStorage.setItem('auth-token','');
        showAlert("success", "Logout Successful.");
    }

    return (
        <userContext.Provider value={{ alert, userSignUp, userLogin, userLogout, fetchUserDetails, showAlert, userName }}>
            {props.children}
        </userContext.Provider>
    );
}

export default UserState;

