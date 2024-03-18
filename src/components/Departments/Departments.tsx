import React, { useState } from "react";

import Navbar from "../Miscellaneous/Navbar";
import Footer from "../Miscellaneous/footer";

import { motion } from "framer-motion"

import * as constants from './constants'


interface dropDownProps {
    description: string;
    department: string;
}
  
const dropDownAnimation = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.5
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          rotateX: -15,
          transition: {
            duration: 0.25,
            delay: 0
          },
          transitionEnd: {
            display: "none"
          }
        }
};

const DepartmentCard: React.FC<dropDownProps> = ({ description, department }) => {
    const [clicked, setClick] = useState(false)

    return(
        <div className="flex flex-col w-full border-b-2 pb-2">
            <div className="flex justify-left gap-4 items-center">
                <div className="w-[18px] h-[18px] flex items-center cursor-pointer"
                    onClick={()=>setClick(!clicked)}
                >
                    <img 
                        className={clicked ? "w-[18px]": "w-[18px] h-[18px]"}
                        src={clicked ? "./assets/departments/minus.png" : "./assets/departments/plus.png"}
                    />
                </div>
                <p className="text-left">
                    {department}
                </p>
            </div>
            <motion.div 
                className={`md:text-left font-light ml-[2rem] mt-3 ${!clicked ? "hidden": "block"}`}
                initial="exit"
                animate={clicked ? "enter" : "exit"}
                variants={dropDownAnimation}
            >   <div>
                    <p className="text-black">
                        {description}
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

const Department = () => {
    return (
        <div className="flex flex-col gap-10 items-center w-[99vw] max-w-screen">
            <Navbar />

            {/* Introduction */}
            <div className="flex flex-col flex-nowrap justify-center items-center z-[-1]">
                <div className="flex flex-row overflow-hidden gap-3 items-center justify-evenly">
                    <div className="w-[300px] h-[418px] lg:flex hidden overflow-hidden">
                        <img
                            src="./assets/departments/pulse nat shadow.jpg"
                            className="w-[100%] h-[100%]"
                        />
                    </div>
                    <div className="w-[430px] h-[418px] lg:flex hidden overflow-hidden">
                        <img
                            src="./assets/departments/pulse andy zach shadow.jpg"
                            className="h-[100%] w-[100%]"
                        />
                    </div>
                    <div className="w-[300px] h-[418px] lg:flex hidden overflow-hidden">
                        <img
                            src="./assets/departments/pulse nath shadow.jpg"
                            className="h-[100%] w-[100%]"
                        />
                    </div>
                </div>
                <div className={`flex flex-col lg:absolute p-5 bg-gradient-radial from-white/80 to-white/0 rounded-[100px] w-[99vw] max-w-screen items-center h-[100%] justify-center`}>
                    <p className="text-[48px]">Shadowing Experience</p>
                    <div className="rounded-[100px] bg-[#B05454] p-3 lg:w-[40vw]">
                        <p className="text-white">
                            @ RONALD REAGAN MEDICAL CENTER
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Shadow */}
            <div className="flex flex-row flex-wrap gap-5 justify-center z-0">
                <div className="lg:w-[40vw] w-[100%] flex justify-center">
                    <img src="./assets/departments/shadow.png" />
                </div>
                <div className="flex flex-col justify-evenly lg:w-[40vw] w-[100%] text-left gap-5">
                    <div className="flex items-center gap-5 justify-center lg:justify-start">
                        <img src="./assets/departments/question.svg" />
                        <p className="lg:text-[48px] text-[24px]">Why Shadow?</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-light lg:text-[20px] text-[16px] max-w-[80vw]">
                            {constants.Blurb_1}
                        </p>
                    </div>
                </div>
            </div>

            {/* The Hard Stuff, AKA the dropDown */}
            <div className="w-[99vw] max-w-screen bg-[#B05454] bg-opacity-[25%] p-10 pt-10 flex-col items-center flex gap-5">
                <p className="text-[50px]"> Departments </p>
                <div className="w-[80vw] flex-col flex gap-4 border-2 p-5 rounded-[25px] bg-white">
                    {constants.departments.map((department, index) => (
                        <DepartmentCard key={index} {...department} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Department