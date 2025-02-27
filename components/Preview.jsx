import React from "react";

const Preview = ({ resume }) => {

    return (
        <div  className="p-8 max-w-4xl text-sm mx-auto bg-white shadow-lg border border-gray-300 rounded-lg">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="font-bold">{resume.basicDetails.fullName}</h1>
                <p className=" mt-2">{resume.basicDetails.mobileNumber} | {resume.basicDetails.Email} | {resume.Address}</p>
            </div>

            {/* Education Section */}
            <section className="mb-6">
                <h2 className="font-semibold border-b-2 border-gray-300 pb-1 mb-3">EDUCATION</h2>
                <div className="flex flex-col">
                    {resume.educationDetails.map((edu, ind) => (
                        <div key={ind} className="m-2 flex justify-between gap-2">
                            <div>
                                <p>{edu.Degree}</p>
                                <div className="flex">
                                    <p className="font-bold">{edu.College}</p> <p> , {edu.City}</p>
                                </div>
                            </div>
                            <p>({edu.stDate}) - ({edu.endDate})</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
                <h2 className="font-semibold border-b-2 border-gray-300 pb-1 mb-3">SKILLS & PROFICIENCIES</h2>
                <ul className="pl-5 flex">
                    {resume.Skill.map((skill, ind) => (
                        <li key={ind}>{skill}</li>
                    ))}
                </ul>

            </section>

            {/* Internships Section */}
            <section className="mb-6">
                <h2 className="font-semibold border-b-2 border-gray-300 pb-1 mb-3">INTERNSHIPS</h2>
                {resume.experience.map((exp, ind) => (
                    <div key={ind}>
                        <p className="font-bold">{exp.JobTitle}</p>
                        <p className="text-sm italic">{exp.Employer}, {exp.City} ({exp.stDate} – {exp.endDate})</p>
                        <p className="pl-5 mt-2 s">{exp.description}</p>
                    </div>))}
            </section>

            {/* Projects Section */}
            <section className="mb-6">
                <h2 className="font-semibold border-b-2 border-gray-300 pb-1 mb-3">PROJECTS</h2>
                {resume.projects.map((pro, ind) => (
                    <div className="mb-4">
                        <p className="font-bold">{pro.Title}<span className="text-blue-600 underline cursor-pointer">LINK</span></p>
                        <p><span className="font-bold">Technologies Used:</span> {pro.Technologies}</p>
                        <p><span>{pro.description}</span></p>
                    </div>
                ))}
            </section>

            {/* Hobbies Section */}
            <section className="mb-6">
                <h2 className=" font-semibold border-b-2 border-gray-300 pb-1 mb-3">HOBBIES</h2>
                <ul className="flex pl-5 space-y-2">
                    {resume.Hobbie.map((hob, ind) => (
                        <li key={ind}>{hob}</li>
                    ))}
                </ul>
            </section>

            {/* Achievements Section */}
            {/* <section>
                <h2 className=" font-semibold border-b-2 border-gray-300 pb-1 mb-3">ACHIEVEMENTS</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Solved 500+ problems in LeetCode, GeeksforGeeks & CodeChef</li>
                    <li>5-star Badges in C++, Python & Problem Solving in HackerRank</li>
                    <li>2-Star coder at CodeChef</li>
                </ul>
            </section> */}
        </div>
    );
 }

export default Preview;
