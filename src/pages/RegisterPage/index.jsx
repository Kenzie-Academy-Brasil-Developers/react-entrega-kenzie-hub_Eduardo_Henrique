import { Link } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { StyledRegisterContainer } from "./style";
import Logo from "../../assets/Logo.svg";


export function RegisterPage() {
  return (
      <StyledRegisterContainer>
        <div className="container--register">
          <div className="container--header">
            <img src={Logo} alt="" />
            <Link className="redirect--login" to={"/"}>
              Voltar
            </Link>
          </div>
          <main className="container">
            <h1>Crie sua conta</h1>
            <p>Rapido e grátis, vamos nessa</p>
            <FormRegister />
          </main>
        </div>
      </StyledRegisterContainer>
  );
}
