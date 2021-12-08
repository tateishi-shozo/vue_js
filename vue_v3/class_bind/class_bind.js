const app = Vue.createApp({
    data: () => ({

    }),
    watch: {
       
    },
    methods: {
        click: function(event){
            console.log(event)
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

//■クラスを動的にbind
//単数
//css: .large{}
//html:<span v-bind:class={ large : isLarge }> or :class={ large: isLarge}
//js: isLarge: true or false

//複数
//css: .large{},text{}
//html:<span v-bind:class={ large : isLarge , 'text' : hasError }>
//※ v-bindは頻出で省略可　2つめ以降のクラスは''(シングルクォート)必要
//js: isLarge: true or false , test : true or false

//普通指定のクラスと動的にbindしたクラスはどちらも有効 style注目！
//css: .large{},text{},style{}
//html:<span class="style" v-bind:class={ large : isLarge , 'text' : hasError }>
//※ v-bindは頻出で省略可　2つめ以降のクラスは''(シングルクォート)必要
//js: isLarge: true or false , test : true or false

//■配列でクラスbind
//css: .large{} , .text{} , .style{}
//html:<span v-bind:class="[ a , b ]">
//js: a : 'large' , b : 'text'

//■複数のクラスbindをオブジェクトへ　複数のクラスをhtmlに記載しない
//css: .large{} , .text{} , .style{}
//html:<span v-bind:class="object">
//js: object { large : true , 'text' : ture } ※2つ目以降''必要

//■三項演算子でクラスbind
//css: .large{} , .text{} , .style{}
//html:<span v-bind:class="is ? laege : '' ">  <span v-bind:class="[ is ? laege : '' , text ]">
//js:  large : 'large' , 'text' : 'text' , is : true } 

//■css記述をhtml,jsファイルに記載可能
//html:<span v-bind:style="object">
//js:  { object : { color : red , size : 42px } } 

//■v-if,v-else
//html
//<p v-if="toggle"> Yes </p>
//<p v-else> No </p>
//js:  data : { toggle : true } 

//■v-else-if
//html
//<p v-if="color === 'red'">Stop!</p>
//<p v-else-if="color === 'yellow'">Caution!</p>
//<p v-else-if="color === 'blue'">Go!</p>
//<p v-else> not red/yellow/blue </p>
//js:  data : { color : 'red' } 
//※ v-if＝●● ●●はboolean型

//■v-show 非表示条件
//html
//<p v-show="toggle">Stop!</p>
//<p v-else>Go!</p>
//js:  data : { toggle: true } 

//■イベントハンドラ　v-on
//html
//<p>{{ counter }}</p>
//<button v-on:click="counter++">click!</button>
//js:  data : { counter : "" } 

//■イベントオブジェクトは自動生成される
//いろんな情報がイベント（クリックなど）に付随

//■イベントハンドラに引数を渡す
//html:<button v-on:click="do( 'test' )">click!</button>
//js: methods { do : function(message){ this.message = message } }

//■イベントオブジェクトも引数に $event
//html:<button v-on:click="do( $event ,'test' )">click!</button>
//js: methods { do : function( $event , message ){ console.log(message) console.log( $event )  } }

//■イベントハンドラにいろいろな制限を設けることも可能 ※onceなど
//html:<button v-on:click.once ="do( 'test' )">click!</button>
//js: methods { do : function(message){ this.message = message } }

//■省略
//v-on  @
//v-bind:  :

//■v-model
// {{ $data }}でデータ表示させる
//html:<input type="text" v-model="xxx" value="yyy"> →xxxが優先される

//■checkboxから値渡す
//html:<input type="text" v-model="xxx" value="yyy"> →　チェックするとyyyがxxxに渡る
//チェックボックスが複数の場合は配列で

//■selectbox 単体
//html
//<select v-model="selected">
// <option disabled value="">Please select one</option>
// <option>red</select>
// <option>green</select>
// <option>blue</select>
//</select>

//■selectbox 複数
//html
//<select v-model="selected" multiple>
// <option>red</select>
// <option>green</select>
// <option>blue</select>
//</select>
//※ multipleで複数選択可能に js側は配列に

//■lazy　便利機能　確定後にデータ反映
//<input type="text" v-model.lazy="xxx">

//■trim 前後の空白をどけて保存

//■number 数値型に変換して保存　input要素は常に文字列を返す（value="number"意味ない）
//<input type="text" v-model.number="xxx">

//■コンポーネント 下記グローバル編
//js
//const app = Vue.createApp({
// })
//app.component('hello-component', {
//    template: '<p>hello!</p>'
//})
//app.mount('#app')
//
//html
//<hello-component></hello-component>

//■コンポーネント 下記ローカル編 
//vueインスタンス内の場合は下記のように記載　外で定数定義して　Vueインスタンス内でcomponents :~で呼び出し
//js
//const helloComponent = {
//    template: '<p>hello!</p>'
// }
//const app = Vue.createApp({
//  components: {
//   'hello-component': helloComponet
// }
//})
//app.mount('#app')
//※コンポーネント名　→ ●●-●● の2単語で記載　1単語だと既存のhtmlとかぶるため

//■コンポーネントで機能作成 ボタン押したらボタンラベルがカウントアップ
//Vueインスタンスの中何もいらないやん。。。
//
//const buttonCounter ={
//  template: '<div><span>count: </span><button v-on:click="countUp">{{ counter }}</button></span></div>',
//  data : () => ({ counter : 0 }),
//  methods : {
//     countUp: function(){
//         this.counter++
//     }
// }
//const app = Vue.createApp({
//  data: () =>({
//
//  }),
//  components: {
//   'button-component': buttonCounter
// }
//})
//html
//<button-counter></button-counter>

//■transitionクラスが必要な理由は？　　普通にcssにid定義じゃだめなの？　トランジションは表示非表示？