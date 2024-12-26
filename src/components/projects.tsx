import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects(){
    return(
        <div id="projects" className="px-7 sm:px-7 md:px-9 lg:px-11 xl:px-12 py-8 md:py-10 lg:py-12 xl:py-14 flex flex-col items-center gap-12 sm:gap-14 md:gap-16 lg:gap-18 xl:gap-20">
        <div className="text-center flex flex-col gap-[1px]">
            <p className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold text-[#42446E]">Projects</p>
            <p className="text-[#666666] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[24px] leading-[1.1]"> Things I've built so far</p>
        </div>
        <div className=" w-full grid sm:grid-cols-[1fr,1fr] grid-cols-[1fr] lg:grid-cols-[1fr,1fr,1fr] auto-rows-fr gap-5">
            <div className="bg-white max-w-[373px] w-full drop-shadow-lg rounded-lg m-auto p-5 flex flex-col gap-4 justify-between h-[-webkit-fill-available]">
                <div className="flex flex-col gap-4">
                <p className="text-black font-medium text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]">Coffee Shop</p>
                <p className="text-[#666666] font-light text-[14px] sm:text-[16px] md:text-[18px]">This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p></div>
                <div className="flex flex-col gap-4">
                <p className="text-[#42446E] text-[14px] md:text-[16px]">Tech Stack : <span className="font-light">Html,Css</span></p>
                <div className="flex justify-between text-black ">
                    <div className="flex gap-[6px] items-center text-[14px] md:text-[16px]">
                    <FontAwesomeIcon icon={faLink} />
                    <p>Live Prevew</p>
                    </div>
                    <div className="flex gap-[6px] items-center text-[14px] md:text-[16px]">
                    <FontAwesomeIcon icon={faGithub} />
                    <p>View Code</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Projects