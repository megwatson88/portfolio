import React from 'react';
//add image here import img from 'assets'

const resumeStyle = {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    
}


const resume = () => {
    return (
        <body >
            <div className="#resume">
                <div className="resume">
                    <div className= "container">
                    <h1>PROFESSIONAL SUMMARY </h1>
                    <p>Degreed professional with nearly 4 years’ Lab Technician experience in a variety of settings. Employed general knowledge of chemistry and basic mathematical skills contributing to organization success. Exceptionally skilled organizer and multi-tasker with an innate ability to quickly grasp skills required to succeed. Works well independently or on multi-disciplinary teams.</p>
                    <h2>EDUCATION </h2>
                    <p>Bachelor of Science Degree, Human Biology, University of Colorado at Colorado Springs, CO 3.3 GPA 2011 </p>
                    <h2>WORK EXPERIENCE </h2>
                    <h3>Middle and High School Science Teacher, St Albert Catholic Schools, Council Bluffs, IA 2013 - 2016 </h3>
                    <ul> <li>Developed innovative curriculum for chemistry and sixth grades through the use of
                        laboratories, lecture and activities resulting in a measurable change of pre and post test results </li>
                        <li>Implemented engineering courses for middle school and high school students; students
                            developed AutoDesk 3D drafting skills increasing female STEM engagement </li>
                    </ul>
                    <h3> Middle School Science Teacher, Pueblo School District 70, Pueblo, CO 2012 - 2013 </h3>
                    <ul>
                        <li>Created hands on activities, lectures, and virtual laboratory experiences allowing for controlled variables; significantly enhanced students’ understanding of the Scientific Method </li>
                        <li>Orchestrated a grade level field trip to the Denver Museum of Nature and Science aligned to Colorado state standards for 120 students </li>
                        <li>Mentored 40 students for Science Olympiad competition through chemistry, biology, and physics lessons; these students progressed to top 10% of Region to State level </li>
                    </ul>
                    <h3>Work Study, Creighton University, Omaha, NE 2006 - 2009 </h3>
                    <ul >
                        <li>Received laudatory comments for assisting with Medical-Microbiology Laboratory organization; attention-to-detail resulted in a more safe and efficient environment </li>
                        <li>Tested DNA samples using electrophoresis </li>
                        <li>Stained tissue slides using different techniques and stains to better identify anomalies within
                            tissue samples </li>
                    </ul>
                    <h3> Lifeguard Manager, City of Colorado Springs, CO 2004 - 2010 </h3>
                    <ul>
                        <li>Taught swimming lessons to approximately 225 students ranging from six months old to adults </li>
                        <li>Managed lifeguards, patrons, and site financial accounts </li>
                    </ul>
                </div>
            </div>
            </div>
        </body>
    )
};

export default resume;