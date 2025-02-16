import React from "react";
import { GrResume } from "react-icons/gr";
import { resumeData } from "./data";

const Resume = () => {
  return (
    <div className="flel flex-col space-y-12">
      {/* 
            
      About
      Every great design begin with
      an even better story
      
      Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.
      
            */}

      <div className="btn">
        <button className="flex flex-row gap-4 px-4 py-1 bg-transparent border rounded-lg">
          {" "}
          <GrResume className="text-xl" /> Resume
        </button>
      </div>

      <div className="mid-content text-[50px] tracking-tight  font-light">
        <p>
          Education and <span className="text-green-400">Experience</span>
        </p>
      </div>
      <div className="flex flex-col space-y-24">
        {resumeData.map((data) => {
          return (
            <div className="flex flex-col space-y-7" key={data.id}>
              <div className="flex flex-row space-x-20 ">
                <div className="bg-gray-300 h-4 w-4 rounded-full"></div>

                <h1 className="text-gray-300">{data.year}</h1>
              </div>
              <div className="ml-[95px] flex flex-col space-y-8">
                {data.work.map((job, index) => {
                  return (
                    <div className="" key={index}>
                      <div className="flex flex-col gap-1">
                        <h1 className="text-2xl"> {job.designation}</h1>
                        <h1 className="text-gray-400 text-sm">
                          {" "}
                          {job.location}
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
