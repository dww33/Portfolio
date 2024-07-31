import React, { forwardRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactSection = forwardRef((props, ref) => (
    <section ref={ref} id="contact" className="h-screen p-4 scroll-mt-12">
        <span>Contact</span>
    </section>
));

export default ContactSection;

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}