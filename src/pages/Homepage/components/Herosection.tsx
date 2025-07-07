function HeroSection() {
    return (
        <div className="relative hidden lg:flex justify-between items-center px-16 py-2 h-[41px] rounded-3xl mx-[60px] mt-[20px] relative z-10 font-normal text-[16px] font-bold text-black bg-white" style={{backgroundImage: `url("/backgi.jpg")`}}>
            {/* <video src="public/backg2.mp4" loop muted autoPlay playsInline className="absolute w-full h-full object-cover left-0 top-0 rounded-3xl z-[-2] "></video>
            <div className="absolute inset-0 bg-black/20 rounded-3xl z-[-1]"></div> */}

            <p onClick={() => document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" })} className="hidden sm:block font-bold">
                ABOUT ME
            </p>
            <p onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })} className="hidden md:block font-bold">
                SKILLS
            </p>
            <p onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="hidden md:block font-bold">
                PROJECTS
            </p>
            {/* <div className="flex items-center justify-center h-[71px] w-[71px] rounded-[211px] bg-white">
                <video src="public/v2.mp4" loop autoPlay muted className="object-cover h-[71px] w-[71px] rounded-[211px] border-4"></video>
            </div> */}
            <p onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="hidden md:block font-bold">
                EXPERIENCE
            </p>
            <p onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })} className="hidden md:block font-bold">
                CONTACTS
            </p>
            <p className="hidden md:block font-bold">
                <a href="https://drive.google.com/file/d/11C7RqmNTgDk437dxdqj9sZGqGxDPJo1U/view?usp=sharing" target="_blank">RESUME</a>
            </p>
        </div>
    );
}

export default HeroSection;
