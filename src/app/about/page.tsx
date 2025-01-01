import Skills from "@/components/skills";
import AboutHero from "@/components/aboutHero";
import Link from "next/link";

function About(){
    return (
        <div>

            <AboutHero/>
            <Skills/>
            <div className="buttondiv ">
            <Link href='/#projects'> View Projects </Link>
            </div>
        </div>
    )
}
export default About