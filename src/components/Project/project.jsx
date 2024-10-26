import React from 'react';

const projects = [
    {
        title: 'MegaBlog Application',
        description: 'A comprehensive blogging platform with user authentication, post creation, and commenting features.',
        link: '#', // Replace with your project link
    },
    {
        title: 'Weather Forecast Application',
        description: 'An application providing real-time weather updates and forecasts using a weather API.',
        link: 'https://weather-web-kohl-gamma.vercel.app',
    },
    {
        title: 'E-Sports Website',
        description: 'A dynamic website for e-sports enthusiasts, featuring upcoming online mobile game competition.',
        link: '#',
    },
    {
        title: 'HRMS Application',
        description: 'A Human Resource Management System to manage employee records, payroll, and performance reviews.',
        link: '#',
    },
    {
        title: 'Chatting Application',
        description: 'A real-time chatting application with user authentication and group chat features.',
        link: '#',
    },
    {
        title: 'Finding Missing Person Application',
        description: 'An application to help locate missing persons using community support and real-time alerts.',
        link: '#', // Replace with your project link
    },
    {
        title: 'Portfolio',
        description: 'A personal portfolio website showcasing my projects and skills.',
        link: '#',
    },
];

const MyWork = () => {
    return (
        <div className="w-full bg-gray-800 p-6">
            <h1 className="text-3xl font-bold text-center text-white mb-6">My Work</h1>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="m-4 max-w-xs bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                            <p className="mt-2 text-gray-300">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyWork;
