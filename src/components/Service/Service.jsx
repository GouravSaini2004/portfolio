import React from "react";

export default function Service() {
    return (
        <div className="w-screen h-auto bg-gray-800">
            <div className="w-[300px] md:w-[90%] mx-auto flex justify-center items-center">
                <div>
                    <p className="pt-32 ml-1 text-2xl font-bold text-yellow-500">What I Do!</p>
                    <h3 className="ml-1 mt-1 text-4xl font-bold underline text-white">My Services</h3>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-evenly mt-8">
                {[
                    {
                        title: "JAVA Developer",
                        description: "Building robust and scalable Java applications for various platforms.",
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/5047/5047135.png"
                    },
                    {
                        title: "WEB Developer",
                        description: "Creating responsive and interactive websites using modern web technologies.",
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png"
                    },
                    {
                        title: "React Developer",
                        description: "Designing user-friendly interfaces that enhance user experience and engagement.",
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/8407/8407535.png"
                    },
                    {
                        title: "IoS Developer",
                        description: "Developing cross-platform mobile applications for both iOS and Android devices.",
                        imgSrc: "https://cdn-icons-png.flaticon.com/512/5738/5738031.png"
                    },
                    {
                        title: "Node Developer",
                        description: "Developing cross-platform mobile applications for both iOS and Android devices.",
                        imgSrc: "https://cdn-icons-png.flaticon.com/512/5738/5738031.png"
                    },
                    {
                        title: "Pyhton Developer",
                        description: "Developing cross-platform mobile applications for both iOS and Android devices.",
                        imgSrc: "https://cdn-icons-png.flaticon.com/512/5738/5738031.png"
                    },
                ].map((service, index) => (
                    <div key={index} className="w-[300px] h-[220px] bg-gray-700 border-2 border-yellow-500 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 m-4">
                        <img className="w-12 h-12 ml-5 mt-5" src={service.imgSrc} alt={service.title} style={{ backgroundColor: 'transparent' }}/>
                        <h4 className="ml-5 mt-3 text-yellow-300 text-xl font-semibold">{service.title}</h4>
                        <p className="ml-5 text-white text-sm pr-4">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
