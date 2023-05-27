import React from 'react';
import "./RegistrarRespuestaDeOperador.css";

const RegistrarRespuestaDeOperador = () => {
    // los datos de: cliente, categoria seleccionada, opcion seleccionada, y subopcion seleccionada (si ccorresponde) son traidos del backend
    return (
      <>
        <h3>DATOS DE LA LLAMADA</h3>
        <p>Nombre del Cliente: José López</p>
        <p>Categoría previamente seleccionada: Operador</p>
        <p>Opción seleccionada: 1</p>
        <p>Subopción seleccionada: Subopcion Me quiero morir</p>
        <p>Numero de orden de Subopción seleccionada: 3</p>
        <button type="button">Validar</button>

        <form>
          <label>Ingresar Descripción</label>
          <textarea></textarea>

          <label>Seleccione acción a realizar:</label>
          <select defaultValue="0">
            <option value="0" disabled>Elija opcion</option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </form>

        <button type="submit">CONFIRMAR</button>
        <button type="button">CANCELAR</button>
      </>
    );
};

export {RegistrarRespuestaDeOperador}