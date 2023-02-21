import styled from "styled-components";

export const StyledContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255, 0.1);
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

    span{
      font-family:var(--font-text);
      font-size:var(--font-size-headline);
      color:var(--color-negative);
    }
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
    .btn--send {
      height: 40px;
      background: var(--color-primary);

      color: var(--color-grey-0);
      font-size: var(--font-size-title-3);

      border: none;
      border-radius: var(--border-default);
      letter-spacing: 0.04rem;
    }
  }
  @media (min-width:768px) {
    .container--form {
      width:370px;
    }
    
  }
`;
