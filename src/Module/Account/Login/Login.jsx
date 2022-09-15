// import Login from "../Login/Service/Login.js";
import { height } from "@mui/system";
import { Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import "./Login.scss";
import { useState } from "react";
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
