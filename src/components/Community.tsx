import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";

import { Community_Intro, Past_Events } from '../constants';

// interface upcomingProps {
//     date: string,
//     time: string,
//     event_name: string,
//     details: string,
//     borderC: string,
//     bg: string
// }

// const UpcomingCard: React.FC<upcomingProps> = ({ date, time, event_name, details, borderC, bg }) => {
//     const [border, setBorder] = useState("border-black");
//     const [background, setBG] = useState("")

//     useEffect(() => { 
//         if (borderC) setBorder(borderC) 
//         if (bg) setBG(bg)
//     }), [];

//     return(
//         <div className={`w-[80vw] max-w-[400px] h-[300px] flex flex-col items-center justify-evenly text-[24px] ${border} border-2 mb-4`}>
//             <div><p> {date} </p></div>
//             <div className="flex flex-col">
//                 <p> {event_name} </p>
//                 <p> {time} </p>
//             </div>
//             <div className={`w-[40%]  ${border} ${bg} border-2 rounded-[15px] pt-1 pb-1 pl-2 pr-2`}>
//                 <p className="text-white">View More</p>
//             </div>
//         </div>
//     )

// }

interface pastProps {
    event_name: string,
    image: string,
}

const PastCard: React.FC<pastProps> = ({ event_name, image }) => {
    return(
        <div className="max-w-[600px] w-[80vw] md:h-[400px] flex flex-col items-left md:justify-evenly mb-4 bg-gradient-to-tr from-white/80 to-white/0">
            <div className="bg-gradient-radial from-white/80 to-white/0 z-[-1]">
                <img src={image} className="h-[100%] w-[100%]"/>
            </div>
            <div className="md:text-[36px] text-[24px] text-left z-[1]">
                <p>{event_name}</p>
            </div>
        </div>
    )
}

const Community = () => {
    return(
        <div className="flex flex-col items-center w-screen gap-10">
            <Navbar/>
            <div className="flex-col md:hidden flex justify-center items-center gap-5 w-screen">
                <div className="w-[80vw] h-[1px] bg-black"/>
                <div className="flex-row justify-evenly w-screen flex">
                    <Link to="/st-baldricks">St. Baldrick's Event</Link>
                </div>
                <div className="w-[80vw] h-[1px] bg-black"/>
            </div>
            <div className="flex flex-col flex-nowrap justify-center items-center z-[-1]">
                <div className="flex flex-row overflow-hidden gap-3 items-center justify-evenly">
                    <div className="mt-5"><img src="/src/assets/community/pic1.png"/></div>
                    <div className="mb-5"><img src="/src/assets/community/pic2.png"/></div>
                    <div className="mt-5"><img src="/src/assets/community/pic3.png"/></div>
                    <div className="mb-5"><img src="/src/assets/community/pic4.png"/></div>
                    <div className="mt-5"><img src="/src/assets/community/pic5.png"/></div>
                    <div className="mb-5"><img src="/src/assets/community/pic6.png"/></div>
                </div>
                <div className={`flex flex-col absolute p-5 bg-gradient-radial from-white/80 to-white/0 rounded-[100px] w-screen 
                                items-center h-[100%] justify-center md:gap-5 gap-2`}>
                    <div className="md:text-[48px] text-[24px]">
                        <p className="">{Community_Intro.Top_Half}</p>
                        <div className="rounded-[50px] bg-white md:pl-5 md:pr-5 md:pt-3 md:pb-3 p-1">
                            <p className="text-black">
                                {Community_Intro.Bottom_Half}
                            </p>
                        </div>
                    </div>                  
                    <div className="w-[60vw] text-wrap">
                        <p className="md:text-[16px] text-[10px]">
                            {Community_Intro.Text}
                        </p>
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            {/* <div className="flex flex-col justify-center items-center w-screen gap-5">
                <div className="flex flex-row items-center gap-5 justify-left w-[80%]">
                    <p className="md:text-[56px] text-[36px]">
                        Our Community
                    </p>
                    <div className="justify-center items-center hidden md:flex">
                        <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.51709" width="46" height="46" rx="23" fill="#DE505B"/>
                            <path d="M33.0344 22.4955L33.0363 22.4973L34.2563 23.736C34.5823 24.067 34.5796 24.6012 34.2582 24.9239L34.2562 24.9259L23.5781 35.7729C23.578 35.7729 23.578 35.7729 23.578 35.7729C23.2562 36.0996 22.7431 36.0968 22.4293 35.7748L22.4274 35.7729L11.7437 24.9259L11.3945 25.2698L11.7437 24.9259C11.4177 24.5949 11.4204 24.0607 11.7418 23.7379L11.7437 23.736L12.9637 22.4973C13.2858 22.1704 13.8107 22.1756 14.1286 22.5116C14.1287 22.5118 14.1289 22.5119 14.129 22.5121L20.4371 29.2345L21.3017 30.1559V28.8924V12.8562C21.3017 12.3831 21.673 12.0171 22.1207 12.0171H23.8793C24.327 12.0171 24.6983 12.3831 24.6983 12.8562V28.8924V30.1559L25.5629 29.2345L31.8721 22.5109L31.8727 22.5102C32.1902 22.1706 32.7127 22.1653 33.0344 22.4955Z" fill="white" stroke="#DE505B"/>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-evenly gap-4">
                    {Upcoming_Events.map((event, index) => (
                        <UpcomingCard key={index} {...event} />
                    ))}
                </div>
            </div> */}
                
            {/* Past Events */}
            <div className={`flex flex-col justify-center items-center w-screen gap-5`}>
                <div className="flex flex-row items-center gap-5 justify-left w-[80%]">
                    <p className="md:text-[56px] text-[36px]">
                        Past Events
                    </p>
                    <div className="justify-center items-center hidden md:flex">
                        <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.51709" width="46" height="46" rx="23" fill="#DE505B"/>
                            <path d="M33.0344 22.4955L33.0363 22.4973L34.2563 23.736C34.5823 24.067 34.5796 24.6012 34.2582 24.9239L34.2562 24.9259L23.5781 35.7729C23.578 35.7729 23.578 35.7729 23.578 35.7729C23.2562 36.0996 22.7431 36.0968 22.4293 35.7748L22.4274 35.7729L11.7437 24.9259L11.3945 25.2698L11.7437 24.9259C11.4177 24.5949 11.4204 24.0607 11.7418 23.7379L11.7437 23.736L12.9637 22.4973C13.2858 22.1704 13.8107 22.1756 14.1286 22.5116C14.1287 22.5118 14.1289 22.5119 14.129 22.5121L20.4371 29.2345L21.3017 30.1559V28.8924V12.8562C21.3017 12.3831 21.673 12.0171 22.1207 12.0171H23.8793C24.327 12.0171 24.6983 12.3831 24.6983 12.8562V28.8924V30.1559L25.5629 29.2345L31.8721 22.5109L31.8727 22.5102C32.1902 22.1706 32.7127 22.1653 33.0344 22.4955Z" fill="white" stroke="#DE505B"/>
                        </svg>
                    </div>
                </div>
                <div className={`flex flex-row flex-wrap justify-evenly gap-4`}>
                    {Past_Events.map((event, index) => (
                        <PastCard key={index} {...event} />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Community