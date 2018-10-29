import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';


export const Left = styled.div`
small {
      font-size:.6em;
    }
`;


export const Container = styled.div`
  display:grid;
  grid-template-columns: 89px 105px 122px;
  grid-gap:3em;
      margin-bottom:3em;

   small {
      font-size:.6em;
    }
    
  ul {
    list-style: none;
    padding: 0;

    h3 {
      font-size:.7em;
      text-transform: uppercase;
      letter-spacing:3px;
      margin-bottom:2em;
    }

    li {
      font-size: 1.2rem;
      margin:7px 0;
      text-transform: uppercase;

    }


  }
      ${MEDIA.TABLET`
  display: block;
    text-align:center;
  `};
`;
