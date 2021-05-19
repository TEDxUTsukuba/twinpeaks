<template>
  <section class="section content">
    <div class="has-text-centered" style="margin-top: 5rem;">
      <h1 class="title is-1">
        メンバー情報を追加・更新する
      </h1>
      <h1 class="subtitle">
        How to update team
      </h1>
      <p>
        メンバーの情報を更新するための簡単なステップを説明します。
      </p>
    </div>
    <hr v-if="$ua.isFromSmartphone()">
    <b-notification type="is-danger" :closable="false" has-icon v-if="$ua.isFromSmartphone()">
      このページはPCやタブレットでの閲覧に最適化されています。This page is optimized for PCs and tablets. 
    </b-notification>
    <hr>
    <img src="/sample/Screenshot_2021-04-03 TEDxUTsukuba A Hub for Tsukuba's Ideas.png" style="box-shadow: 0px 10px 20px rgba(0,0,0,0.4);" alt="Event Info Image">
    <hr>
    <h1 class="title has-text-centered">
      Introduction
    </h1>
    <div class="notification">
      <p>団体の信頼性や透明性を確保し、身近な存在だと感じてもらうために、ウェブサイトで所属メンバーに関する情報を公開しています。</p>
      <ul>
        <li><nuxt-link to="/about/utsukuba" class="has-text-info">団体紹介ページ</nuxt-link>の<a href="https://www.tedxutsukuba.com/about/utsukuba#members" class="has-text-info">メンバー紹介セクション</a>には、現役メンバーの顔写真と一部の情報（サマリー）が一覧で表示されています。</li>
        <li>それとは別に<nuxt-link to="/about/harry" class="has-text-info">個人のページ</nuxt-link>が用意されています。個人ページには、メンバー紹介セクションの「{{ $t('button.readmore')}}」ボタンからアクセスすることができます。なおOB/OGは一覧ページには表示されませんが、個別のページは存在しており、URLを知っていればアクセスできます。</li>
      </ul>
    </div>
    <h1 class="title has-text-centered">
      Basic Usage
    </h1>
    <div class="notification">
      <h1 class="is-size-5">Googleシートを開く / Open Google Sheets</h1>
      <a class="has-text-info" href="https://docs.google.com/spreadsheets/d/1WTm0XrjQ_fYoQgM-BmD0Il6zG4xrogzhz9sAJx-c1y8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">TEDxUTsukuba Members Public Data <i class="mdi mdi-open-in-new" /></a>
      <p>
        下記のいずれかのGoogleアカウントで、このGoogleシートにアクセスしてください。
      </p>
      <ul>
        <li>tedxtsukuba&#64;gmail.com</li>
        <li>tedxutsukuba&#64;gmail.com</li>
      </ul>
      <p>
        なお編集権限があるのは下記のアカウントと木下のアカウントのみですが、閲覧は誰でもできます。
      </p>
    </div>
    <div class="notification">
      <h1 class="is-size-5">コンテンツを追加する / Add Contents</h1>
      <p>
        <strong>上記のスプレッドシートの埋まっている行を参考にすれば、問題なく全項目を入力できると思います！</strong> さらにいくつかのセルにはバリデーションを付けているので、適切でない値を入力するとアラートが出ます。それでもわからないことがあったら、下記の凡例を確認してみてください。ただし、オススメしたいTED/TEDxトークのリンクについては若干ややこしいので、この下のセクションで説明しておきます。
      </p>
    </div>

    <div class="notification">
      <h1 class="is-size-5">オススメしたいTED/TEDxトークのリンクについて</h1>
      <p>
        <strong>TED</strong>トークのほとんどはTED.comとYouTubeの両方で公開されています。一方で<strong>TEDx</strong>トークは主にYouTubeで公開されており、ごく一部のトークのみTED.comで公開されています。我々の方針としては、できる限りTED.comに誘導して、多くの人にTEDのコンテンツに触れてもらえるようにしようと思います。(YouTubeの方が慣れていて使いやすいという意見もあるかと思いますが、ご理解ください)<br><br>
        <strong class="has-text-success">TEDとYouTubeの両方で公開されているトークをオススメしたい場合</strong>
        <ul>
          <li><span class="tag is-white">https://www.ted.com</span>から始まるTED.comのURLを<span class="tag is-white">tedtalk</span>に貼り付ける。</li>
          <li><span class="tag is-white">tedtalk_alt</span>は空欄にする。</li>
        </ul>
        <strong class="has-text-success">YouTubeにしか掲載されていないトークをオススメしたい場合</strong>
        <ul>
          <li>YouTubeで、共有ボタン<i class="mdi mdi-share" />から<span class="tag is-white">https://youtu.be/</span>で始まるURLを取得し、<span class="tag is-white">tedtalk_alt</span>に貼り付ける。なおブラウザのアドレスバーには<span class="tag is-white">https://www.youtube.com/</span>で始まるURLが表示されていると思いますが、こちらは使わないでください。</li>
          <li><span class="tag is-white">tedtalk</span>は空欄にする。</li>
        </ul>
      </p>
    </div>

      <div class="table-container">
        <table class="table is-size-7 is-bordered is-striped">
          <thead>
            <tr>
              <th>シートのセル名</th>
              <th>内容</th>
              <th>説明</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>id</td>
            <td>ID</td>
            <td>他人と重複しないユニークな(一意の)値にする必要があります。英字で<span class="tag">名前_苗字</span>としていますが、万が一同姓同名の人がいたらニックネームなどを使って重複を回避してください。</td>
          </tr>
          <tr>
            <td>isActive</td>
            <td>現役メンバーかどうか</td>
            <td>現役メンバーとして活動している人は<span class="tag">true</span>引退した人(OB/OG)は<span class="tag">false</span>を入力。現役メンバーだけが<nuxt-link class="is-size-7 has-text-info" to="../about/utsukuba#members">メンバー紹介</nuxt-link>に表示されます。</td>
          </tr>
          <tr>
            <td>isImage</td>
            <td>顔写真があるかどうか</td>
            <td>顔写真がある人は<span class="tag">true</span>、ない人・表示したくない人は<span class="tag">false</span>を入力。</td>
          <tr>
            <td>family_name_{ja/en}</td>
            <td>苗字 {日本語表記/英語表記}</td>
            <td>英語表記の1文字目は大文字。</td>
          </tr>
          <tr>
            <td>given_name_{ja/en}</td>
            <td>名前 {日本語表記/英語表記}</td>
            <td>英語表記の1文字目は大文字。</td>
          </tr>
          <tr>
            <td>role</td>
            <td>役割</td>
            <td>具体的に curator とか partner coordinator って書くのがオススメ。新しく入ったメンバーは役割がまだ決まっていないと思うので空欄で大丈夫です。</td>
          </tr>
          <tr>
            <td>college_{ja/en}</td>
            <td>所属学類または研究群 {日本語表記/英語表記}</td>
            <td>参考: <a class="is-size-7 has-text-info" href="https://www.tsukuba.ac.jp/about/outline-je/" target="_blank" rel="noopener noreferrer">組織，職名の日英表記トップ<i class="mdi mdi-open-in-new" /></a></td>
          </tr>
          <tr>
            <td>home_state_{ja/en}</td>
            <td>出身の都道府県・州など {日本語表記/英語表記}</td>
            <td>自分が "home" と呼びたい場所を書いてください。</td>
          </tr>
          <tr>
            <td>tedtalk_headline_{ja/en}</td>
            <td>オススメしたいTED/TEDxトークのスピーカーとタイトル</td>
            <td><span class="tag">筑波太郎: タイトル</span>, <span class="tag">John Doe: Title</span> のように入力。</td>
          </tr>
          <tr>
            <td>tedtalk</td>
            <td>オススメしたいTED/TEDxトークのリンク</td>
            <td>（詳細は上記の注釈を参照）動画がTED.comで公開されている場合、<span class="tag">https://www.ted.com</span>で始まるURLを貼り付ける。</td>
          </tr>
          <tr>
            <td>tedtalk_alt</td>
            <td>オススメしたいTED/TEDxトークのリンク</td>
            <td>（詳細は上記の注釈を参照）動画がTED.comで公開されておらず、YouTubeにしかない場合、YouTubeの共有ボタン<i class="mdi mdi-share" />から<span class="tag">https://youtu.be/</span>で始まるURLを取得し貼り付ける。</td>
          </tr>
          <tr>
            <td>keyword</td>
            <td>自分を表す3つのキーワード</td>
            <td>自分の「好きな物」を書いてしまう人がいますが...そうではなく、自分のタイプとか性格とか特徴といった側面を考えて書いてみてください。<a class="is-size-7 has-text-info" href="https://twitter.com/BarackObama" target="_blank">海外の著名人 <i class="mdi mdi-open-in-new" /></a>ってbioにそういうの書きがちですね。TEDの創設者<a class="is-size-7 has-text-info" href="https://twitter.com/TEDchris" target="_blank">Chris Anderson <i class="mdi mdi-open-in-new" /></a>も。</td>
          </tr>
          <tr>
            <td>join</td>
            <td>入会した時期</td>
            <td><span class="tag">Apr 2021</span>のように入力。</td>
          </tr>
          <tr>
            <td>retire</td>
            <td>引退した時期</td>
            <td>現役メンバーは空欄。引退したメンバーは<span class="tag">Sept 2021</span>のように入力。</td>
          </tr>
          <tr>
            <td>message</td>
            <td>メッセージ</td>
            <td>
              皆さんからひとこと、自由に書いてください。私のTEDxストーリー、TEDxUTsukubaに入った理由・TEDxUTsukubaが好きな理由、自分にとってのTEDトークとは？、興味・関心のあること、Fun fact about you, ...etc.<br>
              参考(?)
              <a class="is-size-7 has-text-info" href="https://www.tedxhokkaidou.com/members/" target="_blank">TEDxHokkaidoU</a>
              <a class="is-size-7 has-text-info" href="https://www.tedxmelbourne.com/about#Team" target="_blank">TEDxMelbourne</a>
              <a class="is-size-7 has-text-info" href="https://tedxglasgow.com/about" target="_blank">TEDxGlasgow</a>
              </td>
          </tr>
          </tbody>
        </table>
      </div>

    <div class="notification">
      <h1 class="is-size-5">顔写真を追加する / Add Portrait</h1>
      <p>
        顔写真の掲載はプライバシーに関わるため<strong>任意</strong>としています。ただし、オーガナイザー・共同オーガナイザーは原則として掲載をお願いしています。
      </p>
      <p>
        画像はPCでは3:2(横長)、モバイルでは1:1(スクエア)で表示されます。縦長の画像でもこのサイズに切り抜かれて表示されます。
      </p>
      <p>
        掲載してよいという方は、手ブレしていない画像を1枚用意して、Googleドライブ <i class="mdi mdi-google-drive" /> の <a class="has-text-info" target="_blank">フォルダ <i class="mdi mdi-open-in-new" /></a>にアップロードしてください。各自で自分の顔写真を用意するのか、みんなで時間と場所を決めて集まって全員分の写真を撮るのかは、代によって方針が異なると思いますので、確認してみてください。
      </p>
      <p>
        画像をアップロードする際には、
        <ul>
          <li>ファイル名を自分のIDにするなどして、誰が誰だかわかるようにしておいてください。</li>
          <li>SlackかMessangerで木下宛に「顔写真をアップロードしておいたのでよろしく」的なメッセージをくれると助かります。</li>
        </ul>
      </p>
      <p>
        新しい画像に差し替えたいという場合も、同様の手順を踏んでください。
      </p>
    </div> 
    <div class="notification">
      <p>ご質問やご不明な点があればお気軽にお問い合わせください。</p>
    </div>
    <p class="">
      <ul>
        <li>最終更新: 2021/05/18</li>
        <li>執筆者: 木下晴貴</li>
        <li>連絡先: harukikinoshita&#64;outlook.com</li>
      </ul>
    </p>
  </section>
</template>

<script>
export default {
  head: {
    title: 'メンバー情報を追加・更新する',
    description: 'チーム紹介のページを更新するための簡単なステップを説明します。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: "チーム紹介のページを更新するための簡単なステップを説明します。" 
      },
      { 
        hid: 'twitter:card', 
        name: 'twitter:card', 
        content: 'summary' 
      },
      { 
        hid: 'twitter:site', 
        name: 'twitter:site', 
        content: '@tedxutsukuba' 
      },
      { 
        hid: 'twitter:creator', 
        name: 'twitter:creator', 
        content: '@tedxutsukuba' 
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'メンバー情報を追加・更新する'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.tedxutsukuba.com/private/how_to_update_team'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tedxutsukuba.com/twitter_summary.png'
      }
    ]
  }
}
</script>
