(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{255:function(t,e,n){var content=n(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("31741a87",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";var r=n(255);n.n(r).a},257:function(t,e,n){(e=n(41)(!1)).push([t.i,"h2[data-v-0bc2659b],p[data-v-0bc2659b]{color:red}.youtube-frame[data-v-0bc2659b]{display:flex;justify-content:center;align-items:center;text-align:center;margin:0 auto;padding:0}iframe[data-v-0bc2659b]{width:960px;height:540px}",""]),t.exports=e},258:function(t,e,n){"use strict";n(16);var r=n(3),l=n(2),o=n(260),c=n.n(o);l.a.use(c.a);var d={data:function(){return{isImageModalActive:!1,isCardModalActive:!1}},props:{vId:String,aPlay:String},computed:{player:function(){return this.$refs.youtube.player}},methods:{playVideo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.player.playVideo();case 2:case"end":return e.stop()}}),e)})))()},playing:function(){}}},v=(n(256),n(4)),component=Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"youtube-frame"},[e("youtube",{ref:"youtube",attrs:{"video-id":this.vId,"player-vars":this.aPlay},on:{playing:this.playing}})],1)}),[],!1,null,"0bc2659b",null);e.a=component.exports},271:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("665b797b",content,!0,{sourceMap:!1})},309:function(t,e,n){"use strict";var r=n(271);n.n(r).a},310:function(t,e,n){(e=n(41)(!1)).push([t.i,"div#thumbnails[data-v-f760ab66]{padding:1vw}",""]),t.exports=e},397:function(t,e,n){"use strict";n.r(e);var r={components:{Movie:n(258).a},data:function(){return{videoId1:"Ot4n4txl4Ko"}},head:{title:"Talks"},filters:{substrBefore:function(text,t){return text.length>t?text.slice(0,t):text},substrAfter:function(text){return text.length>50?text.substr(50):text}},props:{year:{type:String,required:!0}},computed:{talkList:function(){return this.$store.getters["talk/showAllTalks"](this.year)},player:function(){return this.$refs.youtube.player}}},l=(n(309),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"wrapper-dark"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"nmp-card has-text-centered-mobile has-text-left"},[n("h1",{staticClass:"title is-1 is-spaced"},[t._v(t._s(t.$t("talks.title")))]),t._v(" "),n("h1",{staticClass:"subtitle has-text-grey-light"},[t._v(t._s(t.$t("talks.subtitle")))]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"tag has-text-weight-bold"},[t._v(t._s(t.$t("button.partialtranslation")))]),t._v(" "),n("a",{staticClass:"text",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSeGADXgQymefKwe_HPvna2hufR9IBRYjPhUDC1gRnehCNU35Q/viewform?usp=sf_link",target:"_blank",rel:"noopener noreferrer"}},[n("small",[t._v(t._s(t.$t("button.helpustranslate")))])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"columns is-multiline"},t._l(t.talkList,(function(e,r){return n("div",{key:r,staticClass:"column is-one-third-fullhd is-half-widescreen is-half-desktop is-half-tablet",staticStyle:{display:"inline-block","vertical-align":"top"},attrs:{id:"thumbnails"}},[n("div",{staticClass:"nmp-dark"},[t._m(0,!0),t._v(" "),n("div",{staticClass:"card-image"},[n("Movie",{attrs:{vId:e.youtube_id}})],1),t._v(" "),n("div",{staticClass:"card-content"},[n("h1",{staticClass:"title is-4"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),"ja"==t.$i18n.locale?n("h1",{staticClass:"subtitle is-5"},[t._v("\n              "+t._s(e.speaker_name)+"\n            ")]):t._e(),t._v(" "),"en"==t.$i18n.locale?n("h1",{staticClass:"subtitle is-5"},[t._v("\n              "+t._s(e.speaker_name_alt)+"\n            ")]):t._e(),t._v(" "),n("b-collapse",{attrs:{animation:"fade",open:!1,position:"","aria-id":"contentIdForA11y1"},scopedSlots:t._u([{key:"trigger",fn:function(r){return n("span",{attrs:{"aria-controls":"contentIdForA11y1"}},[r.open||"ja"!=t.$i18n.locale?t._e():n("p",{staticClass:"is-size-7 has-text-grey-light"},[t._v(t._s(t._f("substrBefore")(e.description_ja,75))+"…")]),t._v(" "),r.open||"en"!=t.$i18n.locale?t._e():n("p",{staticClass:"is-size-7 has-text-grey-light"},[t._v(t._s(t._f("substrBefore")(e.description_en,75))+"…")]),t._v(" "),r.open&&"ja"==t.$i18n.locale?n("p",{staticClass:"is-size-7 has-text-grey-light"},[t._v(t._s(e.description_ja))]):t._e(),t._v(" "),r.open&&"en"==t.$i18n.locale?n("p",{staticClass:"is-size-7 has-text-grey-light"},[t._v(t._s(e.description_en))]):t._e(),t._v(" "),n("br"),t._v(" "),n("b-button",{staticClass:"button is-gradient is-rounded is-outlined is-small",attrs:{"icon-left":r.open?"chevron-up":"chevron-down"}},[t._v(t._s(r.open?t.$t("button.readless"):t.$t("button.readmore")))])],1)}}],null,!0)})],1)])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"})])}],!1,null,"f760ab66",null);e.default=component.exports}}]);