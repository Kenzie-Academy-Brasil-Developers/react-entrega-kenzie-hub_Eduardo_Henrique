import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import * as yup from "yup";
import { StyledFormLogin } from "./style";
import { useState } from "react";

const schema = yup.object().shape({
  password: yup.string().required("Senha obrigatoria"),
  email: yup
    .string()
    .required("Email obrigatorio")
    .email("Formato de email invalido"),
});

export function FormLogin({ setAuthenticated }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const show = (event) => {
    event.preventDefault();

    if (!showPassword) {
      setShowPassword(true);
    } else if (showPassword) {
      setShowPassword(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const userLogin = async (user) => {
    try {
      const response = await api.post("sessions", user);
      window.localStorage.setItem("@KenzieHub:Token", response.data.token);
      window.localStorage.setItem("@KenzieHub:UserId", response.data.user.id);

      setAuthenticated(true);
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha invalidos");
    }
  };

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
