import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;

    -webkit-tap-highlight-color: transparent;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background:${Colors.bg_color};
    color: "#132317";
    

    font-size: 16px;
}

input, button {
    border: none;
    outline: 0;
    appearance: none;
}

ol, ul {
    list-style: none outside none;
}
`;
