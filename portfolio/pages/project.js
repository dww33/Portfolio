import React, { forwardRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const ProjectSection = () => {
    const { t } = useTranslation();
    return (
        <section className="h-screen flex justify-center items-center p-4 scroll-mt-12">
            <span className="text-3xl md:text-6xl font-bold text-center">
                {t('project-text1')}
            </span>
        </section>
    )
}; 

export default ProjectSection;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}