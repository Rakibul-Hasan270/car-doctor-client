import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex justify-center mt-14'><progress className="progress w-56 text-[#FF3811]"></progress></div>
    }

    if (users?.email) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;