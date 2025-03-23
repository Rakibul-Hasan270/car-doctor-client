import React from 'react';

const Products = () => {
    return (
        <div className='mb-20'>
            <p className='text-xl text-center font-bold text-[#FF3811]'>Popular Products</p>
            <h3 className='text-3xl text-center font-bold mt-3 mb-3'>Browse Our Products</h3>
            <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6'>
                {/* {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                } */}
            </div>
            <div className='flex justify-center mt-6'>
                <button className="btn hover:outline outline-[#FF3811] text-[#FF3811]">More Services</button>
            </div>
        </div>
    );
};

export default Products;