import React from "react";
import resuma from '../../assets/gourav-cv.pdf'
import { useLoaderData } from 'react-router-dom';

export default function About() {
    const data = useLoaderData();
    const skills = [
        { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/128/174/174854.png" },
        { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
        { name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png" },
        { name: "JavaScript", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12SMucV1yoXW-nEEb70ZXugC-RC7VM43xFg&s" },
        { name: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
        { name: "ReactJS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-RS3Oeb0xs2q4aJmYZ4FGWnFuPnn4yFNHg&s" },
        { name: "NodeJS", icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png" },
        { name: "MongoDB", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s" },
        { name: "Django", icon: "data:image/png;base64,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" },
        { name: "React Native", icon: "https://cdn.prod.website-files.com/6470768de8327f36a7ae11a5/64e5de11811d72e03bc71dbd_react-native.png" }
    ];

    return (
        <div className="w-screen h-auto bg-gray-800 md:flex md:items-center md:align-middle md:justify-evenly">
            <div className="w-[90%] h-auto flex flex-wrap justify-center md:flex md:items-center md:align-middle bg-gray-800">
                {/* <div className="w-[300px] hidden lg:block h-auto md:w-[20%] mt-10 mb-10 ml-1 mr-1 bg-black-600">
                    <img className='p-4' src={data.avatar_url} alt="Git picture" width={300} />
                </div> */}
                <div className="w-[350px] h-auto md:w-[50%] mt-10 mb-10 ml-1 mr-1 flex flex-col items-center">
                    <p className="mt-1 ml-1 text-2xl font-bold text-red-700">Discover</p>
                    <h3 className="ml-1 text-4xl font-bold text-white underline">About Me</h3>
                    <p className="ml-1 mt-4 text-white text-sm pl-6">
                        Hello! I’m Gourav Saini, a budding developer with a passion for creating innovative solutions. I recently graduated with a degree in B.Tect from AKTU, where I developed a strong foundation in web development, programming languages, Mobile App development etc.
                    </p>

                    <a
                        className="ml-1 bg-red-600 text-white mt-4 mb-5 hover:bg-blue-800 inline-block px-4 py-2 rounded"
                        href="gourav-cv.pdf"
                        download="Gourav_Resume.pdf"
                    >
                        Download CV
                    </a>

                </div>

                {/* Skills Section */}
                <div className="w-full md:w-[80%] flex flex-wrap justify-center mt-10 rounded-lg shadow-lg p-5">
                    <h2 className="w-full text-3xl font-bold text-white mb-4 text-center underline shadow-lg shadow-red-400">My Skills</h2>
                    {skills.map(skill => (
                        <div key={skill} className="m-2 bg-gray-900 w-[150px] h-[100px]  rounded-lg shadow-lg shadow-red-900 border-2 border-red-700 flex items-center justify-center hover:bg-red-600 transition duration-300">
                            <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                className="w-10 h-10 mr-2" // Adjust size and margin as needed
                            />
                            <p className="text-white text-lg font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
