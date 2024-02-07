import Link from "next/link"

function Navbar() {
    return (
        <nav className="w-full h-fit flex flex-row items-center justify-between px-8 pt-10">
            <h5 className=" text-black SemiBold text-3xl">NapulEth</h5>
            <div className="w-fit h-fit flex flex-row items-center justify-end gap-10">
                <div className="w-fit h-fit flex flex-row items-center justify-between gap-10">
                    <Link href={'/'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-2xl Medium">
                            Home
                        </h5>
                    </Link>
                    <Link href={'/tickets'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-2xl Medium">
                            Tickets
                        </h5>
                    </Link>
                    <Link href={'/about'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-2xl Medium">
                            About
                        </h5>
                    </Link>
                    <Link href={'/join'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-2xl Medium">
                            Join us
                        </h5>
                    </Link>
                </div>
                <Link href={'/apply'} className=" relative z-50 p-0 w-fit h-fit">
                    <div className="w-fit h-fit flex flex-row items-center justify-center py-4 px-12 bg-[#E38B84] buttonShadow">
                        <h5 className=" text-black Medium text-2xl">Apply Now</h5>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar