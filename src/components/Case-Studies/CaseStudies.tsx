import Navbar from "../Miscellaneous/Navbar";
import Footer from "../Miscellaneous/footer";

import * as constants from "./constants";

const Case_Study = () => {
    return (
        <div className="flex flex-col gap-10 items-center">
            <Navbar />

            <div className="flex flex-row flex-wrap-reverse justify-evenly gap-10">
                <div className="flex flex-col lg:w-[40vw] justify-evenly lg:text-left">
                    <p className="text-[48px]"> Clinical Symposiums </p>
                    <constants.Blurb_1/>
                </div>
                <div className="lg:w-[40vw]">
                    <img src={constants.images[0]} className="lg:w-fit "/>
                </div>
            </div>

            <div className="h-[1px] w-[80vw] bg-[#B3B3B3]"/>

            <div className="flex flex-row flex-wrap justify-evenly gap-5">
                <div className="w-[80vw] max-w-[400px]">
                    <img src={constants.images[1]}/>
                </div>
                <div className="flex justify-evenly flex-col w-[80vw] max-w-[600px] gap-5">
                    <div className="flex gap-5 items-center">
                        <svg className="hidden md:block" width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="46" height="46" rx="23" fill="#DE505B"/>
                        <path d="M20.136 27.46V25.796C20.136 24.7293 20.3813 23.94 20.872 23.428C21.384 22.8947 22.312 22.276 23.656 21.572C24.7013 21.0387 25.4267 20.5693 25.832 20.164C26.2373 19.7373 26.44 19.1507 26.44 18.404C26.44 17.4013 26.0773 16.6013 25.352 16.004C24.648 15.3853 23.6133 15.076 22.248 15.076C19.6453 15.076 18.216 16.4093 17.96 19.076H14.312C14.4613 16.6867 15.272 14.8627 16.744 13.604C18.216 12.3453 20.0933 11.716 22.376 11.716C24.6373 11.716 26.4827 12.3133 27.912 13.508C29.3627 14.6813 30.088 16.2813 30.088 18.308C30.088 19.7373 29.7253 20.8467 29 21.636C28.296 22.4253 27.208 23.204 25.736 23.972C25.0107 24.356 24.488 24.7293 24.168 25.092C23.848 25.4333 23.688 25.892 23.688 26.468V27.46H20.136ZM21.928 34.884C21.2453 34.884 20.6693 34.6707 20.2 34.244C19.752 33.8173 19.528 33.2733 19.528 32.612C19.528 31.9507 19.752 31.4173 20.2 31.012C20.648 30.5853 21.224 30.372 21.928 30.372C22.632 30.372 23.208 30.5853 23.656 31.012C24.1253 31.4173 24.36 31.9507 24.36 32.612C24.36 33.2733 24.1253 33.8173 23.656 34.244C23.208 34.6707 22.632 34.884 21.928 34.884Z" fill="white"/>
                        </svg>
                        <p className="text-[48px]">Why Do a Case Study?</p>
                    </div>
                    <div>
                        <constants.Blurb_2/>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Case_Study;