import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="bg-gray-900 border-t-2 border-gray-200">
            <div className="mx-auto w-full max-w-screen-xl p-3 py-6 lg:py-4">
                {/* <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className='flex items-center border-2 w-36 h-12 border-red-600'>
                            <h2 className='text-white font-bold text-3xl p-2'>GOURAV</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <NavLink
                                        to={'/'}
                                        className={({ isActive }) =>
                                            `block pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/About'}
                                        className={({ isActive }) =>
                                            `block pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"}`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <NavLink
                                        to={'/Github'}
                                        className={({ isActive }) =>
                                            `block pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"}`
                                        }
                                    >
                                        Github
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline text-white">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline text-white">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                {/* <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" /> */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">
                        © {year} 
                        <a href="" className="hover:underline pl-1">
                            gouravsaini
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="https://www.linkedin.com/in/gourav-saini-423072210/" className="text-blue-700">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M22.225 0H1.775C.795 0 0 .795 0 1.775v20.45C0 23.205.795 24 1.775 24h20.45C23.205 24 24 23.205 24 22.225V1.775C24 .795 23.205 0 22.225 0zM7.128 20.452H3.54V9h3.588v11.452zm-1.794-13.131c-1.146 0-2.052-.927-2.052-2.08 0-1.155.906-2.08 2.052-2.08 1.146 0 2.052.925 2.052 2.08 0 1.153-.906 2.08-2.052 2.08zm16.182 13.131h-3.588v-5.897c0-1.402-.028-3.204-1.95-3.204-1.948 0-2.245 1.519-2.245 3.087v6.014h-3.588V9h3.444v1.56h.049c.48-.906 1.647-1.855 3.384-1.855 3.618 0 4.283 2.388 4.283 5.49v6.257z"
                                />
                            </svg>

                            <span className="sr-only">Linkedin page</span>
                        </Link>

                        <Link to="https://www.instagram.com/bhagirathi_gaurav___saini/" className="text-blue-700">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M7.75 2H16.25C20.2 2 22 3.8 22 7.75V16.25C22 20.2 20.2 22 16.25 22H7.75C3.8 22 2 20.2 2 16.25V7.75C2 3.8 3.8 2 7.75 2ZM12 15.6A3.6 3.6 0 1 0 12 8.4A3.6 3.6 0 0 0 12 15.6ZM17.6 6.4C17.6 7.09 17.09 7.6 16.4 7.6C15.71 7.6 15.2 7.09 15.2 6.4C15.2 5.71 15.71 5.2 16.4 5.2C17.09 5.2 17.6 5.71 17.6 6.4Z"
                                />
                            </svg>

                            <span className="sr-only">Instagram page</span>
                        </Link>
                        <Link to="https://github.com/GouravSaini2004" className="text-blue-700">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-blue-700">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}