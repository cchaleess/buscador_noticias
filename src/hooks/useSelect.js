import React, { useState } from "react";
//375fafe5e6f14aa49fee3fbe436c70a5
const useSelect = (stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  const SelectNoticias = () => (
    <select className="browser-default"
    value={state}
    onChange={(e) => actualizarState(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option
          key={opcion.value}
          value={opcion.value}
        >
          {opcion.label}
        </option>
      ))}
    </select>
  );
  return [state, SelectNoticias];
};

export default useSelect;
