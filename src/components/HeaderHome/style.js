import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  .container--header{
  width:100%;
  display:flex;
  justify-content:space-between;
  padding:1rem;
}
  
  button{
    width:55px;
    height:30px;

    color:var(--color-grey-0);
    background:var(--color-grey-3);
    border:none;
    border-radius:var(--border-default);
    

  }
  @media(min-width:768px) {
      .container--header{
        width:720px;
        padding:1rem 0 1rem 0;
        margin:0 auto;
      }
    }
`