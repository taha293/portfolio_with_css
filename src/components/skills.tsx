import Image from "next/image"

function Skills() {
    return (
        <div className="px-5 sm:px-7 md:px-9 lg:px-11 xl:px-12 py-8 md:py-10 lg:py-12 xl:py-14 flex flex-col items-center gap-12 sm:gap-14 md:gap-16 lg:gap-18 xl:gap-20" id="skills">
            <div className="text-center flex flex-col gap-[1px]">
                <p className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold text-[#42446E]">My Tech Stack</p>
                <p className="text-[#666666] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[24px] leading-[1.1]"> Technologies I've been working with recently</p>
            </div>
            <div className="grid w-full self-center grid-cols-[1fr,1fr,1fr,1fr,1fr] gap-y-12 sm:gap-y-14 md:gap-y-16 lg-gap-y-18 xl:gap-y-20 gap-x-6">
                <div className="flex justify-center">
                    <Image src='/html.png' alt="html" width={105} height={105}></Image>
                </div><div className="flex justify-center">
                    <Image src='/css.png' alt="css" width={105} height={105}></Image>
                </div><div className="flex justify-center">
                    <Image src='/js.png' alt="js" width={105} height={105}></Image>
                </div><div className="flex justify-center">
                    <Image src='/ts.png' alt="ts" width={105} height={105}></Image>
                </div><div className="flex justify-center">
                    <Image src='/tailwind.png' alt="tailwind" width={105} height={105}></Image>
                </div><div className="flex justify-center">
                    <Image src='/react.png' alt="react" width={105} height={105}></Image>
                </div><div className="flex justify-center">
                    <Image src='/next.png' alt="nextjs" width={105} height={105}></Image>
                </div><div className="flex justify-center">
                    <Image src='/shadecn.png' alt="shadecn" width={105} height={105}></Image>
                </div>
                <div className="flex justify-center">
                    <Image src='/vs.png' alt="vscode" width={105} height={105}></Image>
                </div>
                <div className="flex justify-center">
                    <Image src='/github.png' alt="github" width={105} height={105}></Image>
                </div>
            </div>
        </div>
    )
}
export default Skills