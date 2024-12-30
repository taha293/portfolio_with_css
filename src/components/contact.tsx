import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdBadge } from "@fortawesome/free-solid-svg-icons"
function ContactHero() {
    return (
        <div className="px-5 sm:px-7 md:px-9 lg:px-11 xl:px-12 py-8 md:py-10 lg:py-12 xl:py-14 flex w-full justify-center h-auto lg:h-[72vh] xl:h-[80vh] items-center gap-8 flex-col lg:flex-row">
            <div>
                <FontAwesomeIcon icon={faIdBadge} color='#42446E' className="text-[150px] sm:text-[175px] md:text-[210px] lg:text-[325px]" />
            </div>
            <div className="flex flex-col justify-center items-center lg:block">
                <p className="text-[#42446E] text-center lg:text-justify text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold ">Have a Project in Mind? <br />Contact me on the platforms given below.</p>
                <div className="flex flex-col gap-2">
                <a href='https://www.linkedin.com/in/muhammad-taha-ansarii/' target="blank" className="px-4 py-[10px] bg-[#0077B5]  rounded-md text-white hover:bg-[#2d79a1] my-4 text-[14px] sm:text-[16px] lg:text-[18px] w-[152px] flex justify-center "> Linkedin </a>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=tahahero7890@gmail.com' target="blank" className="px-4 py-[10px] bg-[#D93025]  rounded-md text-white hover:bg-[#922c2c] my-4 text-[14px] sm:text-[16px] lg:text-[18px] w-[152px] flex justify-center "> Gmail </a>
                <a href='https://www.facebook.com/taha.hero.712' target="blank" className="px-4 py-[10px] bg-[#1877F2]  rounded-md text-white hover:bg-[#2f5586] my-4 text-[14px] sm:text-[16px] lg:text-[18px] w-[152px] flex justify-center "> Facebook </a>
                </div>
            </div>
        </div>
    )
}
export default ContactHero