import styled from "styled-components";

export const StyledMainHome = styled.main`

  color: var(--color-grey-0);
  font-family: var(--font-text);


  .container--list--techs {
    padding: 1rem;
    .title--add--techs{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:1rem 0 1rem 0;

      h2{
        font-size:var(--font-size-title-1);
    
      }

      button{
        width:2rem;
        height:2rem;

        background:var(--color-grey-3);
        border:none;
        border-radius:var(--border-default);

        display:flex;
        align-items:center;
        justify-content:center;

        font-size:1rem;
        color:var(--color-grey-0);
      }
    }
  }

  .container--profile {
    height: 130px;

    display: flex;
    flex-direction: column;

    border-top: 1px solid var(--color-grey-2);
    border-bottom: 1px solid var(--color-grey-2);

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      padding: 1rem;

      h1 {
        font-size: var(--font-size-title-1);
        font-weight: 700;
      }
      span {
        font-size: var(--font-size-title-3);
        color: var(--color-grey-1);
      }
    }
  }

  @media (min-width: 768px) {
    .container--profile {
      div {
        width: 740px;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        margin: 0 auto;
      }
    }
    .container--list--techs {
      width: 700px;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      padding-top: 2rem;
      margin: 0 auto;
      h2 {
        font-size: var(--font-size-title-1);
        font-weight: 700;
      }
    }
  }
`;
