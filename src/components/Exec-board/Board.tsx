import React, { useMemo } from "react";
import Navbar from "../Miscellaneous/Navbar";
import Footer from "../Miscellaneous/footer";
import { Board_Members } from './constants'


import BoardMemberCard from "./BoardMemberCard";

const Board = () => {
    const Memoized_Board = useMemo(()=>Board_Members, []);

    return(
        <div className="flex flex-col gap-10 items-center">
            <Navbar/>

            <div className="flex flex-row justify-center mb-4">
                <div className="flex justify-center items-center">
                    <p className="text-[36px] md:text-left text-center">
                        Meet our <span className="underline">dedicated,</span><br/> 
                        <span className="font-light">experienced</span>, &  
                        <span className="text-[#93ACE0] font-light"> caring</span>
                        <br/> executive board
                        <img src="./assets/board/line.png" className="hidden md:block self-right ml-[220px]" loading="lazy"/>
                    </p>
                    
                </div>
                <div className="flex justify-center">
                    <img src="./assets/board/hero.png" className="w-[70%] hidden md:block"/>
                </div>
            </div>

            <div className="flex flex-row justify-center flex-wrap gap-5">
                {Memoized_Board.map((members, index) => (
                    <BoardMemberCard key={index} {...members}/>
                ))}
            </div>

            <Footer/>
        </div>
    )
}

export default React.memo(Board)