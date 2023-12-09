import { StyledTitleThree, StyledBody } from "../../styles/typography";
import { StyledSection } from "./style";

export const SunValueSection = ({ moneyList }) => {
  const sanValues = moneyList.reduce((accValue, money) => {
    if (money.tipoValor == "Entrada") {
      accValue = accValue + Number(money.valor);
    } else {
      accValue = accValue - Number(money.valor);
    }

    return accValue;
  }, 0);

  return (
    <StyledSection
      className={moneyList.length > 0 ? "showSection" : "noShowsection"}
    >
      <div>
        <StyledTitleThree>Valor Total:</StyledTitleThree>
        {moneyList.length > 0 ? (
          <span>R$ {sanValues.toFixed(2)}</span>
        ) : (
          <span> R$ 0.00 </span>
        )}
      </div>

      <StyledBody>O valor se refere ao saldo</StyledBody>
    </StyledSection>
  );
};
