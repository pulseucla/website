import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="border-t-2 border-[#B3B3B3] flex flex-wrap flew-row justify-between w-[80vw] h-[5vh] items-center">
            <p className="font-medium">PULSE at UCLA</p>
            <p className="font-light">Copyright 2023 Innovative Design at UCLA</p>
            <div className='flex gap-2'>
                <div
                    className='cursor-pointer'
                    onClick={()=>{window.location.href="https://www.instagram.com/pulseucla/"}}
                >
                    <FaInstagram size={25}/>
                </div>
                <div
                    className='cursor-pointer'
                    onClick={()=>{
                        window.location.href="https://www.linkedin.com/company/pulseucla"
                    }}
                >
                    <FaLinkedin size={25}/>
                </div>
            </div>
        </div>
    )
}

export default Footer