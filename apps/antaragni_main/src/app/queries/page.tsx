/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from "react";
import OrganizerCard from "../../components/OrganizerCard";
import { Freehand } from "next/font/google";

const freehand = Freehand({
  subsets: ["latin"],
  weight: "400",
});

interface Organizer {
  Name: any;
  Dept: { content: string };
  Email?: any;
  Contact?: any;
  [key: string]: any;
}

const hardcodedOrganizers: Organizer[] = [
  {
    Name: { content: "Ankit" },
    Post: { content: "Organiser" },
    Dept: { content: "Hospitality and Transport" },
    Contact: { content: "8130789405" },
    Email: { content: "ankitp24@iitk.ac.in" },
    Instagram: { content: "https://www.instagram.com/ankit_iitk28?igsh=MXBzYnYyYzkzZ3pzMg==" },
    LinkedIn: { content: "https://www.linkedin.com/in/ankit-263152322?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    Pic: { content: { url: "/contacts/ankit.webp" } }
  },
  {
    Name: { content: "Deepanshu Kashyap" },
    Post: { content: "Organizer" },
    Dept: { content: "Hospitality and Transport" },
    Contact: { content: "8384029673" },
    Email: { content: "dkris3348@gmail.com" },
    Instagram: { content: "https://www.instagram.com/idk_deepksp?igsh=MWYxOTFsaWhkbXE0bg==" },
    LinkedIn: { content: "www.linkedin.com/in/deepanshu-kashyap-hr05" },
    Pic: { content: { url: "/contacts/deepanshu.webp" } }
  },
  {
    Name: { content: "Dhruv Garg" },
    Post: { content: "Organiser" },
    Dept: { content: "Hospitality and Transport" },
    Contact: { content: "8690168344" },
    Email: { content: "dhruvg24@iitk.ac.in" },
    Instagram: { content: "https://www.instagram.com/_hruvgarg?igsh=MWNmY2pqZWFkazJ4Zg==" },
    LinkedIn: { content: "" },
    Pic: { content: { url: "/contacts/dhruv.webp" } }
  },
  {
    Name: { content: "Ish Upadhyay" },
    Post: { content: "Organiser" },
    Dept: { content: "Hospitality and Transport" },
    Contact: { content: "9826889204" },
    Email: { content: "ishupadhyay8259@gmail.com" },
    Instagram: { content: "https://www.instagram.com/better_call_ish?igsh=MWxlYjQ3dTBkaHpnaA%3D%3D&utm_source=qr" },
    LinkedIn: { content: "https://www.linkedin.com/in/ish-upadhyay-9404a1360?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
    Pic: { content: { url: "/contacts/ish.webp" } }
  },
  {
    Name: { content: "Rhythm Soan" },
    Post: { content: "Organiser" },
    Dept: { content: "Hospitality and Transport" },
    Contact: { content: "9875897824" },
    Email: { content: "rhhythmsoan01@gmail.com" },
    Instagram: { content: "https://www.instagram.com/yrrrhythm._.s/?utm_source=ig_web_button_share_sheet" },
    LinkedIn: { content: "" },
    Pic: { content: { url: "/contacts/rhythm.webp" } }
  }
];

const QueriesPage = () => {
  const [organizers] = useState<Organizer[]>(hardcodedOrganizers);
  const loading = false;

  return (
    <div className="min-h-screen bg-[#0c0b26] pt-25 text-gray-200 relative">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative flex flex-col items-center px-6 md:px-12 lg:px-20 py-12 z-10">
        <h1
          className={`${freehand.className} text-center text-5xl sm:text-6xl font-extrabold 
                      text-white mb-12
                      [text-shadow:0_0_20px_rgba(255,192,203,0.9),0_0_40px_rgba(255,192,203,0.5)]`}
        >
          For Any Queries, Please Contact
        </h1>

        {!loading && (
  <div className="w-full max-w-6xl mx-auto">
    <div className="flex flex-wrap justify-center gap-6">
      {organizers.map((organizer, index) => (
        <div
          key={index}
          className="w-full sm:w-[300px] md:w-[280px] lg:w-[260px] p-1 rounded-md flex justify-center"
        >
          <OrganizerCard member={organizer as any} />
        </div>
      ))}
    </div>
  </div>
)}


        {loading && (
          <div className="text-white mt-10 text-lg">Loading organizers...</div>
        )}
      </div>
    </div>
  );
};

export default QueriesPage;
