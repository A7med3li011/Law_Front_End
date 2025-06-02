import React from 'react';

export default function Features() {
  return (
    <div className="bg-[#ffffff] py-16">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="font-['Hind_Vadodara'] font-bold text-[48px] leading-[50.88px] tracking-[-1%] text-[#052F72]">
          What We Do For Your Business
        </h2>
        <div className="mt-6">
          <p className="font-['Inter'] font-normal text-[18px] leading-[32px] tracking-[0%] text-[#18191F]">
            Discover how ProTrack can simplify your project management, improve your team collaboration, and ensure compliance with standards and regulations.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] p-6 w-[280px] text-center">
          <div className="flex justify-center">
            <div className="bg-[#E4EEFF] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
              </svg>
            </div>
          </div>
          <h3 className="font-['Poppins'] font-bold text-[20px] leading-[20px] tracking-[0%] text-gray-600">
            Track Violations and Fines
          </h3>
          <p className="font-['Poppins'] font-light text-[12px] leading-[12px] tracking-[0%] text-gray-600 mt-2">
            Monitor compliance, record violations, and avoid unnecessary fines.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] p-6 w-[280px] text-center">
          <div className="flex justify-center">
            <div className="bg-[#E4EEFF] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a2 2 0 00-2-2h-3v-4l-3 3-3-3v4H8a2 2 0 00-2 2v2h5"></path>
              </svg>
            </div>
          </div>
          <h3 className="font-['Poppins'] font-bold text-[20px] leading-[20px] tracking-[0%] text-gray-600">
            Streamline Project Management
          </h3>
          <p className="font-['Poppins'] font-light text-[12px] leading-[12px] tracking-[0%] text-gray-600 mt-2">
            Simplify tasks, timelines, and resource allocation for efficient project delivery.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] p-6 w-[280px] text-center">
          <div className="flex justify-center">
            <div className="bg-[#E4EEFF] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2"></path>
              </svg>
            </div>
          </div>
          <h3 className="font-['Poppins'] font-bold text-[20px] leading-[20px] tracking-[0%] text-gray-600">
            Enhance Team Collaboration
          </h3>
          <p className="font-['Poppins'] font-light text-[12px] leading-[12px] tracking-[0%] text-gray-600 mt-2">
            Foster seamless communication and coordination among team members.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] p-6 w-[280px] text-center">
          <div className="flex justify-center">
            <div className="bg-[#E4EEFF] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <h3 className="font-['Poppins'] font-bold text-[20px] leading-[20px] tracking-[0%] text-gray-600">
            Ensure Regulatory Compliance
          </h3>
          <p className="font-['Poppins'] font-light text-[12px] leading-[12px] tracking-[0%] text-gray-600 mt-2">
            Stay aligned with industry standards and avoid compliance issues.
          </p>
        </div>
      </div>
    </div>
  );
}