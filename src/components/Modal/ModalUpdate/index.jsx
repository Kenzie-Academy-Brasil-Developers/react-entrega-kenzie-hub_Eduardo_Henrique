import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import { StyledContainerModalUpdate } from "./style";

export function ModalUpdate() {
  const { techSelect, techUserUpdate, techUserDelete, setShowModalUpdate } =
    useContext(TechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: techSelect.title,
      status: techSelect.status,
    },
  });

  const submit = (data) => {
    techUserUpdate(data, techSelect.id);
  };

  const handleSubmitDelete = (id) => {
    techUserDelete(id);
  };

  return (
    <StyledContainerModalUpdate>
      <div className="container--form">
        <div className="header--modal">
          <h2>Tecnologia Detalhes</h2>
          <button
            className="btn--close"
            onClick={() => setShowModalUpdate(false)}
          >
            X
          </button>
        </div>
        <form action="" onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Nome do projeto</label>
          <input readOnly type="text" id="title" {...register("title")} />
          <label htmlFor="status">Status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <div className="container--buttons">
            <button className="btn--update" type="submit">
              Salvar alterações
            </button>
            <button
              className="btn--delete"
              onClick={() => handleSubmitDelete(techSelect.id)}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledContainerModalUpdate>
  );
}
