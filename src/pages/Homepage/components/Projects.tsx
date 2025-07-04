import { useState } from "react";
import ProjectsData from "./ProjectsData";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ProjectsData.length);
    setIsPlaying(false); // Stop video when slide changes
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ProjectsData.length) % ProjectsData.length);
    setIsPlaying(false); // Stop video when slide changes
  };

  const currentProject = ProjectsData[currentIndex];

  return (
    <div
      id="projects"
      className="w-full h-screen bg-cover bg-center relative justify-center items-center px-4 mt-[-100px] lg:mt-0 transition transform ease-in-out duration-500 delay-75"
      style={{ backgroundImage: `url(${currentProject.background})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <h1 className="text-5xl lg:text-6xl font-bold text-white md:mx-[100px] pt-[50px] relative">
        Projects
      </h1>

      <div className="flex justify-center items-center h-full relative px-[100px]">
        <div className="w-full max-w-6xl z-10 relative ">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {ProjectsData.map((project, index) => (
              <div
                key={project.id}
                className="min-w-full flex flex-col lg:flex-row items-center gap-9 px-[91px]"
              >
                {/* Video Section */}
                <div className="relative w-full lg:w-1/2">
                  {index === currentIndex && isPlaying ? (
                    <>
                      <video
                        src={project.videoThumbnail}
                        className="w-full h-64 object-cover rounded-lg"
                        autoPlay
                        controls
                        muted={isMuted}
                      />
                      {/* Close Button */}
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm"
                      >
                        ✕
                      </button>
                      {/* Mute/Unmute Button */}
                      <button
                        onClick={() => setIsMuted((prev) => !prev)}
                        className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm"
                      >
                        {isMuted ? "🔇" : "🔊"}
                      </button>
                    </>
                  ) : (
                    <>
                      <video
                        src={project.videoThumbnail}
                        className="hidden md:block w-full h-64 object-cover rounded-lg"
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        ▶ Play
                      </button>
                    </>
                  )}
                </div>

                {/* Text Section */}
                <div className="text-white max-w-lg text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p> <span className="font-bold text-white text-1xl">TechStack:</span> <span className="text-white italic text-1xl">{project.Tech}</span></p>
                  <p className="hidden md:block text-blue-100">{project.description}</p>
                  <p className="md:hidden text-blue-100">{project.alttext}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full z-20"
          >
            ⬅
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full z-20"
          >
            ➡
          </button>
        </div>
      </div>
    </div>
  );
}
