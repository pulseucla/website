// Navigation Links
export const navlinks = [
    {
        title: "ABOUT US",
        link: "about-us"
    },
    {
        title: "SHADOWING",
        children:{
            title: "Departments",
            link: "departments"
        }

    }
];

// THIS IS THE HOME PAGE
const cards = [
    {
        title: "SHADOWING",
        image: "./assets/cards/shadow.svg",
        description: "Learn from the nation’s top medical professionals.",
        link: "departments"
    },
    {
        title: "CLINICAL SYMPOSIUMS",
        image: "./assets/cards/clinical.svg",
        description: "Conduct meaningful research in your field",
        link: "clinical-symposiums"
    },
    {
        title: "VOLUNTEERING",
        description: "Help make our community a better place",
        image: "./assets/cards/heart.svg",
        link: "community"
    },
    {
        title: "ST BALDRICKS",
        description: "Support research on childhood cancer",
        image:"./assets/cards/St_Bladricks.svg",
        link: "st_baldricks"
    }
];

// THIS IS FOR DEPARTMENTS PAGE
const departments = [
    {
        department: "Internal Medicine",
        description:
            "The Internal Medicine (IM) service is led by the IM rounding team, which consists of the attending physician, IM residents, and 1 rotating medical student. The IM rounding team conducts daily rounds where they visit the patients on their service. During rounds, the medical team presents the state of the patient, shares updates that happened overnight, discusses plans for treatment, and addresses the family’s/patient’s questions and concerns. Additionally, the IM team occasionally sees patients in the Emergency Room who need to be admitted into the hospital for further management. The IM department fosters an incredibly collaborative and thought-provoking space where PULSE members can ask questions and synthesize as much as they can from the physician-patient interaction that they observe.",
    },
    {
        department: "Pediatric Cardiology and Nephrology",
        description: "The Pediatrics Cardiology and Nephrology service is led by the Pediatrics GOLD rounding team, which consists of the attending physician and Pediatric residents. The Pediatrics GOLD rounding team conducts daily family-centered rounds on patients admitted for cardiology or nephrology-related pathologies. During rounds, the medical team presents the state of the patient, shares updates that happened overnight, discusses plans for treatment, and addresses the family’s/patient’s questions and concerns. Despite the complex cases this team manages on a daily basis, the Pediatrics Cardiology and Nephrology department fosters an incredibly collaborative and brave space where PULSE members can ask questions and synthesize as much as they can from the physician-patient interaction that they observe.",
    },
    {
        department: "General Pediatrics",
        description: "The General Pediatrics service is led by the Pediatrics SILVER rounding team, which consists of the attending physician, Pediatric residents, and rotating medical students. The SILVER team sees a wide spectrum of childhood morbidities. The Pediatrics rounding team conducts daily family-centered rounds where they visit the patients and families on their service. During rounds, the medical team presents the state of the patient, shares updates that happened overnight, discusses plans for treatment, and addresses the family’s/patient’s questions and concerns. Despite the strenuous number of patients this team sees on a daily basis, the Pediatrics department fosters an incredibly collaborative and brave space where PULSE members can ask questions and synthesize as much as they can from the physician-patient interaction that they observe.",
    },
    {
        department: "Neurology Stroke",
        description: "The Neurology Stroke service is led by the Stroke rounding team, which consists of the attending physician, Neurology Stroke residents, and rotating medical students. The Stroke rounding team conducts daily rounds where they visit the patients on their service. During rounds, the medical team presents the state of the patient, shares updates that happened overnight, discusses plans for treatment, and addresses the family’s/patient’s questions and concerns. Additionally, the Stroke team occasionally sees patients in the Emergency Room who present as an active Code Stroke or who need to be admitted into the Neurology wards for further management. While shadowing the team, PULSE members have also observed radiation scans, administration of TPA, and other life-threatening co-morbidities that manifest as a result of a stroke. The Neurology Stroke team fosters an incredibly collaborative and thought-provoking space where PULSE members can ask questions and synthesize as much as they can from the physician-patient interaction that they observe.",
    },
    {
        department: "General Neurology",
        description: "The General Neurology Department specializes in treating nervous system related injuries and disorders. As there is an emphasis on teamwork and education, the rounding team consists of an attending physician, neurology residents, and rotating medical school students. PULSE members have the unique opportunity to observe the clinical course of patients from admittance to discharge. As Neurology encompasses a broad array of neurological disorders, members are exposed to a wide variety of detection and diagnosis methods, such as imaging and physical examinations. Furthermore, members can observe the decision-making process and application of numerous treatment and management plans. Ultimately, members can gain insight into the team-oriented and highly engaging dynamic of the General Neurology Department.",
    },
    {
        department: "Cardiac Critical Care Unit",
        description: "The Cardiology Critical Care Unit (CCU) service is led by the CCU rounding team, which consists of an attending physician, Internal Medicine residents, and rotating medical students. Cardiology is such a vast field within medicine, where individuals seeking to become cardiologists must specialize in specific cardiology fellowships, one of them being the CCU. Within the CCU, our PULSE members have had the chance to observe patients get admitted into the CCU, discharged from the CCU, and visit the cardiac catheterization lab where different procedures are conducted. Additionally, the CCU team also sees patients in the emergency room who may need to be admitted to the CCU upon presentation of cardiac symptoms. In extreme cardiac emergencies, our PULSE members accompany the medical team onto the helipad to retrieve patients flown into Ronald Reagan Medical Center. The CCU is an intensely-paced environment that offers many unique learning opportunities for our members. ",
    },
    {
        department: "Cardiology Outpatient",
        description: "The Cardiology Outpatient service is led by an attending cardiologist who is sometimes joined by internal medicine residents, and or rotating medical students. Through the Cardiology Outpatient service PULSE students get to watch attendings take patient history, provide a full work up, and create a treatment plan. Attendings encourage learning by letting PULSE students listen to rare heart murmurs and explaining complex imaging, labs, or EKGs of patients. The Cardiology Outpatient service is busy with back to back patients exposure and intensive, hands-on learning experiences.",
    },
    {
        department: "Cardio Consults",
        description: "The Cardio Consults Department specializes in treating cases of cardiovascular disorders that are present in conjunction with disorders in other parts of the body. The cases that this department work with are complex cases that come from all over the hospital, so this team spends a majority of its time problem-solving and workshopping potential solutions. The rounding team consists of medical students, residents, a nurse practitioner, and a supervising attending. These cases are a unique opportunity for PULSE members to view the interdisciplinary nature of medicine. Even though this medical team is cardiology focused, they pull from a vast overall knowledge of the human body in order to understand how any decision will affect not just the heart but the patient’s health overall. Members are able to learn from physicians’ decision making, thought process, and ability to adapt to frequently changing circumstances. Ultimately, members can gain insight into a very challenging but fulfilling aspect of medicine.",
    },
    {
        department: "Emergency Medicine",
        description: "The Emergency Medicine Department understandably has no rounding team and is by far the most flux in nature of all the services that members shadow. Instead of the common scheduled visit, the calls that ED physicians and nurses receive are incredibly spontaneous, necessitating the ability to work rapidly under constraints on information, time, and resources. The beds are filled from the day to the night, so the Emergency team works like a well-oiled machine to effectively respond to the widest range of cases that could possibly enter Ronald Reagan. This department is an especially valuable experience for our members because they are not constrained with a task: their only job is to learn as much as they can. And from seeing illnesses to traumas to acute crises, the Emergency Medicine Department is the epitome of what a member would want to see on their shift, and the last opportunity they’d want to miss. ",
    },
    {
        department: "Radiation Oncology ",
        description: "The Radiation Oncology department is run through an outpatient clinic in the Medical Plaza of Ronald Reagan Hospital. Throughout the day, Radiation Oncology attendings and residents meet with numerous patients each day, discussing therapeutic options, forming treatment plans with cancer patients, designing molds for radiation devices, and addressing any questions or concerns that are brought up by the patients or their families. While the service lacks a rounding team due its nature as outpatient, the vast amount of services the department offers serve as incredible learning opportunities for PULSE members.",
    },
];

