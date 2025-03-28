import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white text-center sm:text-start space-y-2 sm:space-y-7 lg:pl-12 lg:w-1/3'>
                        <p className='text-2xl sm:text-6xl font-bold'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white text-center sm:text-start space-y-2 sm:space-y-7 lg:pl-12 lg:w-1/3'>
                        <p className='text-2xl sm:text-6xl font-bold'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white text-center sm:text-start space-y-2 sm:space-y-7 lg:pl-12 lg:w-1/3'>
                        <p className='text-2xl sm:text-6xl font-bold'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white text-center sm:text-start space-y-2 sm:space-y-7 lg:pl-12 lg:w-1/3'>
                        <p className='text-2xl sm:text-6xl font-bold'>Affordable Price For Car Servicing</p>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className="btn btn-error">Discover More</button>
                            <button className="btn btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;