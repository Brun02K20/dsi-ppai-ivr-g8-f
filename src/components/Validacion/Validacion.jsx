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
}) => {
  useEffect(() => {
    handleOpcionChange(""); // Reiniciar la opción seleccionada en cada renderizado
  }, [nombreValidacion]);
  return (
    <>
      <h3>VALIDACIÓN</h3>
      <p>Nombre Validación: {nombreValidacion}</p>
      <p>Nombre Subopcion: {nombreSubopcion}</p>
      <form>
        {opcionesValidacion.map((opcion, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={opcion.descripcion}
                name="opcionesValidacion"
                checked={opcion.descripcion === opcionSeleccionada}
                onChange={() => handleOpcionChange(opcion.descripcion)}
              />
              {opcion.descripcion}
            </label>
          </div>
        ))}

        <button
          type="button"
          onClick={() => {
            handleValidar();
            realizarValidacion(opcionSeleccionada);
          }}
          disabled={opcionSeleccionada === ""}
        >
          Validar
        </button>
        <button type="button" onClick={handleCancelar}>
          Cancelar
        </button>
      </form>
    </>
  );
};

export { Validacion };