// THIS IS FOR COMMUNITY PAGE
const Community_Intro = {
    Top_Half: "Volunteer in",
    Bottom_Half: "Our Community",
    Text: "Lorem ipsum dolor sit amet consectetur. Nibh ornare libero venenatis pellentesque vivamus enim. Ut feugiat eget lacus id."
}

const Upcoming_Events = [
    {
        date: "SAT APRIL 29", 
        time: "11-3 pm", 
        event_name: "UCLA Blood Donation", 
        details: "", 
        borderC: "border-[#F56565]",
        bg: "bg-[#F56565]"
    },
    {
        date: "SAT APRIL 29", 
        time: "11-3 pm", 
        event_name: "UCLA Blood Donation", 
        details: "", 
        borderC: "border-[#93ACE0]",
        bg: "bg-[#93ACE0]"
        
    },
    {
        date: "SAT APRIL 29", 
        time: "11-3 pm", 
        event_name: "UCLA Blood Donation", 
        details: "", 
        borderC: "border-[#F56565]",
        bg: "bg-[#F56565]"
    },
]

const Past_Events = [
    {
        event_name: "UCLA Blood Donation",
        image: "./assets/community/blood_donation.jpeg"
    },
    {
        event_name: "UCLA Blood Donation",
        image: "./assets/community/blood_donation.jpeg"
    },
    {
        event_name: "UCLA Blood Donation",
        image: "./assets/community/blood_donation.jpeg"
    },
    {
        event_name: "UCLA Blood Donation",
        image: "./assets/community/blood_donation.jpeg"
    },
    {
        event_name: "UCLA Blood Donation",
        image: "./assets/community/blood_donation.jpeg"
    },
    {
        event_name: "UCLA Blood Donation",
        image: "./assets/community/blood_donation.jpeg"
    },
]

