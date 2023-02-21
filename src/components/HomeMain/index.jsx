import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ListTech } from "./ListTech";
import { IoMdAdd } from "react-icons/io";
import { StyledMainHome } from "./style";
import { ModalCreateTech } from "../Modal/ModalCreateTech";
import { ModalUpdate } from "../Modal/ModalUpdate";
import { TechContext } from "../../providers/TechContext";

export function HomeMain() {
  const { userLogged,} = useContext(UserContext);
  const { modalOpen, showModal, showModalUpdate } = useContext(
    TechContext
  );

  return (
    <>
      <StyledMainHome>
        <div className="container--profile">
          <div>
            <h1>{userLogged.name}</h1>
            <span>{userLogged.course_module}</span>
          </div>
        </div>
        <div className="container--list--techs">
          <div className="title--add--techs">
            <h2>Tecnologias</h2>
            <button onClick={modalOpen} type="button">
              <IoMdAdd />
            </button>
          </div>
          <ListTech />
        </div>
      </StyledMainHome>

      {showModal && <ModalCreateTech />}
      {showModalUpdate && <ModalUpdate />}
    </>
  );
}
