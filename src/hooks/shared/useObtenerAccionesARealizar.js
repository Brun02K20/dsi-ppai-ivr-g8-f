import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useObtenerAccionesARealizar = () => {
    const [datosAccionesARealizar, setDatosAccionesARealizar] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7110/api/acciones"
                );
                setDatosAccionesARealizar(response.data);
            } catch (error) {
                console.error(error);
            };
        };

        fetchData();
    }, []);
    return datosAccionesARealizar;
};

export {useObtenerAccionesARealizar};