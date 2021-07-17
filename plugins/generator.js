// const sharp = require("sharp");
import TextToSVG from "text-to-svg";
var fs = require('fs');

export default (context, inject) => {
  // const zipcode = async function (zipcode) {
  //   return await this.$axios.get(`/zipApi/api/search?zipcode=${zipcode}`);
  // }

  const mixImage = async (val) => {
    try {
      const textSvg = await TextToSVG.loadSync(
        `./assets/fonts/Poppins-SemiBold.ttf`
      ).getSVG(val.replace(/_/g, ' '));
      // const image = await sharp("ogp/ogp_bg_wave.jpg")
      //   .resize({ width: 500, height: 500 })
      //   .toFormat("png")
      //   .png({ quality: 100 })
      //   .toFile("output.png");

      console.log("success");
      // save image to database here
      // return "success"
      return textSvg
    } catch (e) {
      console.warn(e);
    }
  };

  inject('inputText', mixImage);
  context.$inputText = mixImage;
}