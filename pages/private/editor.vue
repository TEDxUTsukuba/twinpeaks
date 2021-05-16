<template>
  <client-only>
    <section id="app" class="hero is-fullheight has-background-light">
      <div class="hero-body">
        <div class="container">
          <div class="section">
            <mavon-editor
              language="ja"
              :subfield="true"
              placeholder="文章を入力"
              :toolbars="false"
              :toolbarsFlag=false
            />
          </div>
          <div class="has-text-centered" style="margin: 0 0 2vh 0;">
            <button class="button" @click="show=!show">凡例を表示</button>
          </div>
          <div class="section" v-if="show">
            <mavon-editor
              id="hanrei"
              v-model="defaultText"
              :language="'ja'"
              :subfield="true"
              placeholder="文章を入力"
              :toolbars="markdownOption"
              :toolbarsFlag=false
            ></mavon-editor>
          </div>
        
        </div>
      </div>
    </section>
  </client-only>
</template>

<script>
  export default {
    layout: 'headeronly',
    data() {
      return {
        show: false,
        defaultText: "# 見出し1 \n## 見出し2 \n\n本文 **太字** *斜体* ~~取消線~~ \n\n1. 番号付き箇条書き\n2. 番号付き箇条書き\n\n> 引用\n___\n\n[ウェブサイトのリンク](https://www.tedxutsukuba.com)\nリンクは必ず `https://` または `http://` を含めること！\n",
        markdownOption: {
          bold: false,
          italic: false,
          header: false,
            
        }
      };
    },
  };
</script>

<style lang="scss">
  mavon-editor {
    font-family: 'Hiragino Kaku Gothic W3', 'Hiragino Sans', sans-serif;
    .fa:before{ padding-left: 1px !important; font: normal normal normal 24px/1 "Material Design Icons"; font-size: inherit; line-height: inherit; text-rendering: auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
    .fa-mavon-bold::before {
      content: '\F0264';
    }
  }
</style>