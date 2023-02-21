import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { StyledLoginContainer } from "./style";
import Logo from "../../assets/Logo.svg";


export function LoginPage() {
  return (
      <StyledLoginContainer>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <main className="container">
          <div className="container--login">
            <h3>Login</h3>
            <FormLogin />
            <span>Ainda nao possui uma conta?</span>
            <Link className="redirect-register" to={"/register"}>
              Cadastre-se
            </Link>
          </div>
        </main>
      </StyledLoginContainer>
  );
}
