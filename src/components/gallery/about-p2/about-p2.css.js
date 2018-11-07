import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';



export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Container = styled.div`
  padding: 0 5em;
`;

export const Landing = styled.figure`
  grid-template-columns: 1fr 1fr;
  display: grid;
  margin:1em 0;
  grid-gap:3em;

    ${MEDIA.TABLET`
  display: block;
    
  `};
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 1rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
