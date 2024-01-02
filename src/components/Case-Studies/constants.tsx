const Blurb_1 = () => {
    return (
        <>
            <p className="font-light">
                The PULSE clinical symposium is a quartely event where members
                present a case study observed while shadowing at the Ronald
                Reagan Medical Center. The patient’s clinical course is detailed
                through relevant medical history, detection, treatment,
                management, recovery, and demographic trends related to the
                condition. Furthermore, physicians, medical students, and PULSE
                members engage in meaningful discussions led by presenters.
                PULSE offers students the opportunity to delve deeper into the
                world of medical research through quarterly clinical symposiums.
                Members work in groups of 2-3 students to explore a medical
                condition of their choice and subsequently present their
                findings to UCLA physicians and fellow PULSE members.
            </p>
        </>
    );
}

const Blurb_2 = () => {
    return (
        <>
            <p className="font-light text-left">
                Through these projects, members enhance their knowledge of
                research methodology and gain insight into the importance of
                collaboration in the clinical environment all while
                understanding the need to remain inquisitive as life-long
                learners in the medical field. <br />
                <br />
                Members may also enroll in SRP 99 or 199 to receive course
                credit for their shadowing involvement and case study
                presentations.
            </p>
        </>
    );
}

const images = [
    "./assets/clinical-symposiums/pulse clinical symposium.heic",
    "./assets/clinical-symposiums/pulse clinical symposium.heic",
]

export { Blurb_1, Blurb_2, images }
