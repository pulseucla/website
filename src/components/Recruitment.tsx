import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Navbar from "./Navbar";
import Footer from "./footer";
import { Why_Apply, Recruitment_Timeline } from '../constants';

interface card {
    icon: string,
    title: string,
    border_color: string,
    text_color: string,
    description: string,
}

const Card: React.FC<card> = ({ icon, title, border_color, text_color, description }) => {
    return(
        <div className={`flex flex-col justify-center items-center ${border_color} border-2 w-[80vw] max-w-[400px] h-[775px]`}>
            <img src={icon}/>
            <p className={`md:text-[48px] text-[36px] ${text_color} font-bold text-center`}>{title}</p>
            <p className="font-light text-center w-[80%]">{description}</p>
        </div>
    )
}

interface timeline {
    timeline: {
        step: string,
        icon: string,
        description: string,
    }
}

const Timeline : React.FC<timeline> = ({timeline}) => {
    return (
        <VerticalTimelineElement
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                    src={timeline.icon}
                    alt={"icon"}
                    className=" object-contain"
                    />
                </div>
            }
        >
            <div className="flex-col flex gap-2 w-[30vw] text-left">
                {/* <p className="font-bold md:text-[36px] text-[24px]"> {timeline.step} </p> */}
                <p className="font-light">{timeline.step}</p>
                <p className="font-light"> {timeline.description} </p>
            </div>
            {/* <p>Hello</p> */}
        </VerticalTimelineElement>
    )
}

const Recruitment = () => {
    const [hover, setHover] = useState(false)

    return(
        <div className="flex flex-col items-center w-screen gap-10">
            <Navbar/>
            {/* Intro */}
            <div className="flex flex-col items-center justify-evenly h-[60vh] gap-3">
                <div className="flex flex-col items-center justify-center gap-3">
                    <p className="text-[48px]">Apply for Pulse</p>
                    <p className="md:w-[40vw] text-[24px]">Join our organization for a shadowing experience in the healthcare industry</p>
                    <div className={`rounded-[15px] flex bg-[#DE505B] w-[200px] ${hover ? "text-black" : "text-white"} justify-center p-1`}
                        onClick={()=>{window.location.href = ''}}
                        onMouseEnter={() => {setHover(true)}}
                        onMouseLeave={() => {setHover(false)}}
                    >
                        <p>Access Application</p>
                    </div>
                </div>
                <div className="w-[70vw] h-[2px] bg-black/25"/>
            </div>

            {/* Why Apply */}
            <div className="flex flex-col items-center gap-10 justify-evenly">
                <p className="text-[24px]">WHY YOU SHOULD APPLY</p>
                <div className="flex gap-5 flex-wrap flex-row justify-center">
                    {Why_Apply.map((item, index) => (
                        <Card key={index} {...item}/>
                    ))}
                </div>
            </div>

            {/* Recruitment */}
            <div className="flex flex-row">
                <div className='flex flex-col'>
                    <VerticalTimeline
                        layout={'1-column-left'}
                    >
                        {Recruitment_Timeline.map((timeline, index) => (
                            <Timeline key={index} timeline={timeline}/>
                        ))}
                    </VerticalTimeline>
                </div>
                <div>
                    <div>
                        hello
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Recruitment