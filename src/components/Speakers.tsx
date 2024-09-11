import React from 'react';
import Image from 'next/image';

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  imageUrl: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "PROF. MARTA ZUREK-MORTKA",
    title: "Institute for Sustainable Technologies, Poland",
    organization: "",
    imageUrl: "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    name: "DR. AJAY MATHUR",
    title: "Director General, International Solar",
    organization: "Alliance",
    imageUrl: "data:image/jpeg;base64,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"
  },
  {
    id: 3,
    name: "MR. SUBRAMANYAM PULIPAKA",
    title: "CEO, National Solar Energy Federation of",
    organization: "India",
    imageUrl: "data:image/jpeg;base64,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"
  },
];

const SpeakerCard: React.FC<Speaker> = ({ name, title, organization, imageUrl }) => (
  <div className="relative group w-full h-72 sm:h-80 bg-white rounded-lg shadow-lg overflow-hidden"> {/* Adjust height */}
    <div className="relative w-full h-full">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition duration-300"></div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-gradient-to-t from-black via-transparent">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-2">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm">{title}</p>
          <p className="text-sm">{organization}</p>
          <div className="flex justify-center items-center mt-2 text-blue-400">
            <span className="mr-1">Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.293a1 1 0 001.414 0l4-4a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 1.414L13.586 10H3a1 1 0 100 2h10.586l-3.293 3.293a1 1 0 000 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExpertSpeakers: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 mb-2 text-center sm:text-left">
          KEYNOTES FROM THE INDUSTRY EXPERTS
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center sm:text-left">
          Expert <span className="text-blue-600">Speakers</span>
        </h2>
        
        {/* Speaker cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-hidden sm:gap-8 mb-12">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} {...speaker} />
          ))}
        </div>
        
        {/* CTA Button */}
        <a href="/Registration" rel="noopener noreferrer">
        <div className="text-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
            Get Your Tickets Now!
          </button>
        </div>
        </a>
      </div>
    </section>
  );
};

export default ExpertSpeakers;