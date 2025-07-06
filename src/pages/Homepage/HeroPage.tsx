import Herosection from "./components/Herosection"
import Cube from "./components/Cube"
import About from "./components/About"
import Skills from "./components/Skills"
import Middle from "./components/Middle"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contacts from "./components/Contacts"
// import LocomotiveScroll from 'locomotive-scroll';
// const locomotiveScroll = new LocomotiveScroll();


function heropage (){
    return (
        <>
            <Herosection/>
            <Cube/>
            <About/>
            <Skills/>
            <Middle/>
            <Projects/>
            <Experience/>
            <Contacts/>
        </>
    )
}

export default heropage;