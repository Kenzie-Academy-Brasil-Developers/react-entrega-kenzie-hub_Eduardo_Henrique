import styled from "styled-components";

export const StyledMainHome = styled.main`
  color:var(--color-grey-0);
  font-family:var(--font-text);

    .container--profile{
      height:130px;

      display:flex;
      flex-direction:column;

      border-top:1px solid var(--color-grey-2);
      border-bottom:1px solid var(--color-grey-2);

      div{
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        gap:1rem;

        padding:1rem;
          h1{
            font-size:var(--font-size-title-1);
            font-weight:700;

        }
          span{
            font-size:var(--font-size-title-3);
            color:var(--color-grey-1);

          }

      }
  }
  .container--warning{
    display:none;
  }
  @media (min-width:768px) {
    .container--profile{
      div{
        width: 740px;
        align-items:center;
        justify-content:space-between;
        flex-direction:row;
        
        margin: 0 auto;
    }
  } 
  .container--warning{
    width:700px;
    display:flex;
    flex-direction:column;
    gap:2rem;

    padding-top:2rem;
    margin:0 auto;
    h2{
      font-size:var(--font-size-title-1);
      font-weight:700;
    }
  }
}
`