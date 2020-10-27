import { createGlobalStyle } from 'styled-components';
import Font1 from '../assets/fonts/Inter.ttf';
import Font2 from '../assets/fonts/NexaBold.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Inter;
        src: url(${Font1});
    }
    @font-face {
        font-family: NexaLight;
        src: url(${Font2});
    }
    html {
        font-family: Inter , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
        color: var(--black);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        font-display: auto;
    }
    h1,h2,h3,h4,h5,h6,p, li {
        margin: 0;
        line-height: 1.3;
        letter-spacing: -.65px;
    
    }
    a {
        color: inherit; 
        text-decoration-skip-ink: none;
    }
`;

export default Typography;
