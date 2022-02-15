import React, { useState } from "react";
import Input from "./Input";

const PersonalForm = () => {
  const [state, setState] = useState({
    name: '',
    lastname: ['', '']
  });

  const editarNombre = (event) => setState({
    ...state,
    name: event.target.value
  });

  const editarApellidos = (atributo) => (event) => {
    let lastnameState = { ...state };
    lastnameState.lastname[atributo] = event.target.value;
    setState(lastnameState);
  };

  return (
    <div>
      <Input label="Nombre" handleChange={editarNombre} />
      <Input label="Apellido" handleChange={editarApellidos(0)} />
      <Input label="Segundo apellido" handleChange={editarApellidos(1)} />
      <p>
        Mi nombre es: {state.name} {state.lastname[0]} {state.lastname[1]}
      </p>
    </div>
  );
}

export default PersonalForm;