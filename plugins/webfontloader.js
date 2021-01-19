// if (typeof window !== 'undefined') {
//   var WebFont = require('webfontloader');

//   WebFont.load({
//     google: {
//       families: ['Droid Sans', 'Droid Serif'],
//     },
//   });
// }


import Vue from 'vue'

// Vue.mixin({
//   layout({ app }) {
//     return app.$ua.isDesktop ? 'desktop' : 'mobile'
//   }
// })

export default {
  asyncData(context) {
    const deviceType = context.$ua.isFromAndroidOs()
    console.log('deviceType', deviceType)
    return { deviceType }
  }
}


// import Vue from 'vue'

// export default {
//   mounted() {
//     this.$nextTick(function () {
//       this.$adobeFonts(document)
//     })
//   }
// }



// export default (context, inject) => {
//   const ua_os = await $axios.$ua.deviceType()

// }



// asyncData(context) {
//   const deviceType = context.$ua.deviceType()
//   return { deviceType }
// }



//   Vue.prototype.$isApple = (deviceOS) => {
//     if (this.deviceOS !== 'Mac OS X' || this.deviceOS !== 'iOS') {
//       return true
//     }
//     else {
//       return false
//     }
//   }

  // const ua_os = context.$ua.os()
  // const ua_android = context.$ua.isFromAndroidOs()