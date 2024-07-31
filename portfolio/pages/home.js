import React, { forwardRef } from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

const HomeSection = forwardRef((props, ref) => (
    <section ref={ref} id="home" className="h-screen p-4 overflow-hidden">
        <div className="container h-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center">
                <div className="image h-auto max-w-full rounded-full">
                    <img src="https://api.esquirehk.com/var/site/storage/images/_aliases/img_1000_w/lifestyle/movies/stephen-chow-movies-life/428847-1-chi-HK/_1.jpg"
                        className="w-64 h-64 rounded-full border-2 border-gray-300 object-cover"
                        alt="Profile Picture"
                    />
                </div>
                <ul className="flex flex-col items-center pt-4">
                    <li className="text-2xl md:text-3xl font-bold">
                        <span>Dingjiang Liang</span>
                    </li>
                    <li className="text-lg md:text-xl pt-1">
                        <span>Software Engineer</span>
                    </li>
                    <div className="flex flex-row pt-2 space-x-4">
                        <a href="" className="text-4xl">
                            <MdEmail />
                        </a>
                        <a href="https://github.com/dww33" className="text-4xl">
                            <IoLogoGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/liang-dingjiang-b2b70731b" className="text-4xl">
                            <FaLinkedin />
                        </a>
                        <a href="" className="text-4xl">
                            <FaInstagramSquare />
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    </section>
));

export default HomeSection;
