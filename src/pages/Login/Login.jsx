import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';


const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/');
                const user = { email }

                axios.post('http://localhost:4000/jwt', user)
                    .then(res => {
                        console.log(res.data)
                    })

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
                        <h1 className="text-4xl text-center font-bold">Login</h1>
                        <form onSubmit={handelLogin} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn text-white bg-[#FF3811] mt-4">Login</button>
                            <div className='text-center mt-3'>
                                <p className='font-bold'>or sign in with</p>
                                <div className='space-x-7 mt-6'>
                                    <button className='btn text-3xl text-[#FF3811]'><FaGoogle></FaGoogle></button>
                                    <button className='btn text-3xl text-[#FF3811]'><FaLinkedinIn></FaLinkedinIn></button>
                                    <button className='btn text-3xl text-[#FF3811]'><FaGithub></FaGithub></button>
                                </div>
                                <p className='mt-8'>New to here? <Link className='font-bold text-[#FF3811] hover:underline' to='/signUp'> Sign Up</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;