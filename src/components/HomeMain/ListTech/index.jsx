import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { CardTech } from "./CardTech";
import { StyledDivListTech } from "./style";
export function ListTech() {
  const { techs } = useContext(UserContext);
  return techs.length != 0 ? (
    <StyledDivListTech>
      <ul>
        {techs.map((tech) => (
          <CardTech key={tech.id} tech={tech} />
        ))}
      </ul>
    </StyledDivListTech>
  ) : null;
}
