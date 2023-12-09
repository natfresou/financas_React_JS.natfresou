import { useState } from "react";
import { StyledForm } from "./style";
import { StyledBodyInter } from "../../styles/typography";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ setMoneyList }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipoValor, setTipoValor] = useState("Entrada");

  const addValueToList = () => {
    const newValue = { id: uuidv4(), descricao, valor, tipoValor };
    setMoneyList((moneyList) => [...moneyList, newValue]);
  };
  const submit = (e) => {
    e.preventDefault();
    addValueToList();
    setDescricao("");
    setValor("");
    setTipoValor("Entrada");
  };

  return (
    <StyledForm onSubmit={submit}>
      <StyledBodyInter>Descrição</StyledBodyInter>
      <input
        placeholder="Digite aqui sua descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <span>Ex: Compra de roupas</span>
      <StyledBodyInter>Valor (R$)</StyledBodyInter>
      <input
        type="number"
        placeholder="0"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />
      <StyledBodyInter>Tipo de valor</StyledBodyInter>
      <select value={tipoValor} onChange={(e) => setTipoValor(e.target.value)}>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
      <button type="submit">Inserir valor</button>
    </StyledForm>
  );
};
