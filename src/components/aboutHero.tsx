'use client'
import { ReactTyped } from "react-typed";
import Image from "next/image";

function AboutHero() {
    return (
        <div className="px-5 sm:px-7 md:px-9 lg:px-11 xl:px-12 py-8 md:py-10 lg:py-12 xl:py-14 flex w-full justify-between md:items-center flex-col  gap-8">
            <div className="order-2 sm:h-auto w-full">
                <p className="text-[#42446E] font-bold text-[34px] sm:text-[36px] md:text-[38px] lg:text-[52px] xl:text-[58px] leading-[0.6] tracking-[-1px] ">About Me,<br /> <br />
                  
                    
                    <ReactTyped
        strings={[
          "Hi, I am Muhammad Taha—a passionate Frontend Developer dedicated to crafting intuitive and visually captivating web experiences. With a strong foundation in modern web technologies, I specialize in building responsive and performance-optimized applications using frameworks like React and Next.js.  My journey into web development began with a deep curiosity about how technology shapes our everyday lives. Over the years, I have transformed this curiosity into expertise, creating projects that not only look great but also solve real-world problems. From single-page applications to dynamic, user-focused platforms, I enjoy every step of the process.",
        ]}
        typeSpeed={10}
        backDelay={1000000}
        loop
       className=" text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-normal"/></p>
            </div>
            <div className="bg-gradient-to-br from-[#13B0F5] via-[#CA24B4] p-[3px]  rounded-full w-fit h-fit order-1 m-auto">
                <Image  className="border-gradient-to-r from-slate-600 via-slate-800 border rounded-full w-[180px] sm:w-[170px] md:w-[220px] lg:w-[225px] xl:w-[240px] " src='/img.jpg' alt="myimage" width={240} height={1}></Image>
            </div>
        </div>
    )
}

export default AboutHero