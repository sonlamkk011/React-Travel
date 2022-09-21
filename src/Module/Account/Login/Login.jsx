// import Login from "../Login/Service/Login.js";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Button, Checkbox } from "antd";
import {
  FacebookAuthProvider, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.scss";
import { auth } from "./Service/firebaseConfig ";

const Login = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
    setOpen(true);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <>
        <div
          className="dorne-welcome-area bg-img bg-overlay"
          style={{ backgroundImage: "url(Assets/img/bg-img/hero-1.jpg)" }}
        >
          <div className="wrap-container">
            <div className="row">
              <div className="col-12" style={{ marginTop: "250px" }}>
                <div
                  id="login-box"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                  }}
                >
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
                      Login Success !
                    </Alert>
                  </Collapse>
                  <div className="left">
                    <h1 style={{ color: "#fff" }}>Sign in</h1>
                    <input type="text" name="username" placeholder="Username" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <div className="form-check mb-0">
                      <Checkbox
                        onChange={onChange}
                        style={{ marginBottom: "10px", color: "#fff" }}
                      >
                        Remember me
                      </Checkbox>
                    </div>

                    <Button
                      onClick={handleLogin}
                      style={{
                        backgroundColor: "#7643ea",
                        borderRadius: "999px",
                        color: "#fff",
                        height: "35px",
                      }}
                    >
                      Login
                    </Button>
                    <Link to="/register">
                      <Button
                        style={{
                          backgroundColor: "#7643ea",
                          borderRadius: "999px",
                          color: "#fff",
                          height: "35px",
                          marginLeft: "60px",
                        }}
                      >
                        Register
                      </Button>
                    </Link>
                  </div>
                  <div className="right">
                    <span className="loginwith">
                      Sign in with
                      <br />
                      social network
                    </span>
                    <Button
                      onClick={signInWithFacebook}
                      className="social-signin facebook"
                    >
                      Log in with Facebook
                    </Button>
                    <Button
                      onClick={signInWithGoogle}
                      className="social-signin google"
                    >
                      Log in with Google+
                    </Button>
                  </div>
                  <div className="or">OR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
{
  /* <div className="form-check mb-0">
<Checkbox onChange={onChange} style={{color:"#fff"}}>
  Remember me
</Checkbox>
</div> */
}
export default Login;
