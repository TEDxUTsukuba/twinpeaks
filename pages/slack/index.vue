<template>
  <section class="section">
    <section class="hero is-halfheight">
      <div class="hero-body">
        <h1 class="title">Slack</h1>
      </div>
    </section>
    <b-field>
      <b-upload
        v-model="dropFile"
        drag-drop
      >
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon
                icon="upload"
                size="is-large"
              />
            </p>
            <p>ファイルをドロップするか、ここをクリックしてアップロードするファイルを選択してください。</p>
          </div>
        </section>
      </b-upload>
    </b-field>
    <div v-if="dropFile" class="block">
      <div class="tags">
        <span class="tag is-light">
          {{ dropFile.name }}
          <button
            class="delete is-small"
            type="button"
            @click="deleteDropFile(index)"
          />
        </span>
      </div>
      <button class="button is-primary" @click="uploadedData()">
        読み込む
      </button>
    </div>
    <div class="table-wrapper">
      <table class="table is-bordered">
        <thead>
          <tr>
            <!-- <th>channelId</th> -->
            <!-- <th>talkId</th> -->
            <!-- <th>ts</th> -->
            <!-- <th>threadId</th> -->
            <th>talkUser</th>
            <th>text</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in csvData" :key="item.id">
            <td v-bind:class="[item.threadTs === item.ts ? 'has-background-light' : '']">{{ item.date }}</td>
            <td>{{ item.talkUser }}</td>
            <td>{{ item.text }}</td>
          </tr>
        </tbody>
      </table>
    </div>


    
    <article class="media is-size-7 font-awesome">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/64x64.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Barbara Middleton </strong><small>2021/01/22</small>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          </p>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="tag is-light">&#x1f605; 5</span>
              </a>
              <a class="level-item">
                <span class="tag is-light">&#x1f496; 2</span>
              </a>
              <a class="level-item">
                <span class="tag is-light">&#x1f4af; 1</span>
              </a>
            </div>
          </nav>
        </div>

        <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
          <template #trigger="props">
            <a aria-controls="contentIdForA11y1">
              <!-- <span v-if="!props.open ? '▼' : '▲'"></span> -->
              {{ !props.open ? 'Open thread' : 'Close thread' }}
              <span>(2 replies)</span>
            </a>
          </template>

          <article class="media is-size-7">
            <figure class="media-left">
              <p class="image is-32x32">
                <img src="https://bulma.io/images/placeholders/32x32.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Sean Brown </strong><small>2021/01/23</small>
                  <br>
                  Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                </p>
              </div>

              <!-- <article class="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
              </article>

              <article class="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
              </article> -->
            </div>
            <div class="media-right">
              <!-- <button class="button">B</button> -->
            </div>
          </article>

          <article class="media is-size-7">
            <figure class="media-left">
              <p class="image is-32x32">
                <img src="https://bulma.io/images/placeholders/32x32.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Kayli Eunice </strong><small>2021/01/23</small>
                  <br>
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                </p>
              </div>
            </div>
            <div class="media-right">
              <!-- <button class="button">B</button> -->
            </div>
          </article>

        </b-collapse>
      </div>
      <div class="media-right">
        <!-- <button class="button">B</button> -->
      </div>
    </article>
    <article class="media is-size-7 font-awesome">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/64x64.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Clare Underwood </strong><small>2021/01/22</small>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
          </p>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="tag is-light">&#x1f605; 5</span>
              </a>
              <a class="level-item">
                <span class="tag is-light">&#x1f496; 2</span>
              </a>
              <a class="level-item">
                <span class="tag is-light">&#x1f4af; 1</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="media-right">
        <!-- <button class="button">B</button> -->
      </div>
    </article>

  </section>
</template>

<style scoped>
  .invisible {
    display: none;
  }
</style>

<script>

export default {
  name: 'UploadForm',
  data () {
    return {
      dropFile: null,
      csvData: [] // csvデータ格納用
    }
  },
  methods: {
    // アップロードしたファイル削除用
    // deleteDropFile (index) {
    //   this.dropFile = null
    // },
    // アップロードしたcsvファイルをcsvDataに格納する用

    uploadedData (value) {
      this.csvData = [] // csvDataを初期化
      const csvfile = this.dropFile
      const reader = new FileReader()
      const loadCSV = () => {
        // const lines = reader.result.split('\n') // 改行毎にデータを分ける
        const lines = reader.result.split('2x5z') // 改行毎にデータを分ける
        // lines.shift() // csvファイルの先頭（ヘッダ）を削除
        // csvファイルの各行をcsvDataにオブジェクトとしてpushする
        lines.forEach((element, index) => {
          const workerData = element.split(',') // 区切り文字はカンマ
          if (workerData.length < 6) { return } // 読み込んだ行のデータが欠けている場合は無視
          this.csvData.push(
            {
              id: index,
              channelId: workerData[0],
              talkId: workerData[1],
              ts: workerData[2],
              threadTs: workerData[3],
              talkUser: workerData[4],
              text: workerData[5].replace(/\*/,'').replace(/\"/,'').replace(/\"/,''),
              date: workerData[6]
            }
          )
        })
      }
      reader.onload = loadCSV
      reader.readAsText(csvfile)
    }
  }
}
</script>