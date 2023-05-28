import React, {useState, useEffect} from "react";
import axios from "axios";

const useLlamadas = () => {
    const [datosLlamada, setDatosLlamada] = useState({});
    const [mostrarValidacion, setMostrarValidacion] = useState(false);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [subopcionIndex, setSubopcionIndex] = useState(0); // Índice de la subopción actual
    const [validacionIndex, setValidacionIndex] = useState(0); // Índice de la validación actual
    const [descripcion, setDescripcion] = useState("");
    const [accionSeleccionada, setAccionSeleccionada] = useState("");
    const [confirmarHabilitado, setConfirmarHabilitado] = useState(false);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
    
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7110/GestorRegistroDeRespuesta"
                );
                setDatosLlamada(response.data);
            } catch (error) {
                console.error(error);
            };
        };

        fetchData();
    }, []);

    const handleValidarClick = () => {
        setMostrarValidacion(true);
    };

    const handleCancelarClick = () => {
        setMostrarValidacion(false);
        setMostrarFormulario(false);
    };

    const handleConfirmarClick = () => {
        const subopcionActual = datosLlamada.subOpciones[subopcionIndex];
        const cantidadValidaciones = subopcionActual.validaciones.length;

        if (validacionIndex < cantidadValidaciones - 1) {
            setValidacionIndex(validacionIndex + 1);
        } else {
            if (subopcionIndex < datosLlamada.subOpciones.length - 1) {
                setSubopcionIndex(subopcionIndex + 1);
                setValidacionIndex(0);
                setMostrarValidacion(true);
            } else {
                setMostrarValidacion(false);
                setMostrarFormulario(true);
            };
        };
    };

    useEffect(() => {
        checkConfirmarHabilitado();
    }, [descripcion, accionSeleccionada]);

    const checkConfirmarHabilitado = () => {
        if (descripcion !== "" && accionSeleccionada !== "") {
            setConfirmarHabilitado(true);
        } else {
            setConfirmarHabilitado(false);
        };
    };

    const handleOpcionChange = (e) => {
        setOpcionSeleccionada(e.target.value);
    };

    return {
        datosLlamada,
        mostrarValidacion,
        mostrarFormulario,
        subopcionIndex,
        validacionIndex,
        descripcion,
        accionSeleccionada,
        confirmarHabilitado,
        opcionSeleccionada,
        handleValidarClick,
        handleCancelarClick,
        handleConfirmarClick,
        setDescripcion,
        setAccionSeleccionada,
        handleOpcionChange,
    };
};

export {useLlamadas};