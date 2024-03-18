import Navbar from "../Miscellaneous/Navbar";
import Footer from "../Miscellaneous/footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import SimpleSlider from '../Miscellaneous/Slider';
import * as constants from "./constants";

const SaintBaldrick = () => {
    return (
        <div className="flex flex-col items-center w-[99vw] max-w-screen gap-10 overflow-hidden">
            <Navbar />
            <div className="flex flex-col w-screen gap-10 lg:ml-[30vh] items-center lg:items-start">
                <div className="flex flex-col lg:text-left w-full gap-5">
                    <p className="text-[24px]">AN ANNUAL TRADITION</p>
                    <div className="flex flex-row text-[48px] gap-5 justify-center lg:justify-start">
                        <p>St. Baldrick's Event</p>
                        <img
                            src="./assets/st-baldricks/red_squiggly.png"
                            className="md:block hidden"
                        />
                    </div>
                    <div className="flex flex-row gap-5 flew-wrap">
                        <div className="overflow-hidden md:h-[500px] md:w-[500px] relative">
                            <img src={constants.images[0]} className="object-center"/>
                        </div>
                        <div className="md:text-[32px] text-[24px] font-light lg:text-left max-w-[650px] text-wrap">
                            <p className="wrap">
                                {constants.Blurbs.Main_Blurb.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[70vw] h-[2px] bg-black/25 mt-10 mb-10" />

            <div className="flex flex-row flex-wrap w-screen gap-10 lg:ml-[30vh] items-center lg:justify-start justify-center">
                <div className="lg:w-[30vw]">
                    <img src={constants.images[1]} />
                </div>
                <div className="flex flex-col text-[24px] text-left lg:w-[50vw] gap-5 justify-center lg:h-[100%] w-[80vw]">
                    <p className="font-bold">{constants.Blurbs.Second_Blurb.title}</p>
                    <p className="font-light text-[16px] md:text-[24px]">
                        {constants.Blurbs.Second_Blurb.text}
                    </p>
                </div>
            </div>

            {/* <div className="flex flex-col text-[24px] lg:text-left md:items-start items-center w-screen lg:ml-[30vh] gap-2">
                <p className="font-bold">TAKE A LOOK</p> */}
                {/* Add a carousel */}
                {/* <SimpleSlider />
            </div> */}

            <div className="flex flex-col text-[24px] lg:text-left lg:ml-[30vh] items-center lg:items-start w-screen text-wrap mb-10">
                <p className="font-bold">{constants.Blurbs.Third_Blurb.title}</p>
                <p className="font-light w-[80vw]">
                    {constants.Blurbs.Third_Blurb.text}
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default SaintBaldrick;