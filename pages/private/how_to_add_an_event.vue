<template>
  <section class="section content">
    <div class="has-text-centered" style="margin-top: 5rem;">
      <h1 class="title is-1">
        イベントを追加する
      </h1>
      <h1 class="subtitle">
        How to add an event
      </h1>
      <p>
        <nuxt-link to="/events/">イベント一覧ページ</nuxt-link>に個別のイベントページを追加するための簡単なステップを説明します。
      </p>
    </div>
    <hr>
    <img src="/sample/Screenshot_2021-03-23 Event TEDxUTsukuba.png" style="box-shadow: 0px 10px 20px rgba(0,0,0,0.4);" alt="Event Info Image">
    <hr>
    <h1 class="title has-text-centered">
      Basic Usage
    </h1>
    <div class="notification">
      <h1 class="is-size-5">Open Google Sheets</h1>
      <a class="has-text-link" href="https://docs.google.com/spreadsheets/d/15Qy3GIbFdEIJk3A-X8Zb0EIz9pixsLY9piTXzCVlhdc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Website Event Info GAS</a>
      <p>
        下記のいずれかのGoogleアカウントで、このGoogleスプレッドシートにアクセスしてください。
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
      <h1 class="is-size-5">Familialize yourself with the sheet</h1>
      <p>
        1行が1つのイベントに対応しています。シートの1~4列目にある <span class="has-text-primary has-text-weight-bold">id, name, type, date</span> は<strong>入力必須</strong>です。その他の項目は、空欄にしても問題ありません。<br>"example" のシートや、このページの最下部にある凡例を参考に、シートの全貌を理解してみてください。
      </p>
    </div>
    <div class="notification">
      <h1 class="is-size-5">Assign a unique ID</h1>
      <p>
        idは、イベントを特定するために使われており、他のイベントと重複しない固有の値(数値もしくは文字列)である必要があります。原則として<strong>開催年月日</strong>を用いて、<strong>YYYYMMDD</strong> の形式で命名してください。同日に2つのイベントを開催する場合は、年月日の後に数字や文字列を加えるなどしてください。<br><br>
      </p>
      <pre>
        <code>20200327   // 2020年3月27日の例</code>
        <code>20200328_1   // 2020年3月28日の1つ目のイベントの例</code>
      </pre>
    </div>
    <div class="notification">
      <h1 class="is-size-5">Add new row</h1>
      <p>
        イベントを追加するときは、<strong>開催年月日が降順（上が新しく下が古い）</strong>になるように、新しく行を挿入するようにしてください。ページ下部にある凡例を参考に、シートの各セルを埋めてください。
      </p>
    </div>
    <div class="notification">
      <h1 class="is-size-5">Save and Publish</h1>
      <p>
        シートの各セルを埋めるだけで、個別のイベントページがただちに公開されます！<br>
        下記URLにアクセスしてみてください。シートの内容が反映されていれば完了です！
      </p>
      <p>https://www.tedxutsukuba.com/events/<span class="has-text-weight-bold">イベントのid</span></p>
    </div>
    <div class="notification">
      <h1 class="is-size-5">It's your turn!</h1>
      <p>サンプルを見る</p>
      <a href="https://www.tedxutsukuba.com/events/20190930" target="_blank" rel="noopener noreferrer" class="has-text-link">https://www.tedxutsukuba.com/events/20190930</a>
    </div>
    <h1 class="title has-text-centered">
      Advanced Settings
    </h1>
    <div class="notification">
      <h1 class="is-size-5">説明文のリッチテキスト化</h1>
      <p>
        説明文* ではHTMLタグを使い、文章の一部を太字にしたり、改行を入れたりすることができます。適宜利用して、読みやすくしましょう。<br>* description_ja, description_en<br><br>
      </p>
      <div class="table-container">
        <table class="table is-size-7">
          <tr>
            <td>&lt;strong&gt;type here&lt;/strong&gt;</td>
            <td><strong>type here</strong></td>
            <td>太字</td>
          </tr>
          <tr>
            <td>&lt;i&gt;type here&lt;/i&gt;</td>
            <td><i>type here</i></td>
            <td>斜体</td>
          </tr>
          <tr>
            <td>&lt;strike&gt;type here&lt;/strike&gt;</td>
            <td><strike>type here</strike></td>
            <td>取り消し線</td>
          </tr>          
          <tr>
            <td>&lt;br&gt;</td>
            <td></td>
            <td>改行</td>
          </tr>     
          <tr>
            <td>&lt;br&gt;&lt;br&gt;</td>
            <td></td>
            <td>1行の空行</td>
          </tr>    
          <tr>
            <td>&lt;a href="https://www.tedxutsukuba.com"&gt;type here&lt;a&gt;</td>
            <td><a href="https://www.tedxutsukuba.com" class="has-text-link">type here</a></td>
            <td>リンク</td>
          </tr>
          <tr>
            <td>&lt;a class="button" href="https://www.tedxutsukuba.com"&gt;type here&lt;a&gt;</td>
            <td><a class="button is-small" href="https://www.tedxutsukuba.com">type here</a></td>
            <td>リンク(ボタン)</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="notification">
      <h1 class="is-size-5">サムネイル画像</h1>
      <p>
        個別のイベントページの左上に表示されるサムネイル画像は、以下の中から選ぶことができます。
        表示したい画像の下にある文字列を、thumbnailのセルに入力してください。
      <p>
      <div class="columns is-multiline is-mobile">
        <div class="column is-3-widescreen is-4-desktop is-4-tablet is-6-mobile">
          <img src="/sample/chat.jpg">
          chat
        </div>
        <div class="column is-3-widescreen is-4-desktop is-4-tablet is-6-mobile">
          <img src="/sample/meeting.jpg">
          meeting
        </div>
        <div class="column is-3-widescreen is-4-desktop is-4-tablet is-6-mobile">
          <img src="/sample/seminar.jpg">
          seminar
        </div>
        <div class="column is-3-widescreen is-4-desktop is-4-tablet is-6-mobile">
          <img src="/sample/thinker.jpg">
          thinker
        </div>
        <div class="column is-3-widescreen is-4-desktop is-4-tablet is-6-mobile">
          <img src="/sample/lightbulb.jpg">
          lightbulb
        </div>
        <div class="column is-3-widescreen is-4-desktop is-4-tablet is-6-mobile">
          <img src="/sample/tedxutsukuba.jpg">
          tedxutsukuba
        </div>
        <div class="column is-3-widescreen is-4-desktop is-4-tablet is-6-mobile">
          <img src="/sample/tedxutsukubasalon.jpg">
          tedxutsukubasalon
        </div>
        <div class="column is-3-widescreen is-4-desktop is-4-tablet is-6-mobile">
          <img src="/sample/tedxutsukubalive.jpg">
          tedxutsukubalive
        </div>
        <p>
          将来的には、任意の画像を設定できるようにしたいのですが、画像をどこに置くかとか、アスペクト比の問題など諸事情あり...
        </p>
      </div>
    </div>
    <h1 class="title has-text-centered">
      Variables
    </h1>
    <div class="table-container">
      <table class="table is-size-7">
        <thead>
          <tr><th>項目 (*必須)</th><th>内容</th><th>説明</th></tr>
        </thead>
        <tbody>
          <tr><td>id*</td><td>ID</td><td><span class="tag is-family-code">YYYYMMDD</span></td></tr>
          <tr><td>name*</td><td>イベント名</td><td></td></tr>
          <tr><td>type*</td><td>開催形態</td><td><span class="tag is-family-code">virtual</span> <span class="tag is-family-code">hybrid</span> <span class="tag is-family-code">onsite</span> のいずれか</td></tr>
          <tr><td>date*</td><td>開催年月日</td><td><span class="tag is-family-code">YYYY/MM/DD</span></td></tr>
          <tr><td>from</td><td>開始時刻</td><td><span class="tag is-family-code">HH:MM</span> 24時間表示・日本標準時(UTC+9)</td></tr>
          <tr><td>to</td><td>開始時刻</td><td><span class="tag is-family-code">HH:MM</span> 24時間表示・日本標準時(UTC+9)</td></tr>
          <tr><td>summary_ja</td><td>短めの紹介文(日本語)</td><td>イベント一覧ページで表示される。HTMLタグが使える。</td></tr>
          <tr><td>summary_en</td><td>短めの紹介文(英語)</td><td>イベント一覧ページで表示される。HTMLタグが使える。</td></tr>
          <tr><td>description_ja</td><td>長めの紹介文(日本語)</td><td>個別のイベントページで表示される。HTMLタグが使える。</td></tr>
          <tr><td>description_en</td><td>長めの紹介文(英語)</td><td>個別のイベントページで表示される。HTMLタグが使える。</td></tr>
          <tr><td>thumbnail</td><td>サムネイル画像</td><td>上記説明参照</td></tr>
          <tr><td>location_ja</td><td>開催場所(日本語)</td><td></td></tr>
          <tr><td>location_en</td><td>開催場所(英語)</td><td></td></tr>
          <tr><td>googlemaps</td><td>Googleマップのリンク</td><td>Googleマップで位置情報を選択し、共有ボタンを押して取得したリンクを貼り付ける。</td></tr>
          <tr><td>webcast</td><td>映像配信サイトの名前</td><td></td></tr>
          <tr><td>webcast_url</td><td>映像配信サイトのURL</td><td></td></tr>
          <tr><td>external_url</td><td>外部サイトのリンク</td><td>イベントに関連するウェブサイトのリンクがあれば (TED.comのページなど)</td></tr>
          <tr><td>isSignupRequired</td><td>参加申込の有無</td><td><span class="tag is-family-code">true</span> <span class="tag is-family-code">false</span> のいずれか</td></tr>
          <tr><td>signup_open</td><td>参加申込の開始日</td><td><span class="tag is-family-code">YYYY/MM/DD</span></td></tr>
          <tr><td>signup_close</td><td>参加申込の終了日</td><td><span class="tag is-family-code">YYYY/MM/DD</span></td></tr>
          <tr><td>signup_url</td><td>参加申込のリンク</td><td></td></tr>
          <tr><td>isFree</td><td>無料かどうか</td><td><span class="tag is-family-code">true</span> <span class="tag is-family-code">false</span> のいずれか</td></tr>
          <tr><td>fee_adult</td><td>チケット価格(一般)</td><td>数値</td></tr>
          <tr><td>fee_student</td><td>チケット価格(学生)</td><td>数値</td></tr>
        </tbody>
      </table>
    </div>
    <p class="">
      <ul>
        <li>最終更新: 2021/03/23</li>
        <li>執筆者: 木下晴貴</li>
        <li>連絡先: harukikinoshita&#64;outlook.com</li>
      </ul>
    </p>
  </section>
</template>

<script>
export default {
  head: {
    title: 'イベントを追加する',
    description: 'イベント一覧ページに個別のイベントページを追加するための簡単なステップを説明します。',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: "イベント一覧ページに個別のイベントページを追加するための簡単なステップを説明します。" 
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
        content: 'イベントを追加する'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.tedxutsukuba.com/private/how_to_add_an_event'
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
