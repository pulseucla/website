import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
    title: string;
    link: string;
  }
  
  const NavLink: React.FC<NavLinkProps> = ({ title, link }) => (
      <Link to={`/${link}`} className='text-black font-light hover:text-blue-600 hover:underline-offset-4 hover:underline
        '>
          {title}
      </Link>
  );

const Navbar = ({}) => {
    const [onHover, setHover] = useState(false)
    const [buttonBG, setButton] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [dropDown, setDrop] = useState(false)
    const [dropDown1, setDrop1] = useState(false)
    const [dropDown2, setDrop2] = useState(false)
    const [dropDown3, setDrop3] = useState(false)

    return(
        <nav className={`w-screen self-center flex flex-col items-center`}>
            <div className='flex items-center justify-evenly flex-row w-full md:p-0 pl-2 pr-2'>
                <div className='text-left'>
                    <Link to="/" className='font-semibold md:text-[23px] text-[16px] text-black hover:text-black'>PULSE at UCLA</Link>
                </div>
                <div className='items-center text-center justify-center hidden md:flex'>
                    <div className='grid grid-cols-4 gap-4'>
                        <div
                            className='justify-center items-center'
                            onMouseEnter={() =>setDrop1(true) }
                            onMouseLeave={() => {setDrop1(false)}}
                        > 
                            <div><NavLink link="about-us" title="ABOUT US"/></div>
                            { dropDown1 ? (
                            <ul className='absolute ml-[1rem] bg-white gap-2'>
                                <li><NavLink title="Exec Board" link="exec-board"/></li>
                                <li><NavLink title="Members" link="members"/></li>
                            </ul>
                            ) : (<></>)}
                        </div>
                        <div
                            className='justify-center items-center'
                            onMouseEnter={() =>setDrop(true) }
                            onMouseLeave={() => {setDrop(false)}}
                        > 
                            <div><p className='font-light hover:text-blue-600 cursor-pointer'> SHADOWING </p></div>
                            { dropDown ? (
                            <ul className='absolute ml-[0.5rem] bg-white gap-2'>
                                <li><NavLink title="Departments" link="departments"/></li>
                                <li><NavLink title="Case Studies" link="clinical-symposiums"/></li>
                            </ul>
                            ) : (<></>)}
                        </div>
                        <NavLink title="RECRUITMENT" link="recruitment"/>
                        <div
                            className='justify-center items-center'
                            onMouseEnter={() =>setDrop3(true) }
                            onMouseLeave={() => {setDrop3(false)}}
                        > 
                            <div><NavLink link="community" title="COMMUNITY"/></div>
                            { dropDown3 ? (
                            <ul className='absolute ml-[0.5rem] bg-white gap-2'>
                                <li><NavLink title="St. Baldrick's Event" link="st-baldricks"/></li>
                            </ul>
                            ) : (<></>)}
                        </div>
                    </div>
                </div>
                <div className='md:flex justify-end align hidden'>
                    <Link to="/recruitment">
                        <div 
                            className={`rounded-[15px] border-2 border-black pl-4 pr-4 bg-${buttonBG ? "black" : "white"} self-left`}
                            onMouseEnter={() => {
                                setHover(true);
                                setButton(true);
                            }}
                            onMouseLeave={() => { 
                                setHover(false); 
                                setButton(false);
                            }}
                        >
                            <p className={`text-${onHover ? "white" : "black" }`}> JOIN US</p>
                        </div>
                    </Link>
                </div>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? "./assets/close.svg" : "./assets/menu.svg" }
                        alt="menu"
                        className="w-[28px] h-[28px] object-container cursor-pointer "
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${!toggle ? "hidden" : "flex"} p-6 
                    absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl bg-white`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            <li><NavLink title="ABOUT US" link="about-us"/></li>
                            <li>
                                <div
                                    onClick={()=>setDrop2(!dropDown2)}
                                ><p className={`font-light ${dropDown2 ? "text-blue-600" : "text-black"}`}> SHADOWING </p></div>
                                <ul className={`${!dropDown2 ? "hidden": "block"}`}>
                                    <li><NavLink title="Departments" link="departments"/></li>
                                    <li><NavLink title="Case Studies" link="clinical-symposiums"/></li>
                                </ul>
                            </li>
                            <li><NavLink title="RECRUITMENT" link="recruitment"/></li>
                            <li><NavLink title="COMMUNITY" link="community"/></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <svg width="1321" height="41" viewBox="-1 -1 1321 41" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden xl:block'>
                    <path d="M1318.5 26.5H237.5L234.5 20.5L229.5 38.5L223.5 0L217.5 32L212.5 18L209 26.5H0" stroke="#181824"></path>
                </svg>
            </div>
        </nav>
    )
}

export default Navbar
