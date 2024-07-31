import React, { forwardRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ProjectSection = forwardRef((props, ref) => (
    <section ref={ref} id="project" className="h-screen p-4 scroll-mt-12">
        <span>Project</span>
    </section>
));

export default ProjectSection;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}