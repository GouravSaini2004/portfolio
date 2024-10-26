import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className="w-full md:w-screen h-auto text-center bg-gray-800 text-white p-6 flex flex-col justify-center items-center">
            <img className="p-4 rounded-full border-4 border-white" src={data.avatar_url} alt="Git picture" width={200} />
            <h2 className="text-4xl font-bold mt-2">{data.name}</h2>
            <p className="mt-2 text-lg italic">{data.bio || 'No bio available'}</p>
            <p className="mt-2">Location: {data.location || 'Not specified'}</p>
            <p className="mt-2">Public Repositories: {data.public_repos}</p>
            <a 
                href={data.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
                View GitHub Profile
            </a>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/gouravsaini2004');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};
