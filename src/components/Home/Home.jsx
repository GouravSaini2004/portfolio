import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import gourav from '../../assets/gouravsaini.png'

export default function Home() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'App Developer', 'Engineer', 'UI Designer'],
            typeSpeed: 100,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className='w-screen h-auto bg-gray-800 md:flex md:items-center md:align-middle md:justify-evenly'>
            <div className='w-auto h-auto mx-4 bord rounded-2xl flex justify-center'>
                <div className='w-auto h-auto flex flex-col justify-center items-center'>
                    <div>
                        <p className='ml-10 text-3xl mt-10 text-red-500'>HELLO!</p>
                        <h3 className='ml-10 mt-2 font-bold text-4xl text-white'>I AM GOURAV SAINI</h3>
                        <p className='ml-10 mt-2 text-white text-2xl'>I'm a <span className='text-gray-900 font-bold text-2xl' ref={el} /></p>
                        <p className='ml-10 text-white'>I Know HTML, CSS, Bootstrap, JavaScript, Tailwind CSS, ReactJs, NodeJs, MongoDB, WebSockit, React-Native etc.</p>
                        <div className='ml-10 mt-4 flex justify-evenly items-center h-12 w-[300px]'>
                            <button className='bg-blue-700 w-[100px] hover:bg-white hover:text-blue-700 text-sm rounded-3xl text-white' type="button">About me</button>
                            <button className='bg-blue-700 w-[150px] hover:bg-white hover:text-blue-700 text-sm rounded-3xl text-white' type="button">Contact us</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='w-auto h-auto mx-4 hidden md:block'>
                <img src={gourav} alt="Gourav Saini" className="w-[400px] h-[500px] object-cover" />
            </div>


        </div>
    );
}
