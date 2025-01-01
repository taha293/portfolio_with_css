import Link from "next/link"

function NotFound(){
    return(
        <div className="notfound">
            <h1>404 | Page not Found</h1>
            <div className="buttondiv">
            <Link href='/' className="px-4 py-2 bg-[#42446E]  rounded-md text-white hover:bg-[#666666] my-4 text-[14px] sm:text-[16px] lg:text-[18px]"> Go to Home </Link>
            </div>
        </div>
    )
}

export default NotFound