function About(){
    return (
        
        <div 
        id="aboutme"
        className="h-full mx-[20px] md:mx-[100px]">
            <h1 className=" text-5xl lg:text-6xl font-bold mb-[20px] text-white ">ABOUT ME</h1>
            <div className="flex sm:flex-col md:flex-row items-center justify-between gap-[20px]">
                <img src="https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904954/image_bmubcx.jpg" className="hidden lg:block h-[400px] rounded-2xl" alt="" />
            <p className="text-[21px] text-white">
Hi, I’m Uday Dandekar, a frontend developer and engineering student at VIT Pune, specializing in React.js, Tailwind CSS, and modern web development. I enjoy building clean, responsive interfaces and exploring AI and 3D web technologies like Three.js and React Three Fiber.

Currently, I’m working at Herbs Magic and contributing to projects like Gyansetu and EfficienSee, blending tech with purpose. I'm always eager to learn, create, and solve real-world problems through code.            </p>
            </div>
        </div>
    )
}

export default About;