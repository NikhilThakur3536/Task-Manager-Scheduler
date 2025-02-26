 'use client';

import { LoginBox } from "@/app/home/components/LoginBox";
import {Poppins} from "next/font/google";

const poppins= Poppins({
  subsets:['latin'],
  weight:['400','500','900'],

})

const Login = () => {
  return (
    <div className=" flex items-center justify-center w-screen h-[100vh] bg-teal-700">
      <div className=" flex relative w-[95%] h-[90%] bg-black rounded-xl">
        <div className="flex flex-col w-[50%]"><LoginBox/></div>
        <div className="w-[50%] h-[98%] my-2 mx-2 rounded-xl bg-emerald-400"></div>
      </div>
      <div>
      </div>
      <div className="z-0 absolute w-72 h-72 bg-emerald-600 rounded-full blur-[96px] opacity-90 left-1/3 transform translate-x-24"></div>
    </div>
  );
};

export default Login;
