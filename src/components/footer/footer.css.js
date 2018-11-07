import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Mailing = styled.div`
max-width:350px;
justify-self:right;
  ${MEDIA.TABLET`
justify-self:center;


  `};

h3 {
font-size:.6em;
text-transform:uppercase;
letter-spacing:2px;
border-bottom: 1px solid;
padding-bottom:2em;
}

`;

export const Email = styled.form`


  input {
    margin:3em 0;
    background:transparent;
    outline:none;
    border:none;
    padding: 1em 2em;
    &::placeholder {
  color: grey;
}
  }

  button {
    margin:3em 0;
    padding: 1.199em 2em;
  }

  input {
    max-width:200px;
  }

  button {
    background:transparent;
    border:none;
    outline:none;
  }
  display: grid;
  grid-template-columns: 2fr 1fr;
  text-align:center;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '2.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3em auto;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '1.6rem';
        default:
          return '1.3rem';
      }
    }};
  `};
`;


export const Text = styled.span`
  display: block;
  text-align:center;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '2.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3em auto;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '1.6rem';
        default:
          return '1.3rem';
      }
    }};
  `};
`;

export const Container = styled.footer`
 display:grid;
 grid-template-columns: 1fr 1fr;
grid-gap: 6em;
  align-items: center;
  padding: 4em 3rem 2em;
  background:#eee;
  margin-top:3em;

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
     ${MEDIA.TABLET`
 grid-template-columns: 1fr ;
justify-items:center;

  `};

`;

export const Company = styled.img`
  max-width: 261px;
`;
