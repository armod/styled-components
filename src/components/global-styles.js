import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,::after,::before{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
:root{
 --primary1: red;
 --primary2: blue;
 --primary3: yellow;
 --primary4: green;
 --black: #000;
 --white: #FFF;
}
body {

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: gray;
}
`

export default GlobalStyles