// THIS IS FOR THE SAINT BALDRICK'S PAGE
const Image_slider = [
    {
        image: "./assets/departments/pulse andy zach shadow.jpg"
    },
    {
        image: "./assets/departments/pulse nat shadow.jpg"
    },
    {
        image: "./assets/departments/pulse nath shadow.jpg"
    },
    {
        image: "./assets/departments/pulse andy zach shadow.jpg"
    },
    {
        image: "./assets/departments/pulse nat shadow.jpg"
    },
    {
        image: "./assets/departments/pulse nath shadow.jpg"
    },
]


// THIS IS FOR RECRUITMENT PAGE
const Why_Apply = [
    {
        icon: "./assets/recruitment/hands.png",
        title: "Physician Shadowing",
        border_color: "border-[#F56565]",
        text_color: "text-[#F56565]",
        description: "PULSE offers a unique physician shadowing opportunity, allowing undergraduate students to rotate through seven different departments at the Ronald Reagan UCLA Medical Center while interacting with medical students, physicians, residents, and other medical personnel to explore the rewards and obstacles encountered in various clinical specialties."
    },
    {
        icon: "./assets/recruitment/person.png",
        title: "Professional Development",
        border_color: "border-[#93ACE0]",
        text_color: "text-[#93ACE0]",
        description: "PULSE offers a unique physician shadowing opportunity, allowing undergraduate students to rotate through seven different departments at the Ronald Reagan UCLA Medical Center while interacting with medical students, physicians, residents, and other medical personnel to explore the rewards and obstacles encountered in various clinical specialties."
    },
    {
        icon: "./assets/recruitment/building.png",
        title: "Physician Shadowing",
        border_color: "border-[#F56565]",
        text_color: "text-[#F56565]",
        description: "PULSE offers a unique physician shadowing opportunity, allowing undergraduate students to rotate through seven different departments at the Ronald Reagan UCLA Medical Center while interacting with medical students, physicians, residents, and other medical personnel to explore the rewards and obstacles encountered in various clinical specialties."
    }
    
]

