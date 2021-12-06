const app = Vue.createApp({
    data: () => ({
        items: null,
        keyword: '',
        message: ''

    }),
    watch: {
        keyword: function(newKeyword,oldKeyword){
            console.log(newKeyword)
            this.message = 'Waiting for you to stop typing...'
            this.debounceGetAnswer()
        }
    },
    mounted: function() {
        // this.keyword = 'JavaScript'
        // this.getAnswer()
        this.debounceGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function() {
            if(this.keyword === ''){
                this.items = null
                return
            }

            this.message = 'Lading...'
            //こことL29あたりが謎　インスタンス生成しているので定数で指定？
            const vm = this
            const params = { page: 1, pre_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items',{ params })
            .then(function(response){
                // this.items = response.data
                vm.items = response.data
            })
            .catch(function(error){
                vm.message = 'Error!' + error
            })
            .finally(function() {
                vm.message = ''
            })
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

//■算出プロパティ>>監視プロパティ 基本算出
//watch: {
//     firstName: function(value) {
//         this.fullName = value + this.lastName
//     },
//     lastName: function(value) {
//         this.fullName = this.firstName + value
//     }
// }
// computed: {
//     fullName: function(){
//        retuen this.firstName + this.lastName 
//     }
// }

//■監視プロパティでよく使う便利機能　Deep
//1次階層の変化しか監視していないのでdeep : trueで深い階層も監視可能に
