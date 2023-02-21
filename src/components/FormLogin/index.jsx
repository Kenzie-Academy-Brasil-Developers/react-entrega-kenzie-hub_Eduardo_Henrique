import { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { UserContext } from "../../providers/UserContext"
import { StyledFormLogin } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./SchemaLogin"
//vai pra uma pasta de schema


export function FormLogin() {
  //vai pra um context
  const {
    userLogin, 
    show, 
    showPassword} = useContext(UserContext)

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

 //vai pra um context
  return (
    <StyledFormLogin action="" onSubmit={handleSubmit(userLogin)}>
      <div className="container--login--email">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Digite aqui seu email"
          type="email"
          {...register("email")}
        />
      </div>
      <span className="error">{errors.email?.message}</span>

      <div className="container--login--password">
        <label htmlFor="password">Senha</label>
        <input
          id="passwordLogin"
          placeholder="Digite aqui sua senha"
          type={showPassword ? "text" : "password"}
          {...register("password")}
        />
        <button onClick={show} className="show--password">
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </div>
      <span className="error">{errors.password?.message}</span>
      <button>Entrar</button>
    </StyledFormLogin>
  );
}
