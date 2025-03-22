import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {

    const { title, img, price } = service;

    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src={img}
                    alt="IMAGE" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className='text-[#FF3811] font-bold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn  text-[#FF3811]"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;