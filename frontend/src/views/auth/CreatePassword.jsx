import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import apiInstance from "../../utils/axios";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [searchParam] = useSearchParams();
  const otp = searchParam.get("otp");
  const uidb64 = searchParam.get("uidb64");

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      const formdata = new FormData();
      //password trong dau ngoac lay tu password o view phia backend
      formdata.append('password',password);
      formdata.append('otp',otp);
      formdata.append('uidb64',uidb64);
      try {
        await apiInstance.post(`user/password-change/`, formdata).then((res) => {
          console.log(res.data);
          alert("Password changed");
          navigate("/login");
        });
      } catch (error) {
        alert("An error occurred while trying to change the password");
      }
    }
  };

  return (
    <div>
      <h1>Create New Password</h1>
      <form onSubmit={handlePasswordSubmit}>
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Confirm New Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Save new password</button>
      </form>
    </div>
  );
}

export default CreatePassword;
