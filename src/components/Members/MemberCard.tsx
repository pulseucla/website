import React from "react"

interface membersProp{
    members:{
        image: string,
        name: string,
        major: string,
        year: string,
        fact: string,
    }
}

const MemberCard: React.FC<membersProp> = ({ members }) => {
    return (
        <div className="max-w-[350px] w-[80vw] border-black border-2">
            <div className="w-[100%] max-h-[315px] h-[80vw]">
                <img src={members.image} alt="Member Photo" className="w-[100%] h-[100%] object-cover" loading="lazy"/>
            </div>
            <div className="h-[225px] p-2 flex flex-col justify-evenly text-left">
                <div className="text-[24px]"><p>{members.name}</p></div>
                <div className="font-light"><p>{members.major}</p></div>
                <div><p><span className="underline">Fun Fact:</span>{members.fact}</p></div>
                <div className="flex flex-row gap-5">
                    <div className="rounded-[15px] pl-3 pr-3 border-2 border-black bg-[#C1CDE8]/50">{members.year}</div>
                </div>
            </div>  
        </div>
    )
}

export default MemberCard