const app = Vue.createApp({
    data: () => ({
        km: '0',
        m: '0'
    }),
    watch: {
        km: function(value) {
            this.km = value
            this.m = value * 1000

            //下記ではNaNとなる
            // this.m = this.mk * 1000
        },
        m: function(value) {
            this.m = value
            this.km = value / 1000

            //下記ではNaNとなる
            // this.km = this.m /1000
        }
    }
})
app.mount('#app')

//■ディレクティブ
//v-once: 初回のみテンプレート実行
//v-pre: 範囲のコンパイルを飛ばす　{{ }}を表示させたい
//v-html:<spam style="color:red">hoge 色変わるかテキストで全部表示されるか
//v-cloak:一瞬{{}}が表示するのを防ぐ　js:<p v-cloak>  css:[v-cloak]{ display: none; } で何も表示させない
//v-text:{{}}のどちらでも良い
//Javascriptは{{}}の中で使用可能　ifは三項演算子で！
//v-bindの省略系:<a v-bind:href="url"> <a :href="url">

//■算出プロパティ computed: 関数によって算出したデータを返すプロパティ
//methods→関数　毎回計算する　/ computed→ちょい計算可能な変数　キャッシュ残る

//■監視プロパティ　watch: 対象のレコードに変化があった場合のみ動く