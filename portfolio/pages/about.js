import React, { forwardRef } from 'react';

const CatSection = forwardRef((props, ref) => (
    <section ref={ref} id="cats" className="h-screen p-4 scroll-mt-12">
        <div className="flex flex-col justify-center md:h-[80vh] space-y-4 mx-4 md:mx-8">
            <h1 className="text-2xl md:text-3xl font-bold">About</h1>
            <p className="text-lg md:text-xl">
                Hello, I'm Dingjiang Liang, a Computer Engineer specializing in backend development. I work extensively with Express.js and PostgreSQL. My focus is on using IoT and AI to improve system efficiencies, particularly in inventory management. I'm committed to using technology to solve practical challenges and drive innovation in professional environments.
            </p>
        </div>
    </section>
));

export default CatSection;
