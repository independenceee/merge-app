import { createGlobalStyle } from "styled-components";
type Props = {};

const GlobalStyle = createGlobalStyle`
@import url();
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;   
}
html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}
body {

}
`;

const GlobalStyles = function ({}: Props) {
    return <GlobalStyle />;
};

export default GlobalStyles;
