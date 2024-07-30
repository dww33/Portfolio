import React, { forwardRef } from 'react';

const CatSection = forwardRef((props, ref) => (
    <section ref={ref} id="cats" className="h-screen p-4 scroll-mt-12">
        <span>Cat</span>
    </section>
));

export default CatSection;
