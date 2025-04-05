import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/services')
            .then(res => setServices(res.data))
    }, [])
    return services;
};

export default useServices;