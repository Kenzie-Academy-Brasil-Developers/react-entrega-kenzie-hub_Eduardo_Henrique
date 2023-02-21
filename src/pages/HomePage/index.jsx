import { HeaderHome } from "../../components/HeaderHome";
import { HomeMain } from "../../components/HomeMain";
import { TechProvider } from "../../providers/TechContext";

export function HomePage() {
  return (
    <>
      <HeaderHome />
      <TechProvider>
        <HomeMain />
      </TechProvider>
    </>
  );
}
