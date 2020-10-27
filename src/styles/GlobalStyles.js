import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyles = createGlobalStyle`
    :root {
        --nickYellow: #FFC82D;
        --mainColour: rgb(255, 192, 58);
        --altColour: #353D46;
        --altBackground: #F6F6F6;
        --black: #000;
        --white: #fff;
        --mainFont: Inter;
        /* --altFont: NexaLight; */
        --m: 0 auto;
        --testing: dotted 1px red;
    }
    *, *:after, *:before {
        box-sizing: border-box;
        
    }
    html {
        width: 100%;
        height: 100%;

    }
    body {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        background: var(--altColour);
        color: var(--white);
    }
    a, a:visted {
        text-decoration: none;
        color: inherit;


    }
    a[aria-current="page"] {
        color: var(--mainColour);
    }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
    button {
        background: var(--mainColour);
        border: var(--mainColour);
        padding: .75rem 1rem; 
        border-radius: 3.5px;
        color: var(--altColour);
        cursor: pointer;
        
    }
    input:focus { outline: none; }

`;

export default GlobalStyles;
