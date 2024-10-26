import React from "react";
import { useLoaderData } from 'react-router-dom';

export default function About() {
    const data = useLoaderData();
    const skills = [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Tailwind CSS",
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "WebSocket",
        "React Native"
    ];

    return (
        <div className="w-screen h-auto bg-gray-800 md:flex md:items-center md:align-middle md:justify-evenly">
            <div className="w-[90%] h-auto flex flex-wrap justify-center md:flex md:items-center md:align-middle bg-gray-800">
                <div className="w-[300px] hidden lg:block h-auto md:w-[20%] mt-10 mb-10 ml-1 mr-1 bg-black-600">
                    <img className='p-4' src={data.avatar_url} alt="Git picture" width={300} />
                </div>
                <div className="w-[350px] h-auto md:w-[50%] mt-10 mb-10 ml-1 mr-1">
                    <p className="mt-1 ml-1 text-2xl font-bold text-red-700">Discover</p>
                    <h3 className="ml-1 text-4xl font-bold text-white underline">About Me</h3>
                    <p className="ml-1 mt-4 text-white text-sm pr-5">
                        My name is Gourav Saini. I am a developer. I am from Meerut. I completed my B.Tech from R.D Engineering College. I completed my 12th class from Kishan Inter College.
                    </p>
                    <div className="w-auto rounded-2xl border-2 shadow-lg shadow-red-900 border-red-600 h-auto p-2 ml-1 mt-4 flex justify-evenly">
                        <div className="w-[100px] md:w-[45%]">
                            <p className="text-sm text-white mt-2">Name: Gourav Saini</p>
                            <p className="text-sm text-white mt-2">PH. Number: 6397018504</p>
                            <p className="text-sm text-white mt-2">Role: Web Developer</p>
                        </div>
                        <div className="w-[100px] md:w-[45%]">
                            <p className="text-sm text-white mt-2">DOB: 20/08/2004</p>
                            <p className="text-sm text-white mt-2">City: Meerut</p>
                            <p className="text-sm text-white mt-2">gourav saini</p>
                        </div>
                    </div>
                    <button className="ml-1 bg-red-600 text-white mt-4 mb-5 hover:bg-blue-800" type="button">Download CV</button>
                </div>

                {/* Skills Section */}
                <div className="w-full md:w-[80%] flex flex-wrap justify-center mt-10 rounded-lg shadow-lg p-5">
                    <h2 className="w-full text-3xl font-bold text-white mb-4 text-center underline shadow-lg shadow-red-400">My Skills</h2>
                    {skills.map(skill => (
                        <div key={skill} className="m-2 bg-gray-900 w-[150px] h-[100px]  rounded-lg shadow-lg shadow-red-900 border-2 border-red-700 flex items-center justify-center hover:bg-red-600 transition duration-300">
                            <p className="text-white text-lg font-semibold">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
