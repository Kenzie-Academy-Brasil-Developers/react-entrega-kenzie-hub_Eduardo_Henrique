import styled from "styled-components";

export const StyledFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    font-size: var(--font-size-headline);
  }

  .container--login--email {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      color: var(--color-grey-0);
      padding-left: 0.5rem;
      height: 40px;

      background: var(--color-grey-2);
      border: none;

      border-radius: var(--border-default);
    }
    input::placeholder {
      color: var(--color-grey-1);
    }
    input:focus {
      outline: 2px solid var(--color-grey-0);
    }


  }
  .container--login--password {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    input {
      color: var(--color-grey-0);
      padding-left: 0.5rem;
      height: 40px;

      background: var(--color-grey-2);
      border: none;

      border-radius: var(--border-default);
    }
    input::placeholder {
      color: var(--color-grey-1);
    }
    input:focus {
      outline: 2px solid var(--color-grey-0);
    }

    .show--password {
      width: 30px;
      position: absolute;
      right: 10px;
      bottom: 0px;
      background: none;
    }
  }

  button {
    height: 40px;

    color: var(--color-grey-0);
    border: none;
    border-radius: var(--border-default);
    background: var(--color-primary);
  }

  .error{
    margin: 0;
    font-size: var(--font-size-headline);
    color:var(--color-negative);
  }
`;
