// pages/index.js
import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <section
            className="bg-fixed h-screen p-4 overflow-hidden flex items-center justify-center"
            style={{ backgroundImage: `url(https://raw.githubusercontent.com/dww33/dww33/main/Public/bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="container h-full flex justify-center items-center" >
                <div className="flex flex-col items-center justify-center">
                    <div className="image h-auto max-w-full rounded-full">
                        <img src="https://raw.githubusercontent.com/dww33/dww33/main/Public/Profile_Pic.jpg"
                            className="w-64 h-64 rounded-full border-2 border-gray-300 object-cover"
                            alt="Profile Picture"
                        />
                    </div>
                    <ul className="flex flex-col items-center pt-4">
                        <li className="text-2xl md:text-3xl font-bold">
                            <span>{t('name')}</span>
                        </li>
                        <li className="text-lg md:text-xl pt-1">
                            <span>{t('title')}</span>
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
    );
}

export default HomePage;


export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}