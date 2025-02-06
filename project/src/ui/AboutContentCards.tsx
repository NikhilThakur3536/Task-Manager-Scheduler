type props={
    heading:string,
    content:string
}

export const AboutContentCards:React.FC<props>=({heading,content})=>{
    return(
        <>
            <div className="h-full flex flex-col w-1/4 mx-2">
                <h3 className="font-poppins text-xl font-bold">{heading}</h3>
                <p className=" font-montserrat text sm text-slate-300/80">{content}</p>
            </div>
        </>
    )
}