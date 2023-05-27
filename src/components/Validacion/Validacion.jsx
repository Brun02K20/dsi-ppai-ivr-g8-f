import React from 'react';
import "./Validacion.css";

const Validacion = () => {
    return (
      <>
        <h3>VALIDACIÓN</h3>
        <p>Nombre Validación: validacionTuVieja</p>
        <p>Número de orden de Validación: 10</p>
        <form>
          <div>
            <label>
              <input type="radio" value="opcion1" name="opcionesValidacion" />
              Opción 1
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="opcion2" name="opcionesValidacion" />
              Opción 2
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="opcion3" name="opcionesValidacion" />
              Opción 3
            </label>
          </div>

          <button type="submit">Validar</button>
          <button type="button">Cancelar</button>
        </form>
      </>
    );
};

export {Validacion}