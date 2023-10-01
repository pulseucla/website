import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
    title: string;
    link: string;
  }
  
  const NavLink: React.FC<NavLinkProps> = ({ title, link }) => (
      <a href={`/${link}`} className='text-black font-light hover:text-blue-600 hover:underline-offset-4 hover:underline
        '>
          {title}
      </a>
  );

const Navbar = ({}) => {
    const [onHover, setHover] = useState(false)
    const [buttonBG, setButton] = useState(false)
    const [dropDown, setDrop] = useState(false)

    return(
        <nav className={`w-screen self-center flex flex-col items-center justify-between`}>
            <div className='grid grid-cols-6 gap-10 items-center'>
                <div className='col-start-1 col-span-1  text-left'>
                    <Link to="/" className='font-semibold text-[23px] text-black hover:text-black'>PULSE at UCLA</Link>
                </div>
                <div className='col-start-2 col-span-3 items-center text-center justify-center'>
                    <div className='grid grid-cols-4 gap-4'>
                        <NavLink title="ABOUT US" link="about-us"/>
                        <div
                            className='justify-center items-center'
                            onMouseEnter={() =>setDrop(true) }
                            onMouseLeave={() => {setDrop(false)}}
                        > 
                            <div><p className='font-light hover:text-blue-600'> SHADOWING </p></div>
                            { dropDown ? (
                            <ul className='absolute ml-[1rem] bg-white gap-2'>
                                <li><NavLink title="Departments" link="departments"/></li>
                                <li><NavLink title="Case Studies" link="clinical-symposiums"/></li>
                            </ul>
                            ) : (<></>)}
                        </div>
                        <NavLink title="RECRUITMENT" link="recruitment"/>
                        <NavLink title="COMMUNITY" link="community"/>
                    </div>
                </div>
                <div className='col-start-5 col-span-1 flex justify-end align'>
                    <div 
                        className={`rounded-[15px] border-2 border-black w-[60%] bg-${buttonBG ? "black" : "white"} self-left`}
                        onClick={() =>{window.location.href = '/recruitment'}}
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
