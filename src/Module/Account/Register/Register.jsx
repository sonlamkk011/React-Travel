import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "antd";
import { useState } from "react";
import "./Register.scss";
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
                  <input type="text" name="username" placeholder="Username" />
                  <input type="text" name="email" placeholder="E-mail" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <input
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
                <div className="right" style={{ marginTop: "65px" }}>
                  <span className="loginwith">
                    Sign in with
                    <br />
                    social network
                  </span>
                  <button className="social-signin facebook">
                    Log in with facebook
                  </button>
                  {/* <button className="social-signin twitter">
                    Log in with Twitter
                  </button> */}
                  <button className="social-signin google">
                    Log in with Google+
                  </button>
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
