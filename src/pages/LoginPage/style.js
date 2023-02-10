import styled from "styled-components";

export const StyledLoginContainer = styled.main`
  padding-top:80px;
  font-family:var(--font-text);
  
  .logo{
    width:100%;
    display:flex;
    justify-content:center;

  }
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .container--login {
    display: flex;
    flex-direction: column;
    gap:1rem;
    
    width: 369px;

    padding: 2rem 1rem 2rem 1rem;
    margin: 1rem;
    
    border-radius:var(--border-default);
    color: var(--color-grey-0);
    background: var(--color-grey-3);
    
    h3{
      margin:0 auto;
      font-size:var(--font-size-title-3);
      font-weight:700;
    }
  }
  span{
    font-size:10px;
    color:var(--color-grey-1);
    line-height:15px;
    margin:0 auto;
  }
  .redirect-register {
    display:flex;
    justify-content:center;
    align-items:center;
    
    width:100%;
    height:40px;
    
    margin:0 auto;
    border-radius:var(--border-default);
    background:var(--color-grey-1);
    
    color:var(--color-grey-0);
    text-decoration: none;
    font-size:var(--font-size-title-3);
    
  }

  @media (min-width:768px) {
    .container--login{
      justify-content:space-between;
      width:420px;
      height:500px;
    }
    
  }
`;
