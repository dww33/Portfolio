import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const AboutSection = () => {
    const { t } = useTranslation();
    return (
        <section class="h-screen flex justify-center items-center h-screen">
            <div class="container">
                <div className='flex'>
                    <div className="flex flex-col justify-center md:h-[80vh] space-y-4 mx-4 md:mx-8">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            {t("about-title")}
                        </h1>
                        <p className="text-lg md:text-xl">
                            {t("about-text1")}
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
};

export default AboutSection;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}