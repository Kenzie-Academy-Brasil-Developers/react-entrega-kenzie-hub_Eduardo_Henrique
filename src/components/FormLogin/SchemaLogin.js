import * as yup from "yup";
export const schema = yup.object().shape({
  password: yup.string().required("Senha obrigatoria"),
  email: yup
    .string()
    .required("Email obrigatorio")
    .email("Formato de email invalido"),
});