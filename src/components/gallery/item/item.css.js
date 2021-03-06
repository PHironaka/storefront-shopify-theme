import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const About = styled.div`
display:grid;
justify-items:center;
a {
	text-align:center;
	color:white;
	background:black;
	padding:1.4em .5em;
width:190px;
font-size:.7em;
text-transform:uppercase;
letter-spacing:2px;
margin-bottom:5em;
}
`;


export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Landing = styled.figure`
  grid-template-columns: 1fr 1fr;
  display: grid;
  margin:4em 0;
  grid-gap:2em;
    ${MEDIA.TABLET`
  display: block;
    
  `};

`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
