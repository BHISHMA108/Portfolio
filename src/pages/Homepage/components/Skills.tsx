function Skills() {
  return (
    <div id="skills" className="h-full my-[140px] relative">
      <div>
        <h1 className="text-5xl lg:text-6xl font-bold mb-[20px] text-white relative mx-[20px] md:mx-[100px]">
          Skills
        </h1>
        <video src="public/v3.mp4" muted autoPlay loop className="absolute w-full h-full object-cover " preload="none"></video>
        <div className="grid grid-row-2 sm:grid-row-3 md:grid-cols-6 md:gap-7 items-center relative p-[20px] md:p-[100px]">
          <div className="col-span-2 bg-none hover:bg-[#006EBB] transition duration-500 delay-55 ease-in-out p-2 rounded-3xl "><img src="docker.png" className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl" alt="" /></div>
          <div className="bg-none hover:bg-[#00D9FD] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="react.jpg" className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl" alt="" /></div>
          <div className="bg-none hover:bg-[#E44D26] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="image.png" className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl" alt="" /></div>
          <div className="col-span-2 bg-none hover:bg-[#323330] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="JavaScript.png" className="w-full h-[81px] md:h-[120px] object-contain bg-[#F0DB4F] rounded-2xl" alt="" /></div>
          <div className="bg-none hover:bg-[#2965F1] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="css.png" className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl" alt="" /></div>
          <div className="col-span-3 bg-none hover:bg-[#FFFFFF] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="three.png" className="w-full h-[81px] md:h-[120px] object-contain bg-black rounded-2xl" alt="" /></div>
          <div className="bg-none hover:bg-[#FFFFFF] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="ts.png" className="w-full h-[81px] md:h-[120px] object-contain bg-[#3178C6] rounded-2xl" alt="" /></div>
          <div className="bg-none hover:bg-[#CA3132] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="java.svg" className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl" alt="" /></div>
          <div className="col-span-2 bg-none hover:bg-[#000000] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="ex.png" className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl" alt="" /></div>
          <div className="bg-none hover:bg-[#333333] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="node.png" className="w-full h-[81px] md:h-[120px] object-contain bg-[#8FC708] rounded-2xl" alt="" /></div>
          <div className="col-span-2 bg-none hover:bg-[#00ED64] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="mongo.png" className="w-full h-[81px] md:h-[120px] object-contain bg-[#001E2B] rounded-2xl" alt="" /></div>
          <div className="bg-none hover:bg-[#FFFFFF] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="postman.png" className="w-full h-[81px] md:h-[120px] object-contain bg-[#FF6C37] rounded-2xl" alt="" /></div>
          <div className="bg-none hover:bg-[#00D9FD] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="tailwind.png" className="w-full h-[81px] md:h-[120px] object-contain bg-[#161D2D] rounded-2xl" alt="" /></div>
          <div className="col-span-2 bg-none hover:bg-[#000000] transition duration-500 delay-75 ease-in-out p-2 rounded-3xl "><img src="github.png" className="w-full h-[81px] md:h-[120px] object-contain bg-white rounded-2xl" alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
