import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  margin: 4rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
