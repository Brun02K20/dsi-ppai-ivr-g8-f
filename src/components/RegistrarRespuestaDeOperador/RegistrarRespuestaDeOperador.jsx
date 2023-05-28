import React, { useState, useEffect } from "react";
import "./RegistrarRespuestaDeOperador.css";
import { Validacion } from "../Validacion/Validacion.jsx";
import { useLlamadas } from "../../hooks/shared/useLlamadas.js";

const RegistrarRespuestaDeOperador = () => {
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
    handleValidarClick,
    handleCancelarClick,
    handleConfirmarClick,
    setDescripcion,
    setAccionSeleccionada,
    handleOpcionChange,
  } = useLlamadas();

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
      />
    );
  }

  return (
    <>
      <form>
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
            {datosLlamada.subOpciones &&
              datosLlamada.subOpciones.map((subOpcion, index) => (
                <tr key={index}>
                  <td>{subOpcion.nombre}</td>
                  <td>{subOpcion.nroOrden}</td>
                </tr>
              ))}
          </tbody>
        </table>
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
            ></textarea>

            <label>Seleccione acción a realizar:</label>
            <select
              value={accionSeleccionada}
              onChange={(e) => setAccionSeleccionada(e.target.value)}
            >
              <option value="" disabled>
                Elija opcion
              </option>
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </>
        )}
        <button type="submit" disabled={!confirmarHabilitado}>
          CONFIRMAR
        </button>
        <button type="button">CANCELAR</button>
      </form>
    </>
  );
};

export { RegistrarRespuestaDeOperador };
