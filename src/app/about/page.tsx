import Skills from "@/components/skills";
import AboutHero from "@/components/aboutHero";
import Link from "next/link";

function About(){
    return (
        <div>

            <AboutHero/>
            <Skills/>
            <div className="flex w-full justify-center items-center ">
            <Link href='/#projects' className="px-4 py-2 bg-[#42446E]  rounded-md text-white hover:bg-[#666666] my-4 text-[14px] sm:text-[16px] lg:text-[18px]"> View Projects </Link>
            </div>
        </div>
    )
}
export default About