function Experience(){
    return(
        <div 
        id="experience"
        className="flex flex-col w-full  my-[120px] relative gap-5 ">
            <h1 className="text-5xl lg:text-6xl font-bold mb-[20px] text-white relative mx-[20px] md:mx-[100px]">
                Experience
            </h1>
            <div className="flex flex-col justify-center py-5 w-full h-[33%] bg-none hover:bg-[#006EBB] transition duration-500 delay-21 rounded pr-[20px]">
                <h2 className="text-3xl font-bold text-white relative mx-[20px] md:mx-[100px]">
                    Frontend Developer Intern At Herbs Magic                
                </h2>
                <p className="text-white relative mx-[20px] md:mx-[100px]">
                    <span className="font-bold">Location:</span> Pune, Maharashtra, India (Remote) <br />
                    <span className="font-bold">Duration</span> March 2025 – Present (4 mos)
                </p><br /> 
                <p className="text-white relative mx-[20px] md:mx-[100px]">
                • Built the responsive frontend of the Herbs Magic website using React.js and Tailwind CSS, ensuring mobile-first design and smooth user interactions. Collaborated closely with design and backend teams to implement UI/UX improvements, optimize performance, and maintain clean, reusable component-based architecture. Integrated dynamic content using APIs and contributed to accessibility and SEO enhancements.
                </p>
            </div>

            <div className="flex flex-col justify-center py-5 w-full h-[43%] bg-none hover:bg-[#ffb3c1] transition duration-500 delay-21 text-white hover:text-black rounded pr-[20px]">
                <h2 className="text-3xl font-bold relative mx-[20px] md:mx-[100px]">
                    Campus Ambassador Intern At Devtown                
                </h2>
                <p className=" relative mx-[20px] md:mx-[100px]">
                    <span className="font-bold">Location:</span> Pune, Maharashtra, India (Remote) <br />
                    <span className="font-bold">Duration</span> Feb 2025 – Feb 2025 (1 mos)
                </p><br /> 
                <p className="relative mx-[20px] md:mx-[100px]">
                    ● Act as a liaison between Devtown and my campus, promoting Devtown's initiatives, workshops, and events. Strengthen the student community by sharing updates, networking opportunities, and insights about tech trends.
                    Develop leadership, marketing, and community-building skills by managing outreach programs.
                </p>
            </div>

            <div className="flex flex-col justify-center py-5 w-full h-[51%] bg-none hover:bg-[#9ef01a] transition duration-500 delay-21 text-white hover:text-black rounded pr-[20px]">
                <h2 className="text-3xl font-bold w-full relative mx-[20px] md:mx-[100px]">
                Game Dev+, VIT Pune
                </h2>
                <p className="relative mx-[20px] md:mx-[100px]">
                    <span className="font-bold">Location:</span> Pune, Maharashtra, India <br />
                    <span className="font-bold">Duration</span> Nov 2023 – Jun 2025 (1 yr 8 mos)
                </p><br />
                <div className="w-[86%] mx-[40px] md:mx-[150px]">
                {/* Role: Head */}
                <p className="text-2xl font-semibold">Level Designing and Ideation Head</p>
                <p className="text-base">Part-time · Aug 2024 – Jun 2025 · 11 Months</p>
                <p>
                    • Spearheaded the creation of innovative game levels, incorporating user feedback. Coordinated brainstorming sessions, mentored junior members, and developed strategies to enhance gameplay and streamline design.
                </p>

                <br />

                {/* Role: Coordinator */}
                <p className="text-2xl font-semibold">Level Designing and Ideation Coordinator</p>
                <p className="text-base ">Part-time · Nov 2023 – Sep 2024 · 11 Months</p>
                <p>
                    • Assisted in conceptualizing and designing engaging game levels aligned with gameplay mechanics. Facilitated cross-functional team discussions, documented level ideas, and helped refine level flow through continuous iteration and testing.
                </p>
                </div>

            </div>

        </div>
    )
}

export default Experience;