import React, { useMemo } from "react";

import Navbar from "../Miscellaneous/Navbar";
import Footer from "../Miscellaneous/footer";


import { Pulse_Members, Big_Image } from './constants'

// const MemberCard = React.lazy(()=> import('./MemberCard'))

import MemberCard from "./MemberCard";

const Member = () => {
    const memoizedMembers = useMemo(() => Pulse_Members, []); // Memoize the array

    return (
        <div className="flex flex-col gap-10 items-center max-w-screen w-[99vw]">
            <Navbar/>

            <div className="flex flex-col flex-nowrap justify-center items-center z-[-1]">
                <div className="w-[80vw] hidden md:block overflow-hidden h-[65vh]">
                    <img src={Big_Image} className="w-full object-cover object-center h-full"/>
                </div>
                <div className={`flex flex-col md:absolute relative p-5 bg-gradient-radial from-white/80 to-white/0 rounded-[100px] w-[99vw] max-w-screen items-center h-full justify-center`}>
                    <p className="text-[48px]">A Team with <span className="text-[#DE505B]">Heart</span> & <span className="underline">Pulse</span></p>
                    <div className="flex flex-row items-center justify-evenly md:w-[30vw] w-fit">
                        <p className="text-[36px]">Get to Know Us</p>
                        <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="46" height="46"><path d="M 23 46 C 10.297 46 0 46 0 46 L 0 0 C 0 0 10.297 0 23 0 L 23 0 C 35.703 0 46 0 46 0 L 46 46 C 46 46 35.703 46 23 46 Z" fill="rgb(148,172,224)"></path><path d="M 15.628 13 C 13.53 13 11.662 13.81 10.25 15.078 C 8.877 16.347 8 18.073 8 20.045 C 8 21.983 8.877 23.709 10.25 25.012 L 21.221 35.145 C 22.37 36.206 24.143 36.206 25.292 35.145 L 36.263 25.012 C 37.636 23.744 38.513 22.018 38.513 20.045 C 38.513 18.108 37.636 16.382 36.263 15.078 C 34.89 13.81 33.021 13 30.885 13 C 28.787 13 26.918 13.81 25.507 15.078 C 24.134 16.347 23.257 18.073 23.257 20.045 C 23.257 18.108 22.379 16.382 21.006 15.078 C 19.633 13.81 17.764 13 15.628 13 Z" fill="rgb(245,245,245)"></path></svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-evenly w-[80vw] gap-5">
                {memoizedMembers.map((event, index) => (
                    <MemberCard key={index} members={event} />
                ))}
            </div>

            <Footer/>
        </div>
    )
}

export default React.memo(Member);