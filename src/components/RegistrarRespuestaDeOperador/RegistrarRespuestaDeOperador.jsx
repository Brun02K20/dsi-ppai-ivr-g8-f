import React, { useEffect, useState } from "react";
import "./RegistrarRespuestaDeOperador.css";
import { Validacion } from "../Validacion/Validacion.jsx";
import { useLlamadas } from "../../hooks/shared/useLlamadas.js";
import { useObtenerAccionesARealizar } from "../../hooks/shared/useObtenerAccionesARealizar.js";

const RegistrarRespuestaDeOperador = () => {
  // importacion de los datos y funciones necesarias para el funcionamiento del sistema, tanto del custom hook useLlamadas como del custom hook useObtenerAccionesARealizar
  const {
    datosLlamada,
    mostrarValidacion,
    mostrarFormulario,
    subopcionIndex,
    validacionIndex,
    descripcion,
    accionSeleccionada,
    confirmarHabilitado,
    opcionSeleccionada,
    confirmacionExitosa,
    handleValidarClick,
    handleCancelarClick,
    handleConfirmarClick,
    setDescripcion,
    setAccionSeleccionada,
    handleOpcionChange,
    realizarValidacion,
    realizarConfirmacion,
    setConfirmacionExitosa,
  } = useLlamadas();

  const datosAccionesARealizar = useObtenerAccionesARealizar();

  // actualizando el estado de confirmacion exitosa en cuanto el usuario le de click al boton confirmar, como la actualizacion de estado es asincrona, se usa useEffect
  useEffect(() => {
    if (confirmacionExitosa !== null) {
      setConfirmacionExitosa(confirmacionExitosa);
      console.log("confirmacion exitosa:", confirmacionExitosa);
    }
  }, [confirmacionExitosa]);

  // si el estado mostrar validacion es TRUE, se renderiza el componente Validacion, enviandole ciertas propiedades (en react son conocidas como props), si no es verdadero este estado,muestra el componente RegistrarRespuestaDeOperador, que es el return debajo de este if
  if (mostrarValidacion) {
    const subopcionActual = datosLlamada.subOpciones[subopcionIndex];
    const validacionActual = subopcionActual.validaciones[validacionIndex];

    return (
      <Validacion
        handleCancelar={handleCancelarClick}
        handleValidar={handleConfirmarClick}
        nombreValidacion={validacionActual.nombre}
        nombreSubopcion={subopcionActual.nombre}
        opcionesValidacion={validacionActual.opcionesValidacion}
        opcionSeleccionada={opcionSeleccionada}
        handleOpcionChange={handleOpcionChange}
        realizarValidacion={realizarValidacion}
      />
    );
  }

  return (
    <>
      <form>
        {/* Datos de la llamada traidos del backend */}
        <h3>DATOS DE LA LLAMADA</h3>
        <p>Nombre del Cliente: {datosLlamada.nombreCliente}</p>
        <p>Categoría previamente seleccionada: {datosLlamada.categoria}</p>
        <p>Opción seleccionada: {datosLlamada.opcion}</p>
        <table>
          <thead>
            <tr>
              <th>Subopción</th>
              <th>Nro Orden</th>
            </tr>
          </thead>
          <tbody>
            {/* recorre el array de las subopciones elegidas por el cliente y genera una fila de tabla por cada subopcion traida del backend, con2 datos, el nombre de la subopcion y el numero de orden de la misma */}
            {datosLlamada.subOpciones &&
              datosLlamada.subOpciones.map((subOpcion, index) => (
                <tr key={index}>
                  <td>{subOpcion.nombre}</td>
                  <td>{subOpcion.nroOrden}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* si el estado mostrarFormulario es false que renderice el boton VALIDAR, si es true, que renderice el textarea y el combobox */}
        {!mostrarFormulario && (
          <button type="button" onClick={handleValidarClick}>
            Validar
          </button>
        )}

        {mostrarFormulario && (
          <>
            <label>Ingresar Descripción</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />

            <label>Seleccione acción a realizar:</label>
            <select
              value={accionSeleccionada}
              onChange={(e) => setAccionSeleccionada(e.target.value)}
            >
              <option value="" disabled>
                Elija opcion
              </option>
              {/* por cada elemento dentro del array datosAccionesARealizar, renderiza una opcion posible que el usuario puede elegir en el combobox */}
              {datosAccionesARealizar &&
                datosAccionesARealizar.map((accion, index) => (
                  <option key={index} value={accion}>
                    {accion}
                  </option>
                ))}
            </select>
          </>
        )}
        {/* El boton CONFIRMAR se encontrara deshabilitado hasta que el usuario hayao bien ingresado algo en el textarea, o bien elegido alguna opcion en el combobox */}
        <button
          type="button"
          disabled={!confirmarHabilitado}
          onClick={async () => {
            await realizarConfirmacion(descripcion, accionSeleccionada);
          }}
        >
          CONFIRMAR
        </button>
        <button type="button">CANCELAR</button>
      </form>
    </>
  );
};

export { RegistrarRespuestaDeOperador };
