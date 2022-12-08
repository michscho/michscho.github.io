import { injectGlobal } from "styled-components";

const globalStyles = () => injectGlobal`
body {
  color: "black";
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}

a {
  color: #c3a180;

  &:hover{
    color: #7b7571;
  }
}

h1,
h2,
h3,
h4,
h5,
h6, {
  margin-top: 105px;
  font-family: "Oswald", Verdana, Geneva, sans-serif;
}
h1 span,
h2 span,
h3 span,
h4 span,
h5 span,
h6 span {
  color: #c3a180;
}

.title-block {
  margin: 60px auto 70px auto;
  text-align: center;
  align-items: center;
}
.title-block .divider {
  border-bottom: solid 2px #c3a180;
  width: 50px;
  margin: 20px auto;
}
.title-block h1 {
  font-size: 53px;
}
.title-block p {
  font-size: 18px;
}

.bg-gray-1 {
  background-color: #f4f4f4;
}
.bg-gray-2 {
  background-color: #eaeaea;
}
.bg-gray-3 {
  background-color: #cecece;
}
.bg-dark {
  background-color: #3d3d3d;
}
.bg-color-1 {
  background-color: #c3a180;
}
.txt-gray-1 {
  background-color: #f4f4f4;
}
.txt-gray-2 {
  background-color: #eaeaea;
}
.txt-gray-3 {
  background-color: #cecece;
}
.txt-dark {
  background-color: #3d3d3d;
}
.txt-color-1 {
  color: #c3a180;
}

.space10 {
  height: 10px;
}
.space20 {
  height: 20px;
}
.space30 {
  height: 30px;
}
.space40 {
  height: 40px;
}
.space50 {
  height: 50px;
}
.space60 {
  height: 60px;
}

.top-pad-10 {
  padding-top: 10px;
}
.top-pad-20 {
  padding-top: 20px;
}
.top-pad-30 {
  padding-top: 30px;
}
.top-pad-40 {
  padding-top: 40px;
}
.top-pad-50 {
  padding-top: 50px;
}
.top-pad-60 {
  padding-top: 60px;
}
.top-pad-70 {
  padding-top: 70px;
}
.top-pad-80 {
  padding-top: 80px;
}

.bot-pad-10 {
  padding-bottom: 10px;
}
.bot-pad-20 {
  padding-bottom: 20px;
}
.bot-pad-30 {
  padding-bottom: 30px;
}
.bot-pad-40 {
  padding-bottom: 40px;
}
.bot-pad-50 {
  padding-bottom: 50px;
}
.bot-pad-60 {
  padding-bottom: 60px;
}
.bot-pad-70 {
  padding-bottom: 70px;
}
.bot-pad-80 {
  padding-bottom: 80px;
}

.top-mrg-10 {
  margin-top: 10px;
}
.top-mrg-20 {
  margin-top: 20px;
}
.top-mrg-30 {
  margin-top: 30px;
}
.top-mrg-40 {
  margin-top: 40px;
}
.top-mrg-50 {
  margin-top: 50px;
}
.top-mrg-60 {
  margin-top: 60px;
}
.top-mrg-70 {
  margin-top: 70px;
}
.top-mrg-80 {
  margin-top: 80px;
}

.bot-mrg-10 {
  margin-bottom: 10px;
}
.bot-mrg-20 {
  margin-bottom: 20px;
}
.bot-mrg-30 {
  margin-bottom: 30px;
}
.bot-mrg-40 {
  margin-bottom: 40px;
}
.bot-mrg-50 {
  margin-bottom: 50px;
}
.bot-mrg-60 {
  margin-bottom: 60px;
}
.bot-mrg-70 {
  margin-bottom: 70px;
}
.bot-mrg-80 {
  margin-bottom: 80px;
}

.btn {
  border-radius: 3px;
}
.btn-primary,
.btn-primary.btn-bordered:focus,
.btn-primary.btn-bordered:hover,
.btn-primary.btn-bordered:active,
.btn-primary.btn-bordered:active:focus,
.btn-primary.btn-bordered.active {
  background: #c3a180;
  border: solid 2px #c3a180;
  color: #fff;
}
.btn-primary:focus,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:active:focus,
.btn-primary.active,
.btn-primary.btn-bordered {
  background: none;
  border: solid 2px #c3a180;
  color: #c3a180;
}

.findeUns {
  background: #f4f4f4;
}

.car {
  padding-bottom: 20px;
}

.car2 {
  padding-bottom: 20px;
  padding-left: 100px;

}


.gallery_nav {
  text-align: center;
  padding-top: 20px;
  margin-bottom: 290px;
}
.port-image {
  width: 100%;
}
.gallery_product {
  margin-bottom: 30px;
}

/*Magnific Popup*/
.mfp-bg {
  background: #fff;
}
a.mfp-image:hover {
  opacity: 0.7;
}
.mfp-bottom-bar {
  margin-top: -27px;
}
.mfp-title,
.mfp-counter {
  color: #7b7571;
  font-size: 18px;
}

.mfp-with-zoom .mfp-container,
.mfp-with-zoom.mfp-bg {
  opacity: 0;
  -webkit-backface-visibility: hidden;
  /* ideally, transition speed should match zoom duration */
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.mfp-with-zoom.mfp-ready .mfp-container {
  opacity: 1;
}
.mfp-with-zoom.mfp-ready.mfp-bg {
  opacity: 0.8;
}

.mfp-with-zoom.mfp-removing .mfp-container,
.mfp-with-zoom.mfp-removing.mfp-bg {
  opacity: 0;
}
.mfp-arrow-right::after,
.mfp-arrow-right .mfp-a {
  border-left: 17px solid #7b7571;
}
.mfp-arrow-left::after,
.mfp-arrow-left .mfp-a {
  border-right: 17px solid #7b7571;
}
.mfp-close {
  font-size: 52px;
  top: -10px;
}
.mfp-image-holder .mfp-close,
.mfp-iframe-holder .mfp-close {
  color: #7b7571;
}


.featured img {
  margin: 0px;
  float: right;
  width: 200px;
  border: 10px solid #fff !important;
  margin-left: 10px;
}
.featured .text {
  text-align: right;
}
.featured-right .featured img {
  float: left;
  margin-right: 10px;
}
.featured-right .featured .text {
  text-align: left;
}


@media (max-width: 1199px) {
  .featured,
  .featured-right .featured {
    text-align: center;
  }
  .featured .text,
  .featured-right .featured .text {
    text-align: center;
  }
  .featured img,
  .featured-right .featured img {
    float: none;
    margin: auto;
  }
}
@media (max-width: 767px) {
  section {
    padding: 60px 0px;
  }

  ul.timeline:before {
    left: 40px;
  }
  .timeline > li {
    margin-top: 0px;
  }

  ul.timeline > li > .timeline-panel {
    width: calc(100% - 90px);
    width: -moz-calc(100% - 90px);
    width: -webkit-calc(100% - 90px);
  }

  ul.timeline > li > .timeline-badge,
  ul.timeline > li:first-child > .timeline-badge,
  ul.timeline > li > .timeline-end .timeline-badge {
    left: 15px;
    margin-left: 0;
    top: 16px;
  }

  .final-frase {
    margin-top: -29px;
    width: 70%;
    margin-left: 90px;
    text-align: left;
  }

  ul.timeline > li > .timeline-panel {
    float: right;
  }

  ul.timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  ul.timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }

  section#footer ul.names {
    font-size: 28px;
  }
  section#footer .circle {
    width: 43px;
    height: 43px;
    font-size: 31px;
    line-height: 1.2em;
    top: 0px;
  }
}
`;

export default globalStyles;
