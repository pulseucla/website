import { useState } from 'react'

interface prop {
    title: string;
    description: string;
    link: string;
    image: string;
}

const Card : React.FC<prop> = ({title, description, link, image}) => {
    const [button, setButton] = useState(false)

    return(
        <div className='flex flex-col justify-center items-center text-center gap-10 border-2 w-[30%] h-[712px] border-black min-w-[312px]'>
            <div>
                <img src={image}/>
            </div>
            <div className='text-[24px] w-[80%]'>
                <p className='font-regular'>{title}</p><br/>
                <p className='font-light'>{description}</p>
            </div>
            <div 
                className={`w-[50%] border-2 border-black rounded-[10px] h-14 ${ button ? "bg-black ": "bg-white"} 
                    ${ button ? "text-white" : "text-black"} flex items-center gap-2 justify-center font-serif cursor-pointer`}
                onClick={() =>{
                    window.location.href = `${link}`
                }}
                onMouseEnter={() => {
                    setButton(true)
                }}
                onMouseLeave={() => { 
                    setButton(false)
                }}
            >
                <p>Learn More</p>
            </div>
        </div>
    )
}

export default Card