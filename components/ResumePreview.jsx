import React from 'react';

const ResumePreview = ({ resume }) => {
  return (
    <div className="bg-gray-200 p-5 h-screen ">
      <h1 className="text-2xl font-bold">Resume Preview</h1>

      {/* Basic Details */}
      <div className="mt-4 p-3 bg-white shadow rounded">
        <h2 className="text-lg font-semibold">Basic Details</h2>
        <p><strong>Name:</strong> {resume.basicDetails.fullName}</p>
        <p><strong>Mobile:</strong> {resume.basicDetails.mobileNumber}</p>
        <p><strong>Email:</strong> {resume.basicDetails.Email}</p>
        <p><strong>Address:</strong> {resume.basicDetails.Address}</p>
      </div>

      {/* Professional Details */}
      <div className="mt-4 p-3 bg-white shadow rounded">
        <h2 className="text-lg font-semibold">Professional Details</h2>
        <p><strong>Designation:</strong> {resume.ProfessionalDetails.Profession}</p>
        <p><strong>Work fileld:</strong> {resume.ProfessionalDetails.Field}</p>
      </div>
    </div>
  );
};

export default ResumePreview;
