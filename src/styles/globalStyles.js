import { createGlobalStyle } from "styled-components";

export const StyledGlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
body {
  font-family:var(--font-family);
  letter-spacing:0.03rem;
}
:root{
  --color-primary:#FF577F;
  --color-primary-focus:#FF427F;
  --color-primary-negative:#59323F;

  --color-positive:#3FE864;
  --color-negative:#E83F5B;

  --color-grey-0:#F8F9FA;
  --color-grey-1:#868E96;
  --color-grey-2:#343B41;
  --color-grey-3:#212529;
  --color-grey-4:#121214;

  --font-size-title-1:1.125rem;
  --font-size-title-2:1rem;
  --font-size-title-3:0.875rem;

  --font-size-headline:0.75rem;
  --font-text:'Inter', sans-serif;

  --border-default:0.25rem;
}
`