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
        { name: "WebSocket", icon: "https://miro.medium.com/v2/resize:fit:1400/1*2akmsYdHNNI_YQFnqhOr0Q.jpeg" },
        { name: "React Native", icon: "https://cdn.prod.website-files.com/6470768de8327f36a7ae11a5/64e5de11811d72e03bc71dbd_react-native.png" }
    ];

    return (
        <div className="w-screen h-auto bg-gray-800 md:flex md:items-center md:align-middle md:justify-evenly">
            <div className="w-[90%] h-auto flex flex-wrap justify-center md:flex md:items-center md:align-middle bg-gray-800">
                {/* <div className="w-[300px] hidden lg:block h-auto md:w-[20%] mt-10 mb-10 ml-1 mr-1 bg-black-600">
                    <img className='p-4' src={data.avatar_url} alt="Git picture" width={300} />
                </div> */}
                <div className="w-[350px] h-auto md:w-[50%] mt-10 mb-10 ml-1 mr-1">
                    <p className="mt-1 ml-1 text-2xl font-bold text-red-700">Discover</p>
                    <h3 className="ml-1 text-4xl font-bold text-white underline">About Me</h3>
                    <p className="ml-1 mt-4 text-white text-sm pr-5">
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
