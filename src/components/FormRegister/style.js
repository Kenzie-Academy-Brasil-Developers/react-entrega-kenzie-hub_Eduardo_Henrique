import styled from "styled-components";

export const StyledFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  
  gap:1rem;

  color: var(--color-grey-0);
  font-family:var(--font-text);

  label{
    font-size:var(--font-size-headline)
  }
  input{
 
    height:40px;

    color:var(--color-grey-0);

    border:none;
    border-radius:var(--border-default);
    background:var(--color-grey-2);

    padding-left:0.5rem;
  }
  input::placeholder{
    color:var(--color-grey-1);
  }
  select{
    height:40px;

    color:var(--color-grey-1);

    border:none;
    border-radius:var(--border-default);
    background:var(--color-grey-2);

    padding-left:0.5rem;
  }
  option{
    color:var(--color-grey-1);
  }
  span{
    color:var(--color-negative);
    font-size:var(--font-size-headline);
  }
  button{
    height:38px;

    color:var(--color-grey-0);

    border:none;
    border-radius:var(--border-default);
    background:var(--color-primary-negative);
  }
`;

