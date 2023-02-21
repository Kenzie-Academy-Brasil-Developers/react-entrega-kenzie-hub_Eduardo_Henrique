import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import { schema } from "./SchemaTech";
import { StyledContainerModal } from "./style";

export function ModalCreateTech() {
  const { createTechsUser, setShowModal } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <StyledContainerModal className="container--modal--create">
      <div className="container--form">
        <div className="header--modal">
          <h2>Cadastrar Tecnologia</h2>
          <button className="btn--close" onClick={() => setShowModal(null)}>
            X
          </button>
        </div>
        <form action="" onSubmit={handleSubmit(createTechsUser)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="title"
            {...register("title")}
            placeholder="ex: Typescript"
          />
          
          <span>
            {errors.title?.message}
          </span>
          
          <label htmlFor="status">Selecionar status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="">Escolha um nivel de dominio</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <span>
            {errors.status?.message}
          </span>
          
          <button className="btn--send" type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </StyledContainerModal>
  );
}
