'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { Section } from '../components/Section';


const mentorship_data = [
  {
    title: "Personal Mentorship",
    description: "With 1:1 Mentorship, avail personalized attention and get your doubts cleared.",
    imageSrc: "/images/student.png",
  },
  {
    title: "Live Sessions",
    description: "Attend Live interactive sessions with IIT | AIIMS mentors & get your doubts solved.",
    imageSrc: "/images/student.png",
  },
  {
    title: "Study Planner",
    description: "Get tailor-made study planners to prepare with balance for IIT JEE | NEET exams.",
    imageSrc: "/images/student.png",
  },
  {
    title: "Personal Mentorship",
    description: "With 1:1 Mentorship, avail personalized attention and get your doubts cleared.",
    imageSrc: "/images/student.png",
  },
  {
    title: "Live Sessions",
    description: "Attend Live interactive sessions with IIT | AIIMS mentors & get your doubts solved.",
    imageSrc: "/images/student.png",
  },
  {
    title: "Study Planner",
    description: "Get tailor-made study planners to prepare with balance for IIT JEE | NEET exams.",
    imageSrc: "/images/student.png",
  },
  
  // Add more features here...
]


const ServicesPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mx-auto p-16 max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl rounded-lg overflow-hidden animate-fade-in">
      {/* <h2 className="text-5xl font-bold text-center mb-8">Our <span className="text-green-600">Services</span></h2> */}
      <div className="container relative mx-auto max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl rounded-lg overflow-hidden">
        <Section
          id={1}
          title="Mentorship"
          lastWord= "Plans"
          description="Choose the plan that suits your preparation journey in the best possible way!"
          imageSrc="/images/student.png"
          imageAlt="Mentorship Plans Illustration"
        />
        <Section
          id={2}
          title="About"
          lastWord= "Mentorship"
          description="At CareerCompass, we are committed to providing you with the best mentorship experience. Our mentors give you well-researched study material to clear your NEET | IIT JEE exam, where you may get in touch with mentors and clear your issues. Our mentors will be your companions on your pressure for your exams."
          imageSrc="/images/student3.jpg"
          imageAlt="About Mentorship Illustration"
          reverse
        />
        <Section
          id={3}
          title="Crack NEET | IIT JEE with guidance from"
          lastWord='Mentors'
          description="Every aspirant of NEET | IIT JEE seeks guidance to ace their preparation journey. At CareerCompass, we provide you thing advice directly from recent toppers with new ideas in your areas and know the hurdles that come your way. You get the opportunity to connect and interact with them to gain the confidence, learn techniques to solve baffling and stay ahead of competition."
          imageSrc="/images/student2.png"
          imageAlt="Crack NEET IIT JEE Illustration"
        />
        <Section
          id={4}
          title="Benefits of CareerCompass's Mentorship"
          lastWord='Program'
          description="Proper mentorship is the key to success in NEET | IIT JEE exams. With CareerCompass, you unlock access to the right guidance from IIT | AIIMS mentors who can teach you the best question-solving journey, learn time management skills, memory retention skills, handstar written notes to study, doubt clearing and much more. We make you view your steps to become a topper, too!"
          imageSrc="/images/student4.jpg"
          imageAlt="Benefits of CareerCompass Mentorship Program Illustration"
          reverse
        />

        {/* Other Sections */}
        <section className="mt-20">
          <h2 className="text-5xl font-bold text-center mb-8"><span className="text-green-600">Mentorship</span> Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Cards */}
            {mentorship_data.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] rounded-lg border ">
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="mb-2 rounded-full object-cover"
                />
                <h3 className="text-2xl font-semibold text-center">{feature.title}</h3>
                <p className="text-gray-700 text-center my-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other sections like FAQ, Newsletter, etc., remain unchanged */}
      </div>
    </div>
  );
};

export default ServicesPage;