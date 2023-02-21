import { StyledHeaderContainer } from "./style";
import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function HeaderHome() {
  const { logout } = useContext(UserContext)

  return (
    <StyledHeaderContainer>
      <div className="container--header">
        <img src={Logo} alt="" />
        <button type="button" onClick={logout} >Sair</button>
      </div>
    </StyledHeaderContainer>
  );
}
