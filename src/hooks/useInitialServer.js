import { useEffect, useState } from 'react';
import axiosClient from '@apis/axiosClient';

const useInitialServer = () => {
    const [selectedServer, setSelectedServer] = useState(null);
    const [endpoints, setEndpoints] = useState(null);

    useEffect(() => {
        const init = async () => {
            const res = await axiosClient.get('/');
            const data = res.data.endpoints;
            setEndpoints(data);
            setSelectedServer(Object.keys(data)[0]);
        };

        init();
    }, []);

    return { selectedServer, setSelectedServer, endpoints };
};

export default useInitialServer;