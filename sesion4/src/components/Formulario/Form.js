import React, { useState} from "react";
// Formulario para una escuela
// Formulario oara dar de alta a profesores y alumnos nombre ( Cantoidad de cada caso)

const Form = (props) => {
  const [nombre, setNombre] = useState(' ');
  const [state, setState] = useState({
    profesores: 0,
    alumnos: 0
  });

  const editarNombre = (event) => setNombre(event.target.value);
  const editarState = (atributo) => (event) => setState({
    ...state,
    [atributo]: event.target.value
  });

  return (
    <div className="margen">
      {/* Nombre */}
      <input onChange={editarNombre} />
      {nombre}
      <br /><br />
      {/* Numero de profesores */}
      <input type="number" onChange={editarState("profesores")} />
      {state.profesores}
      <br /><br />
      {/* Numero de alumnos */}
      <input type="number" onChange={editarState("alumnos")} />
      {state.alumnos}
    </div>
  );
};

export default Form;