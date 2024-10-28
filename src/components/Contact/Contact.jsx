import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
        subscribe: true,
        gender: 'male',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch('https://getform.io/f/agdyklrb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '', comment: '', subscribe: true, gender: 'male' });
            setLoading(false);
            navigate('/');
        } else {
            alert('There was an error submitting the form.');
            setLoading(false);
        }
    };

    return (
        <div className="w-screen relative flex items-top justify-center h-auto p-5 bg-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between mt-6 sm:px-6 lg:px-8">

                {/* Contact Information */}
                <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get in Touch:</h1>
                    <p className="text-lg sm:text-xl font-medium mt-2">I’d love to hear from you! Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out. Fill in the form to start a conversation</p>

                    <div className="flex items-center mt-8">
                        <i className="fa-solid fa-location-dot text-yellow-300"></i>
                        <div className="ml-4 text-md tracking-wide font-semibold">Meerut (UP)</div>
                    </div>

                    <div className="flex items-center mt-4">
                        <i className="fa-solid fa-mobile-button text-yellow-300"></i>
                        <div className="ml-4 text-md tracking-wide font-semibold">+91 0000000000</div>
                    </div>

                    <div className="flex items-center mt-2">
                        <i className="fa-solid fa-envelope text-yellow-300"></i>
                        <div className="ml-4 text-md tracking-wide font-semibold">gouravsaini@gmail.com</div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-md mx-auto p-6 bg-gray-800 text-white flex flex-col justify-center items-center w-full shadow-lg rounded-lg mt-6 md:mt-0">
                    <h1 className="text-xl font-bold text-center mb-4">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                        <p className='text-red-700'>! Please enter email carefully; otherwise we cannot connect with you.</p>
                        <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Female
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === 'other'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Other
                            </label>
                        </div>
                        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300">
                            {loading ? "Loading" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
