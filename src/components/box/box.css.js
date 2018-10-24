import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 2rem 4rem;

  .products {
  	display:grid;
  	grid-template-columns: 1fr 1fr;

  }

  .ig-intro {
  	margin:4em 0 1em;
  	display:grid;
  	grid-template-columns: 1fr 1fr;
  	 letter-spacing:2px;
    font-size:.7em;
    font-family: 'lucida-grande', sans-serif;
    text-transform:uppercase;

  	.username {
  		text-align:right;
  	}
  }

  .index-items {
  	 display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  p {
  	margin-top:1em;
  	font-size:.9em;
  	line-height:1.4;
  }

  div {

   ${MEDIA.TABLET`
    margin-bottom: 3em;
  `};
  }


   ${MEDIA.TABLET`
    display: block;
    margin-bottom: 3em;
  `};
  }
  
  .index-items--ig {
  	 display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4rem;

   div {

   ${MEDIA.TABLET`
    margin-bottom: 3em;
  `};
  }

     ${MEDIA.TABLET`
    display: block;
    margin-bottom: 3em;
  `};
  }

`;
