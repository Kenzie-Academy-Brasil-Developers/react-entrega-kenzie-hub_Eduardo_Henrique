import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--color-grey-0);
  font-family: var(--font-text);
  .container--register {
    display: flex;
    flex-direction: column;
    width: 296px;
  }

  .container--header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 1.5rem 0 1.5rem 0;
  }
  .redirect--login{
    width:80px;
    height:30px;
    
    display:flex;
    justify-content:center;
    align-items:center;

    border-radius:var(--border-default);
    
    font-size:var(--font-size-title-3);
    color:var(--color-grey-0);
    background:var(--color-grey-3);
    text-decoration:none;
  }
  .container {
    display:flex;
    flex-direction:column;
    gap:1rem;

    border-radius:var(--border-default);
    
    background: var(--color-grey-3);
    padding: 1rem;

    h1 {
      font-size:var(--font-size-title-2);
      font-weight:600;
      margin: 0 auto;
    }
    p{
      margin: 0 auto;
      font-size:var(--font-size-headline);
    }
  }
  @media (min-width:768px) {
    .container--register{
      width:500px;
    }
    
  }
`;
