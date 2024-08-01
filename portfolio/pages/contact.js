import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <section className="h-screen">
                    <div className="container h-full flex justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <ul className="flex flex-col items-center pt-4">
                                <li className="text-xl md:text-2xl font-bold">
                                    <span>{t('contact-email')}:</span>
                                </li>
                                <li className="text-md md:text-lg pt-1">
                                    <span>davidleung1214@icloud.com</span>
                                </li>
                                <li className="text-xl md:text-2xl font-bold pt-4">
                                    <span>{t('contact-media')}:</span>
                                </li>
                                <li className="flex flex-row items-center pt-2 text-4xl space-x-4">
                                    <a href="https://github.com/dww33">
                                        <IoLogoGithub />
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <FaInstagramSquare />
                                    </a>
                                    <a href="https://www.linkedin.com/in/liang-dingjiang-b2b70731b">
                                        <FaLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="h-screen flex justify-center items-center">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center gap-8">
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold mb-6">
                                {t('contact-me')}
                            </h2>
                            <div className="mb-4">
                                <div className="flex items-center text-lg mb-2 space-x-4">
                                    <div>
                                        <FaLocationDot />
                                    </div>
                                    <p>
                                        {t('contact-location')}
                                    </p>
                                </div>
                                <div className="flex items-center text-lg mb-2 space-x-4">
                                    <div>
                                        <MdEmail />
                                    </div>
                                    <p>
                                        davidleung1214@icloud.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className="flex flex-col items-center">
                                <div className="w-full max-w-md flex flex-col md:flex-row md:space-x-4 mb-4">
                                    <input type="text" placeholder={t('contact-first-name')} className="w-full h-10 md:h-12 px-4 mb-4 md:mb-0 border border-gray-300  shadow-sm  focus:ring-custom4 focus:border-custom4" />
                                    <input type="text" placeholder={t('contact-last-name')} className="w-full h-10 md:h-12 px-4 border border-gray-300  shadow-sm  focus:ring-custom4 focus:border-custom4" />
                                </div>
                                <input type="email" placeholder={t('contact-email') + "*"} className="w-full max-w-md h-10 md:h-12 px-4 mb-4 border border-gray-300  shadow-sm  focus:ring-custom4 focus:border-custom4" />
                                <textarea placeholder={t('contact-message')} className="w-full max-w-md h-32 px-4 py-2 mb-4 border border-ring-custom4  shadow-sm  focus:ring-custom4 focus:border-custom4 resize-none" />
                                <div className="w-full flex justify-center md:justify-end md:bottom-0 md:right-0">
                                    <button
                                        type="submit"
                                        className="w-32 h-10 md:h-12 bg-custom2 text-white font-semibold shadow-md hover:bg-custom3 focus:ring-custom4"
                                    >
                                        {t('contact-send')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>



        </>
    );
};

export default ContactSection;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
