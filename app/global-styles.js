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
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  .ui.menu{
    margin: 0 !important;
    border-radius: 0 !important;
}
.letter div p{
  text-align: justify
}
.App{
    position: relative;
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

.App-header {
  background: url("/assets/images/debmun3.PNG") center;
  background-size: cover;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  color: white;
    padding-left: 20px;
}
.Debmun-header {
    background: url("http://www.go4mun.com/img/munclub1.jpg") center;
    background-size: cover;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    color: white;
    padding-left: 20px;
}

.objectives {
    background: url("http://www.go4mun.com/img/munclub1.jpg") center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    color: white;
    padding-left: 20px;
}

.App-header h1{
  font-size: calc(25px + 2vmin);
}
.App-header *, .objectives *, .partner *, .sponsor *, .accordionContain *, .delegateApply *, .team *{
  position: relative;
  /* hack */
}

.App-link {
  color: #61dafb;
}
.ui.segment{
  border-radius: 0 !important;
  border: 0;
}
.ui.grid{
  margin-left: 0;
  margin-right: 0;
}

.offer{
  min-height: 70vh;
  text-align: justify;
  position: relative;
  padding-bottom: 200px;
}
.overlay:before{
  position: absolute;
  content:" ";
  top:0;
  left:0;
  width:100%;
  height:100%;
  display: block;
  z-index:0;
  background-color: rgba(0, 0, 0, 0.6);
}
.timer{
    background-color: #1A1C1D;
}
.timer p{
    margin: 0;
    font-size: 40px !important;
    color:#fff;
    text-align: center;
}
.ui.card{
    width: 100% !important;
}
.label{
    color: #fff !important;
}
.title{
    color: #2085CF !important;
    text-transform: uppercase;
    /*text-align: center;*/
    margin-bottom: 20px;
}
.ui.steps{
    border: none;
}
.white, .white p{
    color: #fff !important;
}
.item{
    /*color: #fff !important;*/
    /*text-transform: uppercase;*/
}
.contact{
    /*background-color:#1A1C1D;*/
    background-image: url("https://farm5.staticflickr.com/4394/36396494843_64a6d0759d_h.jpg");
    background-size: cover;
    color: #fff !important;
    min-height: 90vh;
    position: relative;
}
.footer{
    background-color:#1A1C1D;
    color: #fff !important;
}
.footer h1, .footer h2, .App-header h1, .debmunTop h1{
    color: #fff !important;
}
.switch{
    position: relative;
    z-index: 1;
    margin-bottom: 30px;
}

.zeroPadding {
    padding: 0 !important;
}
.ui.card:first-child {
    margin-top: 1em !important;
}
.wePic{
    height:60vh;
    overflow:hidden;
}
.carouselHome{
    height: 72vh;
    overflow: hidden;
}
.carouselHome .carousel{
    height: 72vh;
}
.debmunOffer{
    background-image: url("/assets/images/munOverlay.jpg");
}
.debmunOffer h1{
    color: #fff !important;
}
.debrecen{
    overflow: hidden;
    padding: 0 !important;
}
.fullHeight{
    height: 100% !important;
}
.agenda{
    padding-top: 40px;
    padding-bottom: 60px;
}
.agenda h1{
    text-align: center;
}
.debmunTop{
    background-color: #21519B;
}
.schedule{
    padding-top:50px;
    background-color:#21519B;
}
.schedule h1{
    text-align: center;
    color: #fff !important;
}
.scheduleMid{
    background-color:#21519B !important;
}
.scheduleMid h2{
    color: #fff !important;
}
.carouselAbout{
    min-height: 80vh;
    overflow: hidden;
}
.debmunAnnounce{
    position: absolute;
    top: 10%;
    left:5%;
    text-align: left;
}
.debmunAnnounce h1{
    color: #fff !important;
    font-size: 2.5rem !important;
}
.secLetter{
    min-height: 70vh;
}
.aboutMun {
    background: url("http://www.cwmun.org/wp-content/uploads/2016/05/L853056-1024x683.jpg") center;
    background-size: cover;
    min-height: 70vh;
}
.aboutMun1 {
    background: url("https://static1.squarespace.com/static/59b0d245e45a7ce2046793d1/t/5a246888f9619ac01b0b0753/1512335526642/International+flags+at+ShawMUN?format=1000w") center;
    background-size: cover;
    min-height: 70vh;
}
.aboutMun2 {
    background: url("https://bestdelegate.com/wp-content/uploads/2013/01/tumblr_lyn2qzO22G1r2hszso1_500.jpg") center;
    background-size: cover;
    min-height: 70vh;
}
/*.aboutDebmun {*/
    /*background: url("http://www.go4mun.com/img/munclub1.jpg") center;*/
    /*background-size: cover;*/
    /*min-height: 70vh;*/
/*}*/
.aboutMunText {
    background-color:#1b1c1d !important;
    color: #fff;
    padding-top: 70px;
}
.aboutMunText h1{
    color: #fff !important;
}
.seventyHeight{
    min-height: 70vh;
}
.fiftyHeight{
    min-height: 60.5vh;
}
.team{
    background: url("/assets/images/teamBackground.jpg") center;
    min-height: 82vh;
    position: relative;
}

.unideb{
    background: url("/assets/images/mainBuilding.jpg") center;
    background-size: cover;
    min-height: 100vh;
    /*background-attachment: fixed;*/
    position: relative;
    padding-top: 100px;
}
.unideb div{
    position: absolute;
}
.white{
    color: #fff;
}
.carouselCommit{
    height: 60vh;
    overflow: hidden;
}
.carouselCommit .debmunAnnounce{
    top: 10%;
    text-align: left;
    left: 5%;
}
.carouselDeb{
    height: 100vh;
    overflow: hidden;
}
.carouselDeb .carousel{
    height: 100vh;
}
.carouselTrans{
    height: 65vh;
    overflow: hidden;
}
.carouselPartner{
    height: 50vh;
    overflow: hidden;
}
.carouselAccom{
    height: auto;
    overflow: hidden;
}
.carouselDeb .debmunAnnounce{
    text-align: left;
    left: 5%;
}
.debMap{
    height: 200vh;
    overflow: hidden;
    position: relative;
}
.accordionContain{
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    padding-top: 60px;
    min-height: 85vh;
    background-position: center;
}

.delegateApply{
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    padding-top: 60px;
    min-height: 85vh;
    background-position: center;
}
.partner{
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    padding-bottom: 60px;
    min-height: 85vh;
}
.sponsor{
    background: url("/assets/images/IMG_9915.jpg") center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    padding-bottom: 60px;
    min-height: 85vh;
}
.accomodate {
    background: url("https://www.dkv.hu/content/images/pic_43.jpg") center;
    background-size: cover;
    min-height: 70vh;
}

.ui.floating.dropdown>.menu {
    margin-left: -50px !important;
}
.faq{
    padding-bottom: 100px;
}
.headerImage img{
    height: 75px;
    width: 75px !important;
}
.headerImage p {
    font-size: 2rem !important;
    padding-left: 10px;
}
.sgBorder{
    border: 1px dashed #181A1B;
    padding: 20px;
}
@media screen and (min-width: 1440px) {
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 767px) {
    .App-header {
        min-height: 70vh;
    }
    .ui.text.container{
        max-width: 100% !important;
    }
    .carousel{
        height: 100vh;
    }
    .carousel img{
        min-height: 65vh;
        /*min-width:100%;*/
    }
    .carouselHome{
        height: 65vh;
        overflow: hidden;
    }
    .carouselHome .carousel{
        height: 65vh;
    }

    .debmunAnnounce{
        top: 15%;
        left:10%;
    }
    .carouselCommit .debmunAnnounce{
        top: 10%;
        left:10%;
    }
    .debmunAnnounce h1{
        color: #fff !important;
        font-size: 1.3rem !important;
    }
    .timer p{
        margin: 0;
        font-size: 1.2rem !important;
        color:#fff;
        text-align: center;
    }
    .ui.stackable.menu .item {
        width: 98%!important;
    }
}
`;

export default GlobalStyle;
