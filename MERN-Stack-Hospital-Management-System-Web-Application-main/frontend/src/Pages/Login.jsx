import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          "http://localhost:5000/api/v1/user/login",
          {
            email,
            password,
            confirmPassword,
            role: "Patient",
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);

          setIsAuthenticated(true);

          navigateTo("/");

          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="container form-component login-form">
        <h2>Welcome Back</h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#1e375a",
            lineHeight: "1.7",
          }}
        >
          Login to access the Hospital Management System and manage
          appointments, patient records, and healthcare services easily.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div
            style={{
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>
              Don't have an account?
            </p>

            <Link
              to={"/register"}
              style={{
                textDecoration: "none",
                color: "#0077ff",
                fontWeight: "600",
              }}
            >
              Register Now
            </Link>
          </div>

          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;