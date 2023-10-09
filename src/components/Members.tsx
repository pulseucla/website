import React from "react";

import Navbar from "./Navbar";
import Footer from "./footer";

import { Members } from '../constants';

interface members{
    image: string,
    name: string,
    major: string,
    year: string,
    fact: string,
    team_category: string,
}

const MembersCard: React.FC<members> = ({ image, name, major, year, fact, team_category }) => {


    return (
        <div className="max-w-[350px] w-[80vw]">
            <div className="w-[100%] max-h-[350px] h-[80vw]">
                <img src={image} className="w-[100%] h-[100%]"/>
            </div>
            <div className="h-[350px] p-2 flex flex-col justify-evenly">
                <div><p>{name}</p></div>
                <div className="font-light"><p>{major}</p></div>
                <div><p><span className="underline">Fun Fact:</span>{fact}</p></div>
                <div className="flex flex-row">
                    <div className="rounded-[15px] p-1 border-2 border-black bg-[#FFC2C2]">{team_category}</div>
                    <div className="rounded-[15px] p-1 border-2 border-black bg-[#C1CDE8]">{year}</div>
                </div>
            </div>  
        </div>
    )
}

const Members = () => {
    return (
        <div className="flex flex-col gap-10 items-center">
            <Navbar/>

            <div>

            </div>

            <div>
                {Members.map((member, index) =>{
                    <Members key={index} {...member}/>
                })}
            </div>

            <Footer/>
        </div>
    )
}

export default Members;