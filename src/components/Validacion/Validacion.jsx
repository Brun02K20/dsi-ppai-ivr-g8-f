import React, { useEffect } from "react";
import "./Validacion.css";

const Validacion = ({
  nombreValidacion,
  nombreSubopcion,
  opcionesValidacion,
  handleCancelar,
  handleValidar,
  opcionSeleccionada,
  handleOpcionChange,
  realizarValidacion,
  validacionExitosa,
  volverAInicio,
  setValidacionExitosa,
}) => {
  useEffect(() => {
    handleOpcionChange(""); // Reiniciar la opción seleccionada en cada renderizado
  }, [nombreValidacion]);
  useEffect(() => {
    if (validacionExitosa !== null) {
      setValidacionExitosa(validacionExitosa);
    }
  }, [validacionExitosa]);
  return (
    <>
      {(validacionExitosa === null || validacionExitosa === true) && (
        <>
          <div className="col s12">
            <h4 className="center">VALIDACIÓN</h4>
            <p className="dato-validacion">
              Nombre Validación: {nombreValidacion}
            </p>
            <p className="dato-validacion">
              Nombre Subopcion: {nombreSubopcion}
            </p>
          </div>
          <form>
            {opcionesValidacion.map((opcion, index) => (
              <p key={index}>
                <input
                  type="radio"
                  value={opcion.descripcion}
                  name="opcionesValidacion"
                  checked={opcion.descripcion === opcionSeleccionada}
                  onChange={() => handleOpcionChange(opcion.descripcion)}
                  id={index + 1}
                />

                <label htmlFor={index + 1} className="label-opcion-validacion">
                  {opcion.descripcion}
                </label>
              </p>
            ))}

            <div id="botones-validacion-container">
              <button
                type="button"
                onClick={() => {
                  handleValidar();
                  realizarValidacion(opcionSeleccionada);
                }}
                disabled={opcionSeleccionada === ""}
                className="btn waves-effect waves-light botones-validacion"
              >
                Validar
              </button>
              <button
                type="button"
                onClick={handleCancelar}
                className="btn waves-effect waves-light botones-validacion"
              >
                Cancelar
              </button>
            </div>
          </form>
        </>
      )}
      {validacionExitosa === false && (
        <>
          <p>ERROR EN LA VALIDACION</p>
          <button
            onClick={volverAInicio}
            className="btn waves-effect waves-light"
          >
            VOLVER A INICIO
          </button>
        </>
      )}
    </>
  );
};

export { Validacion };
