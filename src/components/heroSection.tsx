'use client'
import { ReactTyped } from "react-typed";
import Image from "next/image";

function HeroSection() {
    return (
        <div className="px-5 sm:px-7 md:px-9 lg:px-11 xl:px-12 py-8 md:py-10 lg:py-12 xl:py-14 flex w-full justify-between md:items-center flex-col sm:flex-row gap-6">
            <div className="order-2 sm:order-1 h-[203px] sm:h-auto">
                <p className="text-[#42446E] font-bold leading-[1.2] text-[34px] sm:text-[36px] md:text-[38px] lg:text-[52px] xl:text-[58px] lg:leading-[70px] tracking-[-1px] ">Hi 👋,<br />
                    My name is <br />
                    M. Taha <br />
                    
                    <ReactTyped
        strings={[
          "I build things for web",
          "Fast development.",
          "SEO-friendly.",
          "Scalable solutions.",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      /></p>
            </div>
            <div className="bg-gradient-to-br from-[#13B0F5] via-[#CA24B4] p-[3px]  rounded-full w-fit h-fit sm:mr-4 md:mr-9 lg:mr-12 xl:mr-16 order-1 sm:order-2 m-auto">
                <Image  className="border-gradient-to-r from-slate-600 via-slate-800 border rounded-full w-[180px] sm:w-[170px] md:w-[220px] lg:w-[225px] xl:w-[240px] " src='/img.jpg' alt="myimage" width={240} height={1}></Image>
            </div>
        </div>
    )
}

export default HeroSection