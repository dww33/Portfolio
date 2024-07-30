import React, { forwardRef } from 'react';

const ContactSection = forwardRef((props, ref) => (
    <section ref={ref} id="contact" className="h-screen p-4 scroll-mt-12">
        <span>Contact</span>
    </section>
));

export default ContactSection;
