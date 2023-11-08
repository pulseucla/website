const Pulse_Purpose = "PULSE (Pre-medical Undergraduate Learning through Shadowing Experience) is a UCLA student-run physician shadowing organization aiming to provide members with a holistic overview of the medical field through exposure to a diverse array of clinical specialties, community involvement, and professional development. As an undergraduate organization, we aspire to encourage our members to explore the multi-faceted nature of healthcare in order to challenge them intellectually, broaden their perspectives, and better prepare them for a career in medicine."

const images = [
    "./assets/about-us/pulse group jackets.jpg",
    "./assets/about-us/Royce.png",
    "./assets/about-us/reagan.png",
    "./assets/about-us/shave.png",
    "./assets/about-us/group_photo.png",
]

const Blurb_1 = () => {
    return (
        <>
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
        </>
    )
}

const Blurb_2 = () => {
    return (
        <>
            <p>
                <b>UCLA’s Ronald Reagan Medical Center (RRMC)</b> is ranked the
                third best hospital in the nation. As a teaching hospital, RRMC
                provides an unparalleled learning experience. PULSE collaborates
                with RMMC’s medical students, physicians, residents, and other
                medical personnel to offer UCLA undergraduates the opportunity
                to understand how various departments operate as a functional
                unit and explore the different dimensions of a career in the
                medical field.
            </p>
        </>
    );
}

const Blurb_3 = () => {
    return (
        <>
            <p>
                <b>Outside the hospital</b>, PULSE
                prides itself as an organization that promotes community
                involvement through our annual St. Baldrick’s Brave the Shave
                Event, to raise funds and awareness for pediatric cancer
                research. Additionally, we host quarterly professional
                development workshops where members have the opportunity to
                develop and refine their career goals under the guidance of UCLA
                physicians and PULSE alumni.
            </p>
        </>
    );
}

export { Pulse_Purpose, Blurb_1, Blurb_2, Blurb_3, images }