const Recruitment_Timeline = [
    {
        icon: "./assets/recruitment/01.png",
        step: "01: Applications Open",
        description: "We have one admission cycle each academic year. We open the application in Winter Quarter and conduct interviews during Spring quarter. New members begin shadowing the following Fall quarter."
    },
    {
        icon: "./assets/recruitment/02.png",
        step: "02: Interviews",
        description: "We have one admission cycle each academic year. We open the application in Winter Quarter and conduct interviews during Spring quarter. New members begin shadowing the following Fall quarter."
    },
    {
        icon: "./assets/recruitment/03.png",
        step: "03: Interviews",
        description: "We have one admission cycle each academic year. We open the application in Winter Quarter and conduct interviews during Spring quarter. New members begin shadowing the following Fall quarter."
    },
    {
        icon: "./assets/recruitment/04.png",
        step: "04: Shadowing Begins!",
        description: "We have one admission cycle each academic year. We open the application in Winter Quarter and conduct interviews during Spring quarter. New members begin shadowing the following Fall quarter."
    },
]

const Info_Sesh = [
    {
        details: "Session #1: Wednesday, February 22nd, 5-6pm PT (Week 7, VIRTUAL)"
    },
    {
        details: "Session #2: Monday, February 27th, 6-7pm PT (Week 8, Neuroscience Research Building 132)"
    },
    {
        details: "Pop in with PULSE Q&A: Thursday, March 2nd, 7-8:30pm PT (Week 8, VIRTUAL)"
    },
    {
        details: "Q&A with the Directors: Monday, March 13th, 6-7pm PT (Week 10, VIRTUAL)"
    },

]

