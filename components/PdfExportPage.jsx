import React, { useRef } from "react";
// import { Button } from "@/components/ui/button"; // Import UI components if needed
// import ReactToPdf, { usePDF } from "react-to-pdf";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import axios from "axios";


const PdfExportPage = ({ resume }) => {

  const resumeRef= useRef(null);

  // const { toPDF, targetRef } = usePDF({ filename: "example.pdf" });

  const toPDF = async ()=>{
    const element = resumeRef.current;
    if(!element) return;

    const canvas = await html2canvas(element,{scale:5});
    const data = canvas.toDataURL('image/png');

    const doc = new jsPDF({
      orientation:"portrait",
      unit:"px",
      format:"a4"
    });

    const img = doc.getImageProperties(data);
    const width= doc. internal. pageSize.getWidth( )
    const height = (img.height * width) / img.width;

    doc.addImage(data,"PNG",0,0,width,height);
    doc.save('example.pdf')
  }

  const saveToDb = async()=>{
    try{
      const response = await axios.post("http://localhost:3000/resumes",resume);
      console.log("successfully saved");
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <div >

      <div  className="flex justify-between">
        <button className="my-download-btn mb-5" onClick={()=>saveToDb()}>Save</button>

        <button className="my-download-btn mb-5" onClick={() => toPDF()}>Download</button>
      </div>

      <div className="p-4 border f bg-white rounded-lg" >
        <div ref={resumeRef} className="p-8 max-w-4xl text-sm mx-auto border rounded-lg">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="font-bold">{resume.basicDetails.fullName}</h1>
            <p className="mt-2">
              {resume.basicDetails.mobileNumber} | {resume.basicDetails.Email} | {resume.Address}
            </p>
          </div>

          {/* Education Section */}
          <section className="mb-6">
            <h2 className="font-semibold border-b pb-1 mb-3">EDUCATION</h2>
            <div className="flex flex-col">
              {resume.educationDetails.map((edu, ind) => (
                <div key={ind} className="m-2 flex justify-between gap-2">
                  <div>
                    <p>{edu.Degree}</p>
                    <div className="flex">
                      <p className="font-bold">{edu.College}</p> <p>, {edu.City}</p>
                    </div>
                  </div>
                  <p>({edu.stDate}) - ({edu.endDate})</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-6">
            <h2 className="font-semibold border-b pb-1 mb-3">SKILLS & PROFICIENCIES</h2>
            <ul className="pl-5 flex">
              {resume.Skill.map((skill, ind) => (
                <li key={ind}>{skill}</li>
              ))}
            </ul>
          </section>

          {/* Internships Section */}
          <section className="mb-6">
            <h2 className="font-semibold border-b pb-1 mb-3">INTERNSHIPS</h2>
            {resume.experience.map((exp, ind) => (
              <div key={ind}>
                <p className="font-bold">{exp.JobTitle}</p>
                <p className="text-sm italic">
                  {exp.Employer}, {exp.City} ({exp.stDate} – {exp.endDate})
                </p>
                <p className="pl-5 mt-2">{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Projects Section */}
          <section className="mb-6">
            <h2 className="font-semibold border-b pb-1 mb-3">PROJECTS</h2>
            {resume.projects.map((pro, ind) => (
              <div className="mb-4" key={ind}>
                <p className="font-bold">
                  {pro.Title}
                  <span className="underline cursor-pointer"> LINK</span>
                </p>
                <p>
                  <span className="font-bold">Technologies Used:</span> {pro.Technologies}
                </p>
                <p>{pro.description}</p>
              </div>
            ))}
          </section>

          {/* Hobbies Section */}
          <section className="mb-6">
            <h2 className="font-semibold border-b pb-1 mb-3">HOBBIES</h2>
            <ul className="flex pl-5 space-y-2">
              {resume.Hobbie.map((hob, ind) => (
                <li key={ind}>{hob}</li>
              ))}
            </ul>
          </section>

          {/* Achievements Section (commented out) */}
          {/* <section>
            <h2 className="font-semibold border-b pb-1 mb-3">ACHIEVEMENTS</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Solved 500+ problems in LeetCode, GeeksforGeeks & CodeChef</li>
              <li>5-star Badges in C++, Python & Problem Solving in HackerRank</li>
              <li>2-Star coder at CodeChef</li>
            </ul>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default PdfExportPage;
