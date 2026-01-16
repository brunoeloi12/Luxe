import styled from 'styled-components';

export const BoxInput = styled.div`
  padding: 8px 0;
  width: 100%;

  input {
    display: flex;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.7rem;
    border: 1px solid #e4e4e7;
    background-color: #ffffff;
    padding: 0.5rem 0.75rem;

    font-size: 1rem;
    line-height: 1.5rem;

    &::placeholder {
      color: #71717a;
    }

    &::file-selector-button {
      border: 1;
      background-color: transparent;
      font-size: 0.875rem;
      font-weight: 500;
      margin-right: 1rem;
    }

    &:hover {
      border-color: #e4e4e7;
    }

    &:focus-visible {
      border: none;
      outline: none;
      box-shadow:
        0 0 0 2px #ffffff,
        0 0 0 4px #4f46e5;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

export const TitleInput = styled.h3`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1;
  margin: 8px 0 10px 4px;
`;
