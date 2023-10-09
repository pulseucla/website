import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./footer";

import { Board_Members } from '../constants'

interface board {
    image: string,
    name: string,
    title: string,
    description: string
}

const MemberCard : React.FC<board> = ({ image, name, title, description }) => {
    return (
        <div className="max-w-[300px] w-[80vw] flex flex-col border-2 border-black h-[384px]">
            <img src={image} className="h-[268px]"/>
            <div className="flex flex-col justify-evenly text-left p-2 gap-1">
                <p className=" text-[24px]">{name}</p>
                <div className="mb-4">
                    <p>{title}</p>
                    <div className="flex p-4 rounded-[15px] border-2 w-[100px] h-[5px] justify-center items-center border-black">
                        <p className="text-[12px]"> Read More </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Board = () => {
    return(
        <div className="flex flex-col gap-10">
            <Navbar/>

            <div className="flex flex-row justify-center mb-4">
                <div className="flex justify-center items-center">
                    <p className="text-[36px] text-left">
                        Meet our <span className="underline">dedicated,</span><br/> 
                        <span className="font-light">experienced</span>, &  
                        <span className="text-[#93ACE0] font-light"> caring</span>
                        <br/> executive board
                        <img src="/src/assets/board/line.png" className="hidden md:block self-right ml-[220px]"/>
                    </p>
                    
                </div>
                <div className="flex justify-center">
                    <img src="/src/assets/board/hero.png" className="w-[70%]"/>
                </div>
            </div>

            <div className="flex flex-row justify-evenly">
                {Board_Members.map((members, index) => (
                    <MemberCard key={index} {...members}/>
                ))}
            </div>

            <Footer/>
        </div>
    )
}

export default Board