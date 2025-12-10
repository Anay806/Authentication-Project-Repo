import React, { useContext, useState } from "react";
import cross from "../images/cross_icon.png";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginpopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(CartContext);
  const [currstate, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowLogin(false);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currstate === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const res = await axios.post(newUrl, data);

    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setShowLogin(false);
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="position-absolute z-index-1 w-full h-full bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] via-[#fdbb2d] to-[#00c9ff] bg-opacity-50  py-30   grid"
    >
      <form
        onSubmit={onLogin}
        className="place-self-center rounded-md w-[23vw,330px] color-[#808080] bg-white flex flex-col gap-[25px] p-[25px 30px]  px-6 py-4 shadow-lg"
      >
        <div className="flex justify-between py-1 px-6 items-center color-black">
          <h2 className="font-bold text-xl">{currstate}</h2>
          <img
            onClick={() => navigate(-1)}
            src={cross}
            alt="close"
            className="w-[16px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-4 px-4">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              className="outline-non  rounded-md border b-1-[#c9c9c9] p-[10px] border-radius-[4px] "
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            className="rounded-md px-3 py-1 outline-non"
            required
          />

          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            className="rounded-md px-3 py-1 outline-non"
            required
          />
        </div>
        <button
          type="submit"
          className="border-none py-2 rounded-md mx-25  bg-[#ff6700] hover:bg-[#ff5520] text-white font-bold  text-[17px] cursor-pointer"
        >
          {currstate === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-3 mt-[-15px]">
          <input type="checkbox" className="mt-[5px]" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currstate === "Login" ? (
          <p className=" font-weight-500 cursor-pointer">
            Create A new account?{" "}
            <span
              className="font-bold text-[#FF4220] font-weight-500 cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="color-darkcyan font-weight-500 cursor-pointer">
            Already have an account{" "}
            <span
              className="text-[#FF4220] font-bold font-weight-500 cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
