import { useContext } from "react";
import { TechContext} from "../../../../providers/TechContext";

import { StyledCardTech } from "./style";

export function CardTech({ tech }) {
  const { modalUpdateOpen } = useContext(TechContext);
  return (
    <StyledCardTech onClick={() => modalUpdateOpen(tech)}>
      <div>
        <h3>{tech.title}</h3>
        <span>{tech.status}</span>
      </div>
    </StyledCardTech>
  );
}
