import React from "react";
import { Button } from "@material-ui/core";
import { auth,provider } from "./firebase";
import "./Login.css";



function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/c7/d9/3c/c7d93cf1-a8bc-451a-34cd-0def3d168c6e/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-10.png/400x400.png"
          alt=""
        />
        <h1>Let's Connect</h1>
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
