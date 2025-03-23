import React from 'react';
import { SlCalender } from "react-icons/sl";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";


const FindUs = () => {
    return (
        <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-20 rounded-md mb-20">
            <nav>
                <div className='flex items-center gap-3'>
                    <div className='text-[#FF3811] text-3xl'>
                        <SlCalender></SlCalender>
                    </div>
                    <div>
                        <p>We are open monday-friday</p>
                        <p className='text-2xl font-bold'>7:00 am - 9:00 pm</p>
                    </div>
                </div>
            </nav>
            <nav>
                <div className='flex items-center gap-3'>
                    <div className='text-[#FF3811] text-3xl'>
                        <MdOutlineWifiCalling3></MdOutlineWifiCalling3>
                    </div>
                    <div>
                        <p>Have a question?</p>
                        <p className='text-2xl font-bold'>+2546 251 2658</p>
                    </div>
                </div>
            </nav>
            <nav>
                <div className='flex items-center gap-3'>
                    <div className='text-[#FF3811] text-3xl'>
                        <MdLocationPin></MdLocationPin>
                    </div>
                    <div>
                        <p>Need a repair? our address</p>
                        <p className='text-2xl font-bold'>Liza Street, New York</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default FindUs;