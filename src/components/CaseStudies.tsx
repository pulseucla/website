import Navbar from "./Navbar";
import Footer from "./footer";

const Case_Study = () => {
    return (
        <div className="flex flex-col gap-10 items-center">
            <Navbar />

            <div className="flex flex-row flex-wrap-reverse justify-evenly gap-10">
                <div className="flex flex-col lg:w-[40vw] justify-evenly lg:text-left">
                    <p className="text-[48px]"> Clinical Symposiums </p>
                    <p className="font-light">
                        The PULSE clinical symposium is a quartely event where
                        members present a case study observed while shadowing at
                        the Ronald Reagan Medical Center. The patient’s clinical
                        course is detailed through relevant medical history,
                        detection, treatment, management, recovery, and
                        demographic trends related to the condition.
                        Furthermore, physicians, medical students, and PULSE
                        members engage in meaningful discussions led by
                        presenters. PULSE offers students the opportunity to
                        delve deeper into the world of medical research through
                        quarterly clinical symposiums. Members work in groups of
                        2-3 students to explore a medical condition of their
                        choice and subsequently present their findings to UCLA
                        physicians and fellow PULSE members.
                    </p>
                </div>
                <div>
                    <img src="/src/assets/clinical-symposiums/hero.png" className="lg:w-fit "/>
                </div>
            </div>

            <div className="h-[1px] w-[80vw] bg-[#B3B3B3]"/>

            {/* <div className="text-[48px] flex flex-row items-center gap-5">
                <p>Our Work</p>
                <svg className="md:block hidden" width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="46" height="46" rx="23" fill="#DE505B"/>
                    <path d="M33.0344 22.4784L33.0363 22.4803L34.2563 23.719C34.5823 24.0499 34.5796 24.5841 34.2582 24.9069L34.2562 24.9089L23.5781 35.7558C23.578 35.7558 23.578 35.7558 23.578 35.7559C23.2562 36.0825 22.7431 36.0797 22.4293 35.7577L22.4274 35.7558L11.7437 24.9088L11.3945 25.2527L11.7437 24.9088C11.4177 24.5779 11.4204 24.0437 11.7418 23.7209L11.7437 23.719L12.9637 22.4803C13.2858 22.1533 13.8107 22.1585 14.1286 22.4945C14.1287 22.4947 14.1289 22.4948 14.129 22.495L20.4371 29.2174L21.3017 30.1388V28.8753V12.8391C21.3017 12.366 21.673 12 22.1207 12H23.8793C24.327 12 24.6983 12.366 24.6983 12.8391V28.8753V30.1388L25.5629 29.2174L31.8721 22.4939L31.8727 22.4931C32.1902 22.1535 32.7127 22.1482 33.0344 22.4784Z" fill="white" stroke="#DE505B"/>
                </svg>

            </div> */}

            {/* <div className="h-[1px] w-[80vw] bg-[#B3B3B3]"/> */}

            <div className="flex flex-row flex-wrap justify-evenly gap-5">
                <div className="w-[80vw] max-w-[400px]">
                    <img src="/src/assets/clinical-symposiums/why.png"/>
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
                        <p className="font-light text-left">
                            Through these projects, members enhance their knowledge of research methodology 
                            and gain insight into the importance of collaboration in the clinical environment 
                            all while understanding the need to remain inquisitive as life-long learners in the 
                            medical field. <br/><br/>

                            Members may also enroll in SRP 99 or 199 to receive course 
                            credit for their shadowing involvement and case study presentations.
                        </p>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Case_Study;