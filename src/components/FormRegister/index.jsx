import { StyledFormRegister } from "./style";
import { useContext } from "react";

import { schema } from "./SchemaRegister";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../providers/UserContext";

export function FormRegister() {

  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledFormRegister onSubmit={handleSubmit(userRegister)} action="">
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        placeholder="Digite aqui seu nome"
        type="text"
        {...register("name")}
      />
      <span>{errors.name?.message}</span>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="Digite aqui seu email"
        type="text"
        {...register("email")}
      />
      <span>{errors.email?.message}</span>
      <label htmlFor="password">Senha</label>
      <input
        id="password"
        placeholder="Digite aqui sua senha"
        type="password"
        {...register("password")}
      />
      <span>{errors.password?.message}</span>
      <label htmlFor="passwordConfirmation">Confirmar Senha</label>

      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        placeholder="Digite novamente sua senha"
        type="password"
        {...register("passwordConfirmation")}
      />
      <span>{errors.passwordConfirmation?.message}</span>

      <label htmlFor="bio">Bio</label>
      <input
        id="bio"
        placeholder="Fale sobre você"
        type="text"
        {...register("bio")}
      />
      <span>{errors.bio?.message}</span>
      <label htmlFor="contact">Contato</label>
      <input
        id="contact"
        placeholder="Opção de contato"
        type="text"
        {...register("contact")}
      />
      <span>{errors.contact?.message}</span>
      <label htmlFor="course_module"></label>
      <select {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro modulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo modulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Teceiro modulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto modulo</option>
      </select>
      <span>{errors.course_module?.message}</span>
      <button type="submit">Cadastrar</button>
    </StyledFormRegister>
  );
}
