import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          "http://localhost:5000/api/v1/user/patient/register",
          {
            firstName,
            lastName,
            email,
            phone,
            nic,
            dob,
            gender,
            password,
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

          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
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
      <div className="container form-component register-form">
        <h2>Create Account</h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#1e375a",
            lineHeight: "1.7",
          }}
        >
          Register to access the Hospital Management System and
          manage appointments, patient records, and healthcare
          services easily.
        </p>

        <form onSubmit={handleRegistration}>
          <div>
            <input
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="number"
              placeholder="Enter Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Enter NIC Number"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />

            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>

              <option value="Male">Male</option>

              <option value="Female">Female</option>

              <option value="Other">Other</option>
            </select>

            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div
            style={{
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>
              Already have an account?
            </p>

            <Link
              to={"/signin"}
              style={{
                textDecoration: "none",
                color: "#0077ff",
                fontWeight: "600",
              }}
            >
              Login Now
            </Link>
          </div>

          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;