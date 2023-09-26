import React, { useState } from "react";
import { observer } from "mobx-react";

const Formulario = observer(({ obj }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeNome = (event) => {
    setNome(event.target.value);
    obj.atualizaNome(event.target.value);
  };

  const handleChangeSobrenome = (event) => {
    setSobrenome(event.target.value);
    obj.atualizaSobrenome(event.target.value);
  };
  
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    obj.atualizaEmail(event.target.value);
  };

  const handleSubmit = () => {

    obj.cadastraUsuario();
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={handleChangeNome}
          />
        </div>
        <div>
          <label>Sobrenome:</label>
          <input
            type="text"
            name="sobrenome"
            value={sobrenome}
            onChange={handleChangeSobrenome}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Cadastrar
        </button>
      </form>
    </div>
  );
});

export default Formulario;
