import { useNavigate } from "react-router-dom";
import { StyledHeaderContainer } from "./style";
import Logo from "../../assets/Logo.svg";

export function HeaderHome() {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeaderContainer>
      <div className="container--header">
        <img src={Logo} alt="" />
        <button onClick={logout}>Sair</button>
      </div>
    </StyledHeaderContainer>
  );
}
