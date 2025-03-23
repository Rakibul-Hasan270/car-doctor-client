import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Cheeckout = () => {
    const { users } = useContext(AuthContext);
    const data = useLoaderData();

    const handelFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;

        const order = { name, date, email, img: data?.img, service: data?.title };

        fetch('http://localhost:4000/booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
            })


    }

    return (
        <div className='mt-10'>
            <h3 className='text-center text-3xl font-bold mb-6'>Name of service: {data.title}</h3>
            <div className="hero-content">
                <form onSubmit={handelFormSubmit} className="fieldset">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2.5'>
                        <div>
                            <label className="fieldset-label">Name</label>
                            <input name='name' defaultValue={users?.name} type="text" className="input" placeholder="Name" />
                        </div>
                        <div>
                            <label className="fieldset-label">Date</label>
                            <input name='date' type="date" className="input" />
                        </div>
                        <div>
                            <label className="fieldset-label">Email</label>
                            <input name='email' readOnly defaultValue={users?.email} type="email" className="input" placeholder="Email" />
                        </div>
                        <div>
                            <label className="fieldset-label">Dou Amount</label>
                            <input name='amount' defaultValue={data?.price} type="number" className="input" />
                        </div>
                    </div>
                    <input className='btn btn-neutral mt-4' type="submit" value="Add Service" />
                </form>
            </div>
        </div>
    );
};

export default Cheeckout;