import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
  font-family: 'Quicksand', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;
  }

  p,
  label {
  font-family: 'Quicksand', sans-serif;
    line-height: 1.5em;
  }
  
  .ui.menu{
    margin: 0 !important;
    border-radius: 0 !important;
  }
  h1, h2{
  font-family: 'Exo 2', sans-serif !important;
}
h1{
  font-size: 60px !important;
}
h2{
  font-size: 32px !important;
}
.plainBackground{
  min-height: 60vh;
  color: #000;
}
.plainBackground h2{
  color: #398bc2;
}
.plainBackground p{
  color: #A3A3A3;
  font-size: 20px;
}
.offer{
  min-height: 40vh;
  font-family: 'Exo 2', sans-serif;
  font-size: 25px;
}
.offer p{
  font-family: 'Exo 2', sans-serif;
  font-size: 25px;
}

.App{
    position: relative;
    color:#fff;
    z-index: 1;
    /*margin-bottom: 75px;*/
    background-color: #fff;
    min-height: 82vh;
    overflow: hidden;
}
.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
}
.ui.grid{
  margin-left: 0;
  margin-right: 0;
}
.footer{
    background-color:#1A1C1D;
    color: #fff !important;
}
.footer h1, .footer h2, .App-header h1, .debmunTop h1{
    color: #fff !important;
}
.secLetter{
    min-height: 70vh;
}
`;

export default GlobalStyle;
