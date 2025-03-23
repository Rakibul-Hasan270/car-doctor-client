import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero mt-14">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-20">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handelSignUp} className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your Name" />
                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <button className="btn text-white bg-[#FF3811] mt-4">Sign Up</button>
                            <p className='mt-8 text-center'>Have an account? <Link className='font-bold text-[#FF3811] hover:underline' to='/login'> Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;