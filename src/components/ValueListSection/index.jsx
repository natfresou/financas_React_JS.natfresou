import { StyledTitleThree, StyledTitleTwo } from "../../styles/typography";
import { ValueCard } from "./ValueCard";
import { StyledSection } from "./style";

export const ValueListSection = ({ moneyList, setMoneyList }) => {
  
  const removeValueFromList = (moneyId) => {
    setMoneyList((moneyList) =>
      moneyList.filter((money) => money.id !== moneyId)
    );
  };

  return (
    <StyledSection className="valores">
      <StyledTitleThree>Resumo Financeiro</StyledTitleThree>

      {moneyList.length > 0 ? (
        <ul>
          {moneyList.map((money) => (
            <ValueCard
              key={money.id}
              money={money}
              removeValueFromList={removeValueFromList}
            />
          ))}
        </ul>
      ) : (
        <StyledTitleTwo>Você ainda não possui nenhum lançamento</StyledTitleTwo>
      )}
    </StyledSection>
  );
};
