import React, { forwardRef } from 'react';

const HomeSection = forwardRef((props, ref) => (
    <section ref={ref} id="home" className="p-4 mt-12 scroll-mt-12">
        <div class="container">
            <div class="flex md:flex-row flex-col">
                <div class="basis-2/5">
                    <div class="flex flex-col justify-center items-center h-[80vh]">
                        <img src="https://avatars.githubusercontent.com/u/137646755?s=400&u=95d892047fb8209f74996e2dfc84c66f6c17e359&v=4"
                            alt="Profile Picture"
                        />
                        <div class="flex flex-col items-center">
                            <span class="text-3xl font-bold">Dingjiang Liang</span>
                            <span class="text-xl">Software Engineer</span>
                        </div>
                    </div>
                </div>
                <div class="basis-3/5">
                    <div class="flex flex-col justify-center items-center h-[80vh]">
                        <span class="text-3xl font-bold">About Me</span>
                        <span class="text-xl">I am a software engineer with a passion for web development. I have experience in working with React, Node.js, and Express.js. I am always looking for new opportunities to learn and grow as a developer.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

export default HomeSection;