import { InputFields } from "@/app/home/ui/InputFields"

type Data={
    label:string,
    placeholder:string,
    type:string
}

export const LoginBox=()=>{
    const data:Data[]=[
        {label:"Email",placeholder:'Enter Your Email',type:'email'},
        {label:"Password",placeholder:'Enter Your Password',type:'password'},
    ]
    return(
        
        <div className="z-10 flex flex-col items-center justify-center w-full h-full">
            
            <div className="w-[70%]">
            <div className="font-poppins italic text-4xl font-bold text-white mb-12"> Please Enter the Details...</div>
                {data.map((data,index)=>(<InputFields key={index} placeholder={data.placeholder} label={data.label} type={data.type} />))}
                <button className="w-[90%] h-[50px] bg-emerald-600 rounded-xl mx-4 mt-6"><span className="text-poppins text-white text-2xl font-bold">Log In</span></button>
            </div>           
        </div>
    )
}