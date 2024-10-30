import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-600">
        About Us
      </h1>
      <p className="mb-6 text-gray-700 text-lg leading-relaxed">
        We are a team of passionate developers committed to building innovative
        solutions that enhance user experiences. Our mission is to deliver
        high-quality software that meets the needs of our clients and their
        customers.
      </p>
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-500">
        Our Vision
      </h2>
      <p className="mb-6 text-gray-700 text-lg leading-relaxed">
        To empower businesses through technology and drive digital
        transformation in every industry.
      </p>
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-500">
        Our Values
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700 text-lg leading-relaxed">
        <li>Integrity</li>
        <li>Collaboration</li>
        <li>Innovation</li>
        <li>Excellence</li>
      </ul>
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-500">
        Our Team
      </h2>
      <p className="mb-6 text-gray-700 text-lg leading-relaxed">
        Our diverse team of experts brings together a wide range of skills and
        experiences. We work closely with our clients to understand their needs
        and provide tailored solutions.
      </p>
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-blue-500">
        Special Thanks
      </h2>
      <p className="mb-6 italic text-gray-700 text-lg leading-relaxed">
        A special thank you to our team lead, Mr. Nirmit Kotadiya, for his
        exceptional guidance and support throughout this project. Additionally,
        we extend our gratitude to all the incredible individuals who have
        contributed, both directly and indirectly. Your hard work, creativity,
        and unwavering support have made this journey possible. We appreciate
        each and every one of you!
      </p>
    </div>
  );
};

export default AboutUs;
