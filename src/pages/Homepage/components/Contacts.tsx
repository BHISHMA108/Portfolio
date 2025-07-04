import { useState } from "react";

function Contacts(){
    const [Heart , setHeart] = useState(true);

    const handleHeartHover = ()=>{
        setHeart(true);
    }

    return(
        <div 
        id="contacts"
        className="flex flex-col justify-between py-[50px] w-full sm:h-[412px]  md:h-[391px]  bg-cover " style={{ backgroundImage: `url('/footer4.jpg')`, objectFit:"cover" }}>
            <h1 className="text-6xl font-bold mb-[20px] text-black relative mx-[100px]">
                Contacts
            </h1>
            <div className="flex flex-col px-[100px] pt-[20px] bg--300 rounded-lg py-4 gap-2">
            <p className="text-blue-900"><span className="font-bold gap-2 text-black">Email:</span> <a href="uday.dandekar.dev@gmail.com" target="_blank">uday.dandekar.dev@gmail.com</a></p>
            <p className="text-blue-900"><span className="font-bold text-black">Github: </span> <a href="https://github.com/BHISHMA108" target="_blank">https://github.com/BHISHMA108</a></p>
            <p className="text-blue-900"><span className="font-bold text-black">LinkedIn: </span> <a href="https://www.linkedin.com/in/uday-dandekar/" target="_blank">https://www.linkedin.com/in/uday-dandekar/</a></p>
            <p className="text-blue-900"><span className="font-bold text-black">Portfolio: </span> <a href="https://udaydandekar.github.io/Portfolio/" target="_blank">https://udaydandekar.github.io/Portfolio/</a></p>
            </div>
            
            
            <div className="flex justify-center font-bold text-2xl" onMouseEnter={()=>setHeart(false)} onMouseLeave={()=>setHeart(true)}><p>Made with <button>{Heart ? "💗" : "💕"}</button> and Curiousity by Uday</p></div>
        </div>
    )
}

export default Contacts;