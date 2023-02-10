import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledFormRegister } from "./style";

const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatorio"),
  email: yup
    .string()
    .email("Formato de email invalido")
    .required("email obrigatorio"),
  bio: yup.string().required("Bio obrigatorio"),
  contact: yup.string().required("Contato obrigatorio"),
  course_module: yup.string().required("Modulo obrigatorio"),
  password: yup
    .string()
    .required("Senha é obrigatoria")
    .matches(/[a-z]/, "Deve conter pelo menos 1 letra minuscula")
    .matches(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula")
    .matches(/(\d)/, "Deve conter pelo menos 1 número")
    .matches(/(\W|_)/, "Deve conter pelo menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("Confirmacao de senha é obrigatoria"),
});

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const userRegister = async (data) => {
    try {
      await api.post("users", data);

      toast.success("Conta criada com sucesso");
    } catch (error) {
      toast.error("Esse email ja existe");
    }
  };

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