// THIS IS FOR EXECUTIVE BOARD PAGE
const Board_Members = [
    {
        image: "./assets/board/faculty.png", 
        name: "Dr. Amanda Kosack", 
        title: "Faculty Chair and Advisor", 
        description: "I received my undergraduate degree in biology and psychology at Barnard College of Columbia University. I completed my medical training at the David Geffen School of Medicine at UCLA, and my general pediatrics residency at UCLA Mattel Children’s Hospital. I currently serve as the Chair of the UCLA Santa Monica Patient Family Centered Care Committee as well as the pediatric clerkship site director at Mattel Children's Hospital. I am also the director of the Sub-I for general and complex pediatric care at Mattel Children's Hospital and Santa Monica Medical Center. I was recently appointed an Educator for Excellence at the David Geffen School of Medicine and am active in the development of the medical school curriculum. My interests focus on medical student education, improvement of family bedside rounds, and improving communication with Spanish speaking families. I began working with PULSE in 2015 when we incorporated pediatrics into the rotations. Then I became the Faculty Chair. It has been such a rewarding experience working with all the students. I know that when I was an undergraduate opportunities in the medical field influenced my decision to become a future pediatrician. It is exciting to teach the students during rounds and show them a glimpse into a career a medicine. I am always impressed by their clinical symposium presentations and how far they come throughout each quarter."
    },
     {
        image: "./assets/members/Ali Al-Saleem.JPG", 
        name: "Ali Al-Saleem", 
        title: "Director of Hospital Operations", 
        description:"PULSE has been instrumental to my growth as a student-leader and as a first-generation student pursuing a future within healthcare. As someone who came to UCLA lacking the knowledge and resources it takes to succeed academically and professionally, the community, mentorship, and professional development PULSE offers were fundamental to my sense of conviction in knowing that I belong within this space. After my first year in PULSE, I knew that I wanted to give back to the club and cultivate a space for members to grow personally and professionally. Serving as the Director of Hospital Operations and leading this incredible organization over the past year has been a challenging feat, but I am extremely proud of the progress we have been able to make and the direction the organization is heading towards. Facilitating shadowing opportunities, overseeing the different projects board members put on, and mentoring my Co-Director, Joseph, have been incredibly rewarding. I am grateful to call everyone I have crossed paths with my family!"
     },
     {
        image: "./assets/members/Joseph Lee.jpg", 
        name: "Joseph Lee", 
        title: "Director of Hospital Operations", 
        description:"If there’s one thing I could tell any student remotely interested in a career within healthcare, it would be to join PULSE. It sounds incredibly cliche and trite, but it’s such a rarity to come across a group of highly ambitious and goal-oriented people, nevertheless those that hold as much compassion and support for others as my peers in this organization. I count myself deeply lucky to have been able to surround myself with them for my years at UCLA. Along the same vein, working with my Co-Director Ali Al-Saleem has truly been a rich and rewarding experience—whether that’s fostering relationships between physicians and students, listening to members rave about their stories on shift, or hunkering down to organize shadowing for the quarter. In every major aspect, I am indelibly bettered because of my opportunity to serve as a Director of Hospital Operations. My hope now is to continue to give back to PULSE all that I have been given, this year and the next."
     },
      {
        image: "./assets/members/Sai Ramadas.jpg", 
        name: "Sai Ramadas", 
        title: "Director of Fundraising", 
        description:"My role as the Director of Fundraising is incredibly fulfilling, as it allows me to craft engaging experiences for PULSE members while raising vital funds for pediatric research through St. Baldrick's Foundation. Being part of the PULSE community has profoundly influenced me, offering a blend of professionalism and camaraderie. Through diverse professional development events and insightful shadowing experiences at RRMC, I gained a comprehensive understanding of the healthcare field, appreciating the collaborative essence of medicine. Furthermore, PULSE's socials and outreach events have provided a sense of belonging and support within the premedical community at UCLA, fostering an environment that uplifts and empowers. I aspire to deepen my comprehension of research funding mechanisms and explore innovative approaches to orchestrate successful fundraising initiatives."
     },
     {
        image: "./assets/members/Monay Martinez.jpg", 
        name: "Monay Martinez", 
        title: "Director of Outreach", 
        description:"PULSE is constantly fostering relationships with other people and has allowed me to improve on my communication with other directors. I have been tasked with organizing different volunteering events so members can also contribute to giving back to their communities. Los Angeles has a large demographic of people from various backgrounds who are in need of basic supplies and medical care. With such a large cohort we can offer much our time to assisting and attending these events so there are volunteers who can actively participate is resource to these communities. Even by offering our time in attendance we can help maintain events occur with helping with other minute activities."
     },
      {
        image: "./assets/members/natalie k.jpg", 
        name: "Natalie Keung", 
        title: "Director of Public Relations", 
        description:"PULSE has given me a community of supportive individuals whom I can learn from professionally and personally. I loved being able to hear about so many of our members' stories during shadowing, outreach events, and our socials. As Director of Public Relations, I strive to share these stories on our social media by spotlighting members who want to share their experiences shadowing or their general experiences in our organization. We hope to encourage our members to grow as individuals and reach their career goals while making deep connections along the way!"
     },
      {
        image: "./assets/members/Fernanda Madrazo.jpg", 
        name: "Fernanda Madrazo", 
        title: "Director of Recruitment and Member Engagement", 
        description:"PULSE has offered me so many role models and mentors who have helped guide my future career. It’s extremely rewarding to be a guiding figure for the younger people in PULSE, but also being able to receive guidance and friendships from everyone. It’s an amazing community that we have cultivated in the last year."
     },
      {
        image: "./assets/members/Katherine Fu.jpg", 
        name: "Katherine Fu", 
        title: "Director of SRP", 
        description:"PULSE has exposed me to a diverse array of patient-physican interactions, providing invaluable insight into the realities of patient care. Following each patient's clinical course alongside the care team has not only affirmed my desire to pursue medicine, but also to apply the biopsychosocial model of assessment and treatment. I am passionate about promoting a holistic perspective of the medical field and hope to foster learning about the social determinants of health through the Student Research Program. Therefore, it is especially rewarding to lead the PULSE Clinical Symposium, which gives students the chance to present case studies and engage in meaningful discussions with healthcare professionals. Ultimately, I am extremely thankful to be surrounded by such a supportive community and look forward to all of the exciting opportunities for personal and professional growth this year!"
     },
     {
        image: "./assets/members/Margaret Pham.jpg", 
        name: "Margaret Pham", 
        title: "Co-Director of St. Baldrick's", 
        description:"As one of the Directors of St. Baldrick’s, I help organize the many moving parts throughout the year that go into making our annual Brave the Shave event possible! Our St. Baldrick’s Committee raises funds and awareness for childhood cancer by connecting with the greater LA community, local businesses, and the Mattel Children’s Hospital.  My experiences in PULSE have fostered and affirmed my decision to pursue a career in medicine. PULSE has helped me gain a more intimate insight into the physician-patient relationship and explore a diverse range of specialities. By enriching my understanding of the healthcare field, PULSE has introduced me to new interests to which I have continued to explore within research and other opportunities! So many of my experiences in PULSE in shadowing and our professional development events further examine the many aspects of healthcare, including social determinants of health, to help educate us on a holistic view of medicine. One of the most notable parts of my PULSE experience has been the wonderful and diverse community from which I am so grateful to learn from each and every day!"
          },
          {
        image: "./assets/members/Nithya Narapa Reddy.jpg", 
        name: "Nithya Narapa Reddy", 
        title: "Co-Director of St. Baldrick's", 
        description:"PULSE has fostered my professional development by challenging me to think about medicine and social health in a multifaceted manner. Med students, residents, and attending I have met through PUlSE have offered me invaluable insight and advice that have helped me grow as a future medical professional. The most rewarding part of PULSE outside of being a part of the most amazing community of people is being able to learn from so many different people including mentors and peers alike. More so, being able to put on Brave the Shave in support of children with pediatric cancer through PULSE has been immensely eye opening and has been challenging and gratifying all in one."
          },
]

