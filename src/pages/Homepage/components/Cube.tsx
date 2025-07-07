import {Canvas} from "@react-three/fiber"
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model(){
    const {scene} = useGLTF("https://res.cloudinary.com/dst3yuj1w/image/upload/v1751904972/scene-draco_gmufjg.glb")
    return <primitive object={scene} scale={0.02} />;
} 

////fov = field of view
export default function Cube(){
    return (
        <div className=" w-full h-[400px] md:h-[621px] flex items-center justify-between mx-[11px] scrollbar-hide mb-[100px] sm:mb-[200px] sm:bg-[url('/mongo.jpg')] md:bg-hidden">
            <h1 className=" sm:pl-[101px] z-10 text-2xl md:text-3xl lg:text-5xl text-white font-semibold relative">My name is <br /> <span className=" text-5xl md:text-6xl lg:text-8xl">UDAY<span className="text-3xl text-blue-600 ">(aka BHISHMA) </span> <br /> DANDEKAR</span>, <br />An Enthusiast Software Developer</h1>
            <div className="hidden lg:block w-full h-[100%] z-2 absolute transform translate-x-[21%] scrollbar-hide">
            <Canvas camera={{position: [ 0 , 0 ,5], fov: 4 }}>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[0, 10, 5]} intensity={1}/>
                <Model/>
                <OrbitControls enableZoom={false} autoRotate={true}/>
            </Canvas>
            </div>
        </div>
    )
}