import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Typed from 'typed.js';
import gourav from '../../assets/gouravsaini.png'

export default function Home() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'Android Developer' , 'IoS Developer' , 'Node Developer',  'React Developer' , 'Django Developer'],
            typeSpeed: 100,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className='w-screen h-screen bg-gray-800 md:flex md:items-center md:align-middle md:justify-evenly'>
            <div className='w-auto h-auto mx-4 bord rounded-2xl flex justify-center'>
                <div className='w-auto h-auto flex flex-col justify-center items-center'>
                    <div>
                        <p className='ml-10 text-3xl mt-10 text-red-500'>HELLO!</p>
                        <h3 className='ml-10 mt-2 font-bold text-4xl text-white'>I'M GOURAV SAINI and</h3>
                        <p className='ml-10 mt-2 text-white text-2xl'>I'm a <span className='text-gray-900 font-bold text-2xl' ref={el} /></p>
                        <p className='ml-10 text-white'>A passionate developer with a knack for turning ideas into reality. I specialize in web development, mobile apps, etc crafting seamless and user-friendly experiences.</p>
                        <div className='ml-10 mt-4 flex justify-evenly items-center h-12 w-[300px]'>
                            <NavLink to={'/About'} className='h-8 text-center text-xl bg-blue-700 w-[120px] hover:bg-white hover:text-blue-700 rounded-3xl text-white' type="button">About me</NavLink>
                            <NavLink to={'/Contact'} className='h-8 text-center bg-blue-700 w-[150px] hover:bg-white hover:text-blue-700 text-xl rounded-3xl text-white' type="button">Contact us</NavLink>

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
