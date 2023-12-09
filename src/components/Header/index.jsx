import Logo from "../../assets/img/Nu Kenzie.svg";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader className="headerResponse">
      <div>
        <img src={Logo} alt="Imagem do logo" />
      </div>
    </StyledHeader>
  );
};
