import * as yup from "yup";

export const schema = yup.object().shape({
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