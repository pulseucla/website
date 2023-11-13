import { useState } from 'react';

import Navbar from '../Miscellaneous/Navbar';
import Footer from '../Miscellaneous/footer';
import Card from '../Miscellaneous/Card';
import { cards } from '../../constants';
import { Link } from 'react-router-dom';
import { Blurb_1, Blurb_2, images } from './constants';

const Home = ({}) => {
    const [joinTeam, setTeam] = useState(false)
    const [learn, setLearn] = useState(false)
    const [button, setButton] = useState(false)
    return (
        <div className="flex flex-col justify-center items-center flex-wrap gap-10 pb-10">
            <Navbar />

            <div
                className={`bg-[url("/assets/hero.png")] xl:w-[1281px] xl:h-[633px] h-[500px] flex flex-col justify-end text-white flex-wrap m-0`}
            >
                <div className="mb-5 flex-wrap flex-row flex">
                    <div className="flex items-center justify-left md:ml-[5rem] ml-1 lg:w-[80%]">
                        <p className="font-medium xl:text-[50px] lg:text-[48px] text-[24px]">
                            {" "}
                            Explore your interest in healthcare{" "}
                        </p>
                        <svg
                            width="92"
                            height="31"
                            viewBox="-1 -1 92 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden lg:block"
                        >
                            <path
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                d="M89.8125 14.2705C84.1289 24.7907 73.4045 27.4208 68.7528 27.4208C58.0961 27.9365 47.6931 17.4505 43.6334 11.1762C37.2901 0.34668 51.4991 -5.06814 53.5289 8.08205C55.0513 -5.46183 69.2603 0.346592 63.1707 11.1762C54.726 26.1943 39.2473 27.1631 21.8125 28.1943C13.5888 28.6807 0.8125 26.1943 0.8125 26.1943"
                            />
                        </svg>
                    </div>
                    <div className=" flex w-[80%] md:ml-[5rem] ml-1 items-center justify-center flex-wrap flex-row lg:flex-nowrap">
                        <p className="font-light text-wrap lg:text-[24px] text-left text-[16px]">
                            {Blurb_1}
                        </p>
                        <div
                            className={`pl-2 pr-2 h-10 lg:h-16 lg:w-[40%] lg:pl-0 lg:pr-0 ${
                                joinTeam ? "bg-black " : "bg-white"
                            } 
                                ${
                                    joinTeam ? "text-white" : "text-black"
                                } flex items-center gap-2 justify-center cursor-pointer`}
                            onClick={() => {
                                window.location.href =
                                    "/pulse-site/recruitment";
                            }}
                            onMouseEnter={() => {
                                setTeam(true);
                            }}
                            onMouseLeave={() => {
                                setTeam(false);
                            }}
                        >
                            <p className="lg:text-[24px] text-[16px]">
                                Join our team
                            </p>
                            <svg
                                width="44"
                                height="18"
                                viewBox="0 0 44 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden xl:block"
                            >
                                <path
                                    fill="#181824"
                                    stroke={joinTeam ? "white" : "black"}
                                    strokeWidth="0.5"
                                    d="M33.5074 1.8405L33.5084 1.8396L34.4153 0.983063C34.7035 0.710885 35.1732 0.712171 35.456 0.982146L35.457 0.983107L43.399 8.47971C43.6791 8.74427 43.6777 9.16377 43.4 9.42324L43.399 9.42416L35.457 16.9247C35.1688 17.1968 34.6991 17.1956 34.4163 16.9256L34.4153 16.9247L33.5084 16.0681C33.227 15.8024 33.2318 15.3735 33.5209 15.1118L38.4432 10.683L38.9269 10.2479L38.2762 10.2472L1.19023 10.2086H1.18997C0.771018 10.2086 0.459473 9.89441 0.459473 9.53261V8.29796C0.459473 7.93623 0.770888 7.6221 1.18971 7.62197C1.1898 7.62197 1.18988 7.62197 1.18997 7.62197L38.2757 7.66055L38.9284 7.66123L38.4432 7.2247L33.5203 2.79539L33.5199 2.79507C33.228 2.53345 33.2233 2.10602 33.5074 1.8405Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:hidden flex-col flex"></div>

            <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="flex justify-center">
                    <img
                        src={images[0]}
                        className="lg:w-[70%] sm:w-[40%]"
                    />
                </div>
                <div className="flex flex-col w-[50%] gap-5 justify-center items-center">
                    <div>
                        <div className="flex gap-4 items-center w-full">
                            <p className="font-medium xl:text-[50px] text-[48px]">
                                We are PULSE
                            </p>
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
                        <div className="text-left font-light xl:text-[22px] text-[16px]">
                            <p>
                                {Blurb_2}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`md:w-[30%] w-[30vw] border-2 border-black rounded-[10px] h-14 ${
                            learn ? "bg-black " : "bg-white"
                        } 
                            ${
                                learn ? "text-white" : "text-black"
                            } flex items-center gap-2 justify-center cursor-pointer`}
                        onMouseEnter={() => {
                            setLearn(true);
                        }}
                        onMouseLeave={() => {
                            setLearn(false);
                        }}
                    >
                        <Link to={`/about-us`}>
                            <p>Learn More</p>
                        </Link>
                    </div>
                </div>
            </div>

            <svg
                height="3"
                viewBox="-1 -1 1048 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block lg:mb-20"
            >
                <line
                    x1="-4.37114e-08"
                    y1="0.500122"
                    x2="1046"
                    y2="0.500031"
                    stroke="#B3B3B3"
                ></line>
            </svg>

            <div className="overflow-hidden flex-col gap-10 w-[100%] items-center flex m-0 lg:mb-20">
                <div className="flex-col flex">
                    <div className="flex-row flex gap-5 items-center">
                        <p className="md:text-[48px] text-[36px] font-serif">
                            Get Professional
                        </p>
                        <div className="hidden md:block border-2 w-[174px] h-[42px] bg-[#667aff] border-[#667aff] rounded-[100px]" />
                    </div>
                    <div className="flex-row flex gap-5 items-center">
                        <div className="hidden md:block border-2 w-[255px] h-[42px] bg-[#de505b] border-[#de505b] rounded-[100px]" />
                        <p className="md:text-[48px] text-[36px]  font-serif">
                            Development
                        </p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap xl:flex-nowrap gap-7 justify-center overflow-hidden">
                    {cards.map((cards, index) => (
                        <Card key={index} {...cards} />
                    ))}
                </div>
            </div>

            <svg
                height="3"
                viewBox="-1 -1 1048 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block"
            >
                <line
                    x1="-4.37114e-08"
                    y1="0.500122"
                    x2="1046"
                    y2="0.500031"
                    stroke="#B3B3B3"
                ></line>
            </svg>

            <div className="flex flex-col items-center justify-center gap-20">
                <div className=" md:w-[50vw] w-[100%]">
                    <div className="md:text-[48px] text-[36px] font-serif flex-row flex gap-4 items-center">
                        <p> Don't Miss a Beat</p>
                        <svg
                            width="55"
                            height="42"
                            viewBox="-1 -1 55 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden md:block"
                        >
                            <path
                                d="M53 27.3438L50 21.3438L45 39.3438L39 0.84375L33 32.8438L28 18.8438L24.5 27.3438H0"
                                stroke="#181824"
                                strokeWidth="2"
                            ></path>
                        </svg>
                    </div>
                    <div className="text-right md:text-[24px] text-[16px] font-serif">
                        <p>FILL OUT OUR INTEREST FORM</p>
                    </div>
                </div>
                <div
                    className={`w-[40vw] font-serif text-[24px] ${
                        button
                            ? "text-[#DE505B] bg-white border-2 border-black"
                            : "text-white bg-[#DE505B]"
                    } cursor-pointer`}
                    onMouseEnter={() => {
                        setButton(true);
                    }}
                    onMouseLeave={() => {
                        setButton(false);
                    }}
                >
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfsRG3qoHKN-pNMu4PFYS0PbGMxn9dKJfZ3kPTCc5Q6OXwXIg/viewform">
                        SIGN UP
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}



export default Home