// THIS IS FOR MEMBERS PAGE
const Pulse_Members = [
    {
        image: "./assets/members/Adanna Chimara.jpg",
        name: "Adanna Chimara (she/her)",
        major: "Psychobiology",
        year: "2025",
        fact: "I met Bill Clinton in 7th grade!",
    },
     {
        image: "./assets/members/Alexandra Tabacu.jpeg",
        name: "Alexandra Tabacu (she/her)",
        major: "Human Biology and Society",
        year: "2026",
        fact: "I didn’t know narwhals existed until I turned 18…",
    },
    {
        image: "./assets/members/Ali Al-Saleem.JPG",
        name: "Ali Al-Saleem (he/him)",
        major: "Human Biology and Society",
        year: "2024",
        fact: "I can cut our eta by 10 min no matter where we’re going",
    },
    {
        image: "./assets/members/Ashley Huh.jpg",
        name: "Ashley huh (she/her))",
        major: "Microbiology, Immunology, and Molecular Genetics ",
        year: "2025",
        fact: "When I was 6, I had beef with the tooth fairy",
    },
    {
        image: "./assets/members/Ashley Presnell.jpg",
        name: "Ashley Presnell (she/her))",
        major: "Microbiology, Immunology, and Molecular Genetics ",
        year: "2025",
        fact: "My morning routine is playing wordle",
    },
    {
        image: "./assets/members/August Blum.jpg",
        name: "August Blum (he/him)",
        major: "Psychobiology ",
        year: "2024",
        fact: "I have visual snow, which basically means my entire visual field has a mild and colorful TV static filter.",
    },
    {
        image: "./assets/members/Austin M.jpg",
        name: "Austin McBride (he/him)",
        major: "Physiological Sciences ",
        year: "2024",
        fact: "I have 60 Spotify playlists all named after colors.",
    },
    {
        image: "./assets/members/Bless Nadeak.jpg",
        name: "Blesscamal Nadeak (he/him)",
        major: "Biology",
        year: "2024",
        fact: "As a kid, I injured my nose and when I sleep it's uncomfortable to nose breath so I mouth breath but not by choice. ",
    },
    {
        image: "./assets/members/Chidera Anthony-Wise.jpg",
        name: "Chidera Anthony-Wise (she/her)",
        major: "Human Biology and Society",
        year: "2024",
        fact: "I performed at California Adventure with my show choir in middle school! ",
    },
    {
        image: "./assets/members/Chloe Remigio.jpg",
        name: "Chloe Remigio (she/her)",
        major: "Human Biology and Society",
        year: "2026",
        fact: "I've never eaten a peanut butter and jelly sandwich.",
    },
    {
        image: "./assets/members/Elizabeth Iniguez-Figueroa.jpg",
        name: "Elizabeth Iniguez (she/her)",
        major: "Physiogical Sciences",
        year: "2024",
        fact: "I love being in nature, and will drive hours to Joshua tree just to look at the stars.",
    },
    {
        image: "./assets/members/Erick Nedd.jpg",
        name: "Erick Nedd (he/him)",
        major: "Microbiology, Immunology, and Molecular Genetics",
        year: "2024",
        fact: "I love learning new languages! I currently speak English, Spanish, French Patois and a little bit of Chinese.",
    },
      {
        image: "./assets/members/Fernanda Madrazo.jpg",
        name: "Fernanda Madrazo (she/her)",
        major: "",
        year: "2025",
        fact: "I love learning new languages! I currently speak English, Spanish, French Patois and a little bit of Chinese.",
    },
      {
        image: "./assets/members/George Kokotsis.jpg",
        name: "George Kokotsis (he/him)",
        major: "Undeclared- Life Sciences",
        year: "2026",
        fact: "I live a days worth of flying away from UCLA",
    },
    {
        image: "./assets/members/Grace.jpg",
        name: "Grace Hajjar (she/her)",
        major: "Physiological Sciences",
        year: "2024",
        fact: "I can remember the food I ordered at a restaurant over a year ago. ",
    },
    {
        image: "./assets/members/Harshi Pandian.jpg",
        name: "Harshitha Pandian (she/her)",
        major: "Molecular, Cell, and Developmental Biology",
        year: "2025",
        fact: "Every vacation I have been on, I have always found a way to injure myself!",
    },
    {
        image: "./assets/members/Helen Benitez .jpg",
        name: "Helen Benitez (she/her)",
        major: "Physiological Sciences",
        year: "2026",
        fact: "I've been Boxing and doing Muay Thai for +10 years.",
    },
    {
        image: "./assets/members/Jacob Dao.jpg",
        name: "Jacob Dao (he/him)",
        major: "Psychobiology",
        year: "2024",
        fact: "I've gotten my toe stuck in an escalator.",
    },
    {
        image: "./assets/members/Janitzy Felix.jpg",
        name: "Janitzy Felix (she/her)",
        major: "Physiological Sciences",
        year: "2024",
        fact: "I am missing a small organ, guess which one (hint: it stores bile) ",
    },
     {
        image: "./assets/members/Jasmine_Nguyen.JPG",
        name: "Jasmine Nguyen (she/her)",
        major: "Environmental Sciences",
        year: "2025",
        fact: "I take the cheese off my pizzas and reassemble the toppings on top. ",
    },
     {
        image: "./assets/members/Jayasree Peri.jpg",
        name: "Jayasree Peri (she/her)",
        major: "Microbiology, Immunology, and Molecular Biology",
        year: "2023",
        fact: "I will point out almost every dog I see to you ",
    },     {
        image: "./assets/members/Jonathan Phan.jpg",
        name: "Jonathan Phan (he/him)",
        major: "Bioengineering and Physiological Sciences",
        year: "2024",
        fact: "I once slept for a whole day (26hrs to be exact) after finals week. I legit skipped a day of life. ",
    },
         {
        image: "./assets/members/Jordan O_Brien.jpg",
        name: "Jordan O'Brien (she/her)",
        major: "Physiological Sciences",
        year: "2024",
        fact: "I'm going to backpack through the Sierra Nevada mountains during my gap year!",
    },
     {
        image: "./assets/members/Joseph Lee.jpg",
        name: "Joseph Lee (he/him)",
        major: "Human Biology and Society",
        year: "2025",
        fact: "I do the NYT mini-crossword every single day ",
    },
    {
        image: "./assets/members/Katherine Fu.jpg",
        name: "Katherine Fu (she/her)",
        major: "Psychobiology",
        year: "2025",
        fact: "I flew from tokyo to sf on my birthday so I experienced my birthday twice (in both time zones). ",
    },
    {
        image: "./assets/members/Kimberly Cabrera.jpg",
        name: "Kimberly Cabrera (she/her)",
        major: "Biology",
        year: "2025",
        fact: "I have a pet bunny! ",
    },
    {
        image: "./assets/members/Madison Chan.JPG",
        name: "Madison Chan (she/her)",
        major: "Public Health",
        year: "2025",
        fact: "I love cooking and experimenting with new recipes!",
    },
    {
        image: "./assets/members/Maeve Settle.jpg",
        name: "Maeve Settle (she/her)",
        major: "Physiological Sciences",
        year: "2025",
        fact: "I know the lyrics to every single Taylor Swift song.",
    },
    {
        image: "./assets/members/Margaret Pham.jpg",
        name: "Margaret Pham (she/her)",
        major: "Biochem",
        year: "2024",
        fact: "",
    },
    {
        image: "./assets/members/Marlen Hernandez.jpg",
        name: "Marlen Hernandez (she/her)",
        major: "Physiological Sciences",
        year: "2024",
        fact: "I've never broken/fractured a bone *knock on wood*",
    },
     {
        image: "./assets/members/Mathangi Swaminathan.jpg",
        name: "Mathangi Swaminathan (she/her)",
        major: "Psychobiology",
        year: "2026",
        fact: "I love collecting earrings from different places around the world- over a 100 pairs and still counting!",
    },
    {
        image: "./assets/members/Michelle Yeung.jpg",
        name: "Michelle Yeung (she/her)",
        major: "Physiological Sciences",
        year: "2026",
        fact: "I have watched over 75 k-dramas.",
    },
    {
        image: "./assets/members/Monay Martinez.jpg",
        name: "Monay Martinez (she/her)",
        major: "Physiological Sciences",
        year: "2024",
        fact: "II have 12 biological siblings!",
    },
      {
        image: "./assets/members/natalie k.jpg",
        name: "Natalie Keung (she/her)",
        major: "Biology",
        year: "2025",
        fact: "I love being outdoors but I'm allergic to practically everything outside. ",
    },
    {
        image: "./assets/members/NatalieNguyen.jpg",
        name: "Natalie Nguyen (she/her)",
        major: "Psychobiology",
        year: "2026",
        fact: "I can move my left ear, and I’m currently working on moving the right one.",
    },
    {
        image: "./assets/members/Nithya Narapa Reddy.jpg",
        name: "Nithya Narapa Reddy (she/her)",
        major: "Human Biology and Society",
        year: "2025",
        fact: "I can crack my wrists",
    },
     {
        image: "./assets/members/Sai Ramadas.jpg",
        name: "Sai Ramadas (he/him)",
        major: "Molecular, Cell, and Developmental Biology",
        year: "2024",
        fact: "I only found out this summer that a pickle is just a cucumber.",
    },
    {
        image: "./assets/members/Sanam Patel.jpg",
        name: "Sanam Patel (she/her)",
        major: "Human Biology and Society",
        year: "2025",
        fact: "Justin Baldoni dmed me",
    },
    {
        image: "./assets/members/Serena Gill.jpg",
        name: "Serena Gill (she/her)",
        major: "Molecular, Cell, and Developmental Biology",
        year: "2025",
        fact: "I’ve never lost a game of Connect 4. ",
    },
      {
        image: "./assets/members/Simer Shera.jpg",
        name: "Simer Shera (she/her)",
        major: "Microbiology, Immunology, and Molecular Genetics",
        year: "2025",
        fact: "I have two english bulldogs who used to be social media famous ",
    },
    {
        image: "./assets/members/Stuti Pradhan.jpg",
        name: "Stuti Pradhan (she/her)",
        major: "Human Biology and Society",
        year: "2024",
        fact: "I was in a music video with my dance team!",
    },
        {
        image: "./assets/members/Thomas Tran.jpg",
        name: "Thomas Tran (he/him)",
        major: "Microbiology, Immunology, and Molecular Genetics",
        year: "2026",
        fact: "I was a D1 athlete for three months",
    },
    
    
]

export { cards, departments, Community_Intro, Upcoming_Events, Past_Events, Why_Apply, 
    Recruitment_Timeline, Info_Sesh, Board_Members, Pulse_Members, Image_slider };