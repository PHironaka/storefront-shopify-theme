import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';


export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 ;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

