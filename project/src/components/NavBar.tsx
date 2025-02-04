export const NavBar = () => {
    return (
      <div className="z-20 flex justify-center items-center w-full h-[70px] bg-white rounded-xl overflow-hidden">
        <div className=" z-20 w-[20%] bg-rose-700 h-full"></div>
        <div className="z-20 w-[60%] bg-sky-100 h-full"></div>
        <div className="z-20 flex justify-center items-center w-[20%] h-full bg-white">
          <button className="w-[70%] h-[80%] border-[3px] border-emerald-700 rounded-2xl bg-emerald-400"><span className=" flex justify-center items-center text-white text-3xl font-poppins font-[400] font-bold"> Get Started</span></button>
        </div>
      </div>
    );
  };
  