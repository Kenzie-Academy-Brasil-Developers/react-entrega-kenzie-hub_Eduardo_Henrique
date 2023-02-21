import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Nome obrigatorio"),
  status:yup.string().required("Nivel de Dominio necessario")
})