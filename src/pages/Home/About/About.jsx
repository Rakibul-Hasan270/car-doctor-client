    import React from 'react';
    import person from '../../../assets/images/about_us/person.jpg';
    import parts from '../../../assets/images/about_us/parts.jpg';

    const About = () => {
        return (
            <div className='md:flex sm:mt-10 lg:mt-20 mb-10 md:mb-20 lg:mb-40'>
                <div className='relative'>
                    <img className='lg:w-4/5' src={person} alt="Person" />
                    <img className='hidden lg:block md:absolute right-10 top-44 md:h-[300px] md:w-[360px] border-8 border-white' src={parts} alt="Parts" />
                </div>
                <div className='text-center sm:text-left space-y-4 md:space-y-5'>
                    <p className='text-xl font-bold text-[#FF3811]'>About Us</p>
                    <h3 className='text-4xl font-bold'>
                        We are qualified & <br /> of experience in <br /> this field
                    </h3>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p>
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className='btn bg-[#FF3811] text-white'>Get More Info</button>
                </div>
            </div>
        );
    };

    export default About;