import axios from 'axios';
import mikan from "mikanjs";
import sharp from "sharp";
import TextToSVG from "text-to-svg";

const ogp_titles = [ "Craig_Coleman", "Haruki_Kinoshita" ];

const generateOGP = function (value) {
  const textToSVG = TextToSVG.loadSync(
    `./assets/fonts/Poppins-SemiBold.ttf`
  );

  // const ogptitle = "Craig Allen Coleman";

  const svgOptions = {
    x: 0, y: 0, fontSize: 84, anchor: "left top",
    attributes: { fill: "white", stroke: "white" }
  };


  const textSvg = textToSVG.getSVG(ogp_titles[value].replace(/_/g, ' '), svgOptions);
  sharp('./static/img_generator/ogp_bg_wave.png')
    .composite([
      {
        input: Buffer.from(textSvg)
      }
    ])
    .resize(1200, 630)
    .toFile(`./assets/banner/${ogp_titles[value]}.png`, (error) => {
      // eslint-disable-next-line no-console
      if (error) console.log('OGP Generate Error: ' + error)
    })
}

module.exports = function () {
  this.nuxt.hook('generate:before', (generator) => {
    // eslint-disable-next-line no-console
    console.log('OgpGenerater:start')
    const ogp_titles = []
    const api_url = "https://script.google.com/macros/s/AKfycbxp6NqJLbjD4pdjqloabrjwRxN_hhXZ9nv1O3cRtdtkraiiZEfeKt9lUgubcCMbw0g17g/exec";
    axios.get(api_url, {
      crossDomain: true
    })
      .then(response => console.log(response.data))
      .catch(function (error) {
        console.log('Error: imageGenerator.js');
      });
    // generateOGP(el)
    // eslint-disable-next-line no-console
    console.log('OgpGenerater:finish')
  })
}


