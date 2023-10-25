import { Link } from 'react-router-dom';

import Navbar from "./Navbar";
import Footer from "./footer";

const About = () => {
    return (
        <div className="flex flex-col gap-10 items-center w-screen">
            <Navbar />
            <div className="flex flex-col md:hidden justify-center items-center gap-5 w-screen">
                <div className="w-[80vw] h-[1px] bg-black"/>
                <div className="flex-row justify-evenly w-screen flex">
                    
                    <Link to="/exec-board">Exec Board</Link>
                    <Link to="/members">Members</Link>
                </div>
                <div className="w-[80vw] h-[1px] bg-black"/>
            </div>

            <div className="pb-10 pt-10 bg-[#5C8FDB] bg-opacity-[25%] flex flex-row flex-wrap gap-5 items-center justify-evenly">
                <div className="lg:w-[50%] text-left gap-2 flex-col flex w-[80vw]">
                    <div className="flex flex-row items-center gap-5">
                        <p className="text-[48px]">PULSE's Puropose</p>
                        <svg
                            width="35"
                            height="30"
                            viewBox="0 0 35 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.58125 2.70596C4.2 1.05501 6.34375 0.000244141 8.75 0.000244141C11.2 0.000244141 13.3438 1.05501 14.9188 2.70596C16.4937 4.40276 17.5 6.64987 17.5 9.17215C17.5 6.60402 18.5063 4.3569 20.0813 2.70596C21.7 1.05501 23.8438 0.000244141 26.25 0.000244141C28.7 0.000244141 30.8438 1.05501 32.4188 2.70596C33.9937 4.40276 35 6.64987 35 9.17215C35 11.7403 33.9937 13.9874 32.4188 15.6383L19.6707 29.0011C18.4887 30.24 16.5113 30.24 15.3293 29.0011L2.58125 15.6383C1.00625 13.9415 0 11.6944 0 9.17215C0 6.60402 1.00625 4.3569 2.58125 2.70596Z"
                                fill="#DE505B"
                            ></path>
                        </svg>
                    </div>
                    <p className="text-[24px] font-light">
                        PULSE (Pre-medical Undergraduate Learning through
                        Shadowing Experience) is a UCLA student-run physician
                        shadowing organization aiming to provide members with a
                        holistic overview of the medical field through exposure
                        to a diverse array of clinical specialties, community
                        involvement, and professional development. As an
                        undergraduate organization, we aspire to encourage our
                        members to explore the multi-faceted nature of
                        healthcare in order to challenge them intellectually,
                        broaden their perspectives, and better prepare them for
                        a career in medicine.
                    </p>
                </div>
                <div className="lg:w-[40%] w-[80vw]">
                    <img
                        src="/src/assets/about-us/pulse group jackets.jpg"
                        className=""
                    />
                </div>
            </div>

            {/* Line */}
            <div className="border-t-2 w-[80vw]" />

            {/* Second Part of the Page */}

            {/* Royce */}
            <div className="flex flex-row flex-wrap lg:flex-nowrap justify-evenly w-[100vw] xl:gap-0 gap-4">
                <div className="flex flex-col xl:w-[50%] w-[75%] justify-center text-left gap-5">
                    <div className="text-[48px] xl:text-left text-center">
                        <div className="xl:flex flex-row gap-5">
                            <p>
                                <span className="text-[#5C8FDB]">UCLA</span>'s
                                Pathway
                            </p>
                            <img
                                src="/src/assets/about-us/Red_arrow.png"
                                className="hidden xl:block"
                            />
                        </div>
                        <p>
                            To a <span className="text-[#B05454]">Career</span>{" "}
                            in <span className="underline">Healthcare</span>
                        </p>
                    </div>
                    <div className="text-[24px] font-light lg:ml-3 xl:ml-0 ml-0">
                        <p>
                            <b>PULSE</b> was founded in Spring 2015 by Anant
                            Randhawa, Amol Patel, Vandan Patel, and Karanveer
                            Syal to provide undergraduate students with the
                            opportunity to experience all aspects of the
                            hospital in their undergraduate career. Our
                            organization does not have a GPA requirement as we
                            feel that a physician's capabilities are not always
                            measured by just a number.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/src/assets/about-us/Royce.png" className="" />
                </div>
            </div>

            {/* Hospital */}

            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-5 justify-evenly w-screen items-center text-left font-light mt-10 mb-10">
                <div>
                    <img src="/src/assets/about-us/reagan.png" className="lg:w-[50vw] w-[80vw]"/>
                </div>
                <div className="lg:w-[40vw] text-[24px] w-[80vw]">
                    <p>
                        <span className="font-bold">UCLA’s Ronald Reagan Medical Center (RRMC)</span> is
                        ranked the third best hospital in the nation. As a
                        teaching hospital, RRMC provides an unparalleled
                        learning experience. PULSE collaborates with RMMC’s
                        medical students, physicians, residents, and other
                        medical personnel to offer UCLA undergraduates the
                        opportunity to understand how various departments
                        operate as a functional unit and explore the different
                        dimensions of a career in the medical field.
                    </p>
                </div>
            </div>

            {/* Shave + Zoom */}
            <div className="flex flex-row flex-wrap justify-evenly w-screen items-center text-left text-[24px] font-light">
                <div className="flex flex-col lg:w-[40%] gap-5 w-[80vw]">
                    <img src="/src/assets/about-us/shave.png"/>
                    <p>
                        <span className="font-bold">Outside the hospital</span>, PULSE prides itself as an
                        organization that promotes community involvement through
                        our annual St. Baldrick’s Brave the Shave Event, to
                        raise funds and awareness for pediatric cancer research.
                        Additionally, we host quarterly professional development
                        workshops where members have the opportunity to develop
                        and refine their career goals under the guidance of UCLA
                        physicians and PULSE alumni.
                    </p>
                </div>
                <div className="lg:w-[40%] w-fit">
                    <img src="/src/assets/about-us/group_photo.png"/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;