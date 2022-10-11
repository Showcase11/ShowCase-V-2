import React, { useState } from "react";
import { Layout } from "../components";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img6 from "../assets/img6.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const loaderVariants = {
    animationOne: {
      y: [0, 20],
      scale: [0.9, 0.8],
      transition: {
        scale: {
          yoyo: Infinity,
          duration: 2.95,
          delay: 1,
        },
        y: {
          yoyo: Infinity,
          duration: 2.25,
          ease: "easeOut",
        },
      },
    },
  };
  const loaderVariantsRev = {
    animationOne: {
      y: [0, -20],
      scale: [0.9, 0.8],
      transition: {
        scale: {
          yoyo: Infinity,
          duration: 2.95,
          delay: 1,
        },
        y: {
          yoyo: Infinity,
          duration: 2.25,
          ease: "easeOut",
        },
      },
    },
  };
  const [formData, setFormData] = useState(initialState);
  const [isLogin, setIsLogin] = useState(true);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-tl h-full flex items-center justify-center from-sky-200 to-sky-100 md:px-14 px-4 py-8">
        <div className="md:flex flex-row my-8 h-auto md:w-2/3 w-full shadow-white shadow ">
          <div className="basis-1/2 bg-gradient-to-tl md:px-14 px-5 py-5 from-[#5151E5] text-white to-[#72EDF2]">
            <h1 className="text-center md:text-xl text-2xl font-bold my-2 font-sans mt-8">
              {isLogin ? "Login" : "Create Account"}
            </h1>
            <h3 className="text-center font-roboto text-lg md:text-md">
              Please Login using account details bellow
            </h3>
            <form
              onSubmit={handleOnSubmit}
              className="flex gap-2 mt-12 flex-col"
            >
              <input
                type="email"
                placeholder="Enter Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className=" border-[1px] rounded-lg p-2 placeholder-white outline-none text-white bg-transparent w-full  md:text-lg border-white "
              />
              <input
                type="password"
                placeholder="Enter Password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className=" border-[1px] rounded-lg p-2 placeholder-white outline-none text-white bg-transparent w-full  md:text-lg border-white"
              />
              <p className="text-white cursor-pointer text-sm mt-5">
                Forgot your password ?
              </p>
              <div className="w-full flex justify-end items-center">
                <button className="font-meduim rounded-full mt-5 py-2 justify-self-end  w-[160px] bg-white text-black">
                  {isLogin ? "SignIn" : "Signup"}
                </button>
              </div>
            </form>
            <div className="divider devide-bg-white divide-white mt-5">OR</div>
            <button className="btn w-full bg-white mt-4 text-black capitalize">
              <FcGoogle className="text-xl mr-2 " /> Register with Google
            </button>
            <p
              className="text-white cursor-pointer text-md my-5 text-center "
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin
                ? " Don't have an account?"
                : " already have an account?"}
              <span className="font-bold">
                {isLogin ? " Create Account" : " Login"}
              </span>
            </p>
          </div>
          <div className="basis-1/2 hidden  md:block  relative bg-white">
            <div className="relative h-full">
              <div className="relative  ">
                <motion.img
                  src={img2}
                  alt="image1"
                  variants={loaderVariantsRev}
                  animate="animationOne"
                  className="h-[270px] w-[280px]  object-contain absolute top-0 right-0 overflow-hidden"
                />
                <motion.img
                  src={img1}
                  alt="image1"
                  variants={loaderVariants}
                  animate="animationOne"
                  className="h-[340px] w-[360px] object-contain overflow-hidden absolute top-0 left-0"
                />
              </div>
              <motion.img
                src={img5}
                alt="image1"
                variants={loaderVariants}
                animate="animationOne"
                className="h-[204px] w-[204px] object-contain  overflow-hidden absolute top-1/3 left-2/4"
              />
              <motion.img
                src={img4}
                alt="image1"
                variants={loaderVariantsRev}
                animate="animationOne"
                className="h-[304px] w-[304px] object-contain overflow-hidden absolute top-2/4 left-0"
              />
              <motion.img
                src={img6}
                alt="image1"
                variants={loaderVariantsRev}
                animate="animationOne"
                className="h-[224px] w-[224px] object-contain overflow-hidden absolute top-2/3 left-2/4"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
