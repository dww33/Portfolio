import React, { forwardRef } from 'react';

const ProjectSection = forwardRef((props, ref) => (
    <section ref={ref} id="project" className="h-screen p-4 scroll-mt-12">
        <span>Project</span>
    </section>
));

export default ProjectSection;
