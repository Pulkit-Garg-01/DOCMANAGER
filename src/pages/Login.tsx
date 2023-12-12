import { Container } from "@mui/material";
import React from "react";
// import RedirectButton from './RedirectButton';
import Button from "@mui/material/Button";

function Login() {
  const handleButtonClick = () => {
    window.location.href = "http://localhost:8000/auth/authorize"; 
  };

  const containerStyle = {
    backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
    // backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    // backgroundPosition: 'center',
    minHeight: "100vh",
    width: "60rem",
    // alignItems: 'center',
    // justifyContent: 'center',
  };
  const Style = {
    display: "flex",
  };

  const buttonStyle = {
    padding: "10px 20px", // Padding
    fontSize: "16px", // Font size
    borderRadius: "5px", // Border radius
    cursor: "pointer",
    // heigh         // Cursor style
    // Add more styles as needed
  };

  return (
    <>
      <div style={Style}>
        <div style={containerStyle}></div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p>DOCMANAGER</p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
          >
            Login with Channel-i
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
