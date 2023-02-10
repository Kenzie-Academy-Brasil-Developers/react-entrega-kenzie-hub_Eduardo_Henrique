import { useEffect, useState } from "react";
import { api } from "../../services";
import { toast } from "react-toastify";
import { StyledMainHome } from "./style";

export function HomeMain() {
  const [userLogged, setUserLogged] = useState({});
  useEffect(() => {
    const id = window.localStorage.getItem("@KenzieHub:UserId");
    const token = window.localStorage.getItem("@KenzieHub:Token");

    const readerUser = async () => {
      try {
        const response = await api.get(`users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserLogged(response.data);
      } catch (error) {
        toast.error("Que pena algo deu errado");
      }
    };
    readerUser();
  }, []);
  return (
    <StyledMainHome>
      <div className="container--profile">
        <div>
          <h1>{userLogged.name}</h1>
          <span>{userLogged.course_module}</span>
        </div>
      </div>
      <div className="container--warning">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </div>
      
    </StyledMainHome>
  );
}
