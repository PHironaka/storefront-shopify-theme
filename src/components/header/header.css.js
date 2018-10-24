import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  a {
    font-family: 'lucida-grande', sans-serif;
    color: #000;
    transition: color 0.2s ease;
    text-decoration: none;
    letter-spacing:2px;
    font-size:.8em;

    &:hover {
      color: inherit;
    }
  }
`;

export const Company = styled.img`
  max-width: 261px;
`;
