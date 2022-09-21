import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Input } from "antd";
import { useState } from "react";
import "./Register.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import { auth } from "../Login/Service/firebaseConfig ";
import {signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const Register = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re);
    })
    .catch((err) => {
      console.log(err);
    })
  } 
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }
  return (
    <>
      <div
        className="dorne-welcome-area bg-img bg-overlay"
        style={{ backgroundImage: "url(Assets/img/bg-img/hero-1.jpg)" }}
      >
        <div className="wrap-container">
          <div className="row">
            <div className="col-12" style={{ marginTop: "250px" }}>
              <div id="login-box" style={{backgroundImage:"url(https://images.pexels.com/photos/13367188/pexels-photo-13367188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}>
                <Collapse in={open}>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    Register Success !
                  </Alert>
                </Collapse>
                <div className="left">
                  <h1 style={{color:"#fff"}}>Sign up</h1>
                  <Input type="text" name="username" placeholder="Username" />
                  <Input type="text" name="email" placeholder="E-mail" />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <Input
                    type="password"
                    name="password2"
                    placeholder="Retype password"
                  />
                  {/* <input
                    type="submit"
                    name="signup_submit"
                    defaultValue="Sign me up"
                  /> */}
                  <Button
                    onClick={handleRegister}
                    style={{
                      backgroundColor: "#7643ea",
                      borderRadius: "999px",
                      color: "#fff",
                      height: "35px",
                    }}
                  >
                    Submit
                  </Button>
                </div>
                <div className="right" >
                  <span className="loginwith" >
                    Sign in with
                    <br />
                    social network
                  </span>
                  <div style={{marginTop:"65px"}}>
                  <Button onClick={signInWithFacebook} className="social-signin facebook">
                     Log in with Facebook 
                  </Button>
                  <Button onClick={signInWithGoogle} className="social-signin google">
                    Log in with Google+
                  </Button>
                  </div>
                </div>
                <div className="or" style={{ marginTop: "65px" }}>
                  OR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
