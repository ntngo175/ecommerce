import React, { useState, useEffect } from "react";
import { register } from "../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await register(
      fullname,
      email,
      mobile,
      password,
      password2
    );
    if (error) {
      alert(JSON.stringify(error));
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="FullName"
          name=""
          id=""
          onChange={(e) => setFullname(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name=""
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Mobile Number"
          name=""
          id="number"
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name=""
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          name=""
          id="password2"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
