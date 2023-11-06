import Navbar from "./Navbar";
import Footer from "./footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './Slider';


const SaintBaldrick = () => {
    return (
        <div className="flex flex-col items-center w-screen gap-10 overflow-hidden">
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
                    <div className="overflow-hidden">
                        <img src="./assets/st-baldricks/hero.png" />
                    </div>
                </div>
                <div className="md:text-[36px] text-[24px] font-light lg:text-left max-w-[1025px]">
                    PULSE partners with the St. Baldrick’s Foundation to spread
                    awareness about childhood cancer and raise funds for
                    research grants. According to the Foundation, more than
                    175,000 children are diagnosed with cancer each year—a
                    number that simply cannot be tolerated.
                </div>
            </div>

            <div className="w-[70vw] h-[2px] bg-black/25 mt-10 mb-10" />

            <div className="flex flex-row flex-wrap w-screen gap-10 lg:ml-[30vh] items-center lg:justify-start justify-center">
                <div className="lg:w-[30vw]">
                    <img src="./assets/st-baldricks/pulse_field.png" />
                </div>
                <div className="flex flex-col text-[24px] text-left lg:w-[50vw] gap-5 justify-center lg:h-[100%] w-[80vw]">
                    <p className="font-bold">OUR PAST YEARS</p>
                    <p className="font-light text-[16px] md:text-[24px]">
                        Each year, PULSE hosts a St. Baldrick’s event to bring
                        the cause to the UCLA campus and get the student and
                        medical communities involved in the fight. During Spring
                        Quarter, our event will be hosted in Bruin Plaza on the
                        UCLA campus. Everyone is encouraged to participate in
                        any way they would like, whether it’s by volunteering to
                        shave your head in support, pledging to join the fight,
                        donating toward leading-edge research, or simply
                        spreading the word! Further details will come, but get
                        ready for a day of head shaving, education, generosity,
                        music, games, and refreshments!
                    </p>
                </div>
            </div>

            <div className="flex flex-col text-[24px] lg:text-left lg:items-start w-screen lg:ml-[30vh] gap-2">
                <p className="font-bold">TAKE A LOOK</p>
                {/* Add a carousel */}
                <SimpleSlider />
            </div>

            <div className="flex flex-col text-[24px] lg:text-left lg:ml-[30vh] lg:items-start w-screen text-wrap mb-10">
                <p className="font-bold">OUR PAST YEARS</p>
                <p className="font-light w-[80vw]">
                    The St. Baldrick’s Foundation has given 923 research grants
                    to 359 institutions in 26 countries—but we won't stop there!
                    Childhood cancer is an underfunded cause. More children die
                    of cancer than of any other disease in the United States
                    according to the Foundation. Join us in supporting those in
                    need by spreading awareness of the disease and raising funds
                    for specially chosen research grants!
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default SaintBaldrick;