import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width:68em;
  margin: 0 auto;

  h2,h4 {
    text-align:center;
    text-transform:uppercase;
  }

  h2 {
    font-size:1.1em;
    font-weight:bold;
    margin:15px 0;
  }

  h4 {
    font-size:.7em;
    letter-spacing:2px;
  }

  .products {
  	display:grid;
  	grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
        ${MEDIA.TABLET`
  display: block;
    
  `};

  .products-content {
    margin-top: 6em;

    ${MEDIA.TABLET`
    margin-top: 2em;
    
  `};

    h3 {
      font-weight:bold;
      margin-bottom:1em;
    }
  }


  }

  .about-content {
    padding: 0 5em;

    p {
  margin: 0 1rem 2rem;
    }
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
  margin-top:2em;

    h2 {
    line-height:1.4;
    text-align:left;
  }

  a {
    text-align:center;
    font-weight:bold;
    text-transform:uppercase;
    font-size:.8em;

    h3 {
    margin-top:3em;

    }
  }

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
  margin-bottom:4em;

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
