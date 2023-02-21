import styled from "styled-components";

export const StyledContainerModalUpdate = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(255, 255, 255, 0.1);
  border-radius: var(--border-default);

  .container--form {
    width: 300px;
    background: var(--color-grey-3);
    border-radius: var(--border-default);

    .header--modal {
      width: 100%;
      height: 40px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0 1rem 0 1rem;

      background: var(--color-grey-2);

      h2 {
        font-family: var(--font-text);
        color: var(--color-grey-0);
      }

      .btn--close {
        border: none;
        background: none;
        color: var(--color-grey-1);

        font-size: 1rem;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    padding: 1rem;

    border-radius: var(--border-default);

    label {
      font-family: var(--font-text);
      color: var(--color-grey-0);
    }

    input {
      padding-left: 0.5rem;
      height: 40px;

      font-size: var(--font-size-title-2);
      color: var(--color-grey-0);

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

    select {
      padding: 0 0.5rem 0 0.5rem;
      height: 40px;

      font-size: var(--font-size-title-2);
      color: var(--color-grey-0);

      background: var(--color-grey-2);
      border: none;

      border-radius: var(--border-default);
    }
  }
  .container--buttons {
    display: flex;
    justify-content: space-between;

    .btn--update {
      width: 165px;
      height: 40px;
      border: none;

      font-size: var(--font-size-title-2);
      font-family: var(--font-text);
      color: var(--color-grey-0);

      background: var(--color-primary-negative);

      border-radius: var(--border-default);
    }
    .btn--delete {
      width: 80px;
      height: 40px;
      border: none;

      background: var(--color-grey-1);

      font-family: var(--font-text);
      font-size: var(--font-size-title-2);
      color: var(--color-grey-0);

      border-radius: var(--border-default);
    }
  }
  @media(min-width:768px){
    .container--form{
      width:360px;
    }
    .container--buttons {
    .btn--update {
      width:205px;
  
    }
    .btn--delete {
      width: 100px;

    }
  }
  }
`;
