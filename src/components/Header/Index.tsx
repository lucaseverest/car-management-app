import { HeaderContainer } from "./styles";
import ImparLogo from "../../assets/logo-teste.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={ImparLogo} alt="impar logo" />
    </HeaderContainer>
  );
};

export default Header;
