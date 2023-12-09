import { StyledBody, StyledTitleThree } from "../../../styles/typography";
import { StyledLi } from "./style";

export const ValueCard = ({ money, removeValueFromList }) => {
  return (
    <StyledLi
      className={money.tipoValor === "Entrada" ? "greenBord" : "grayBord"}
    >
      <div>
        <StyledTitleThree>{money.descricao}</StyledTitleThree>
        <StyledBody className="tipoValor">{money.tipoValor}</StyledBody>
        <StyledBody className="valor">
          R$ {Number(money.valor).toFixed(2)}
        </StyledBody>
        <button onClick={() => removeValueFromList(money.id)}>Excluir</button>
      </div>
    </StyledLi>
  );
};
