var app = new Vue({
    el: '#app1',
    data: {
        message: 'Hellow Vue.js!'
    }
})

var app = new Vue({
    el: '#app2',
    data: {
        message: 'Hellow Vue.js!',
        count: 2,
        user: {
            name: 'tateishishozo',
            age: 16
        },
        family: ['shozo','anna','yuzu','kaya']
    }
})

var app = new Vue({
    el: '#app3',
    data: {
        toggle: 1
    }
})

var app = new Vue({
    el: '#app4',
    data: {
        families: ['shozo','anna','yuzu','kaya']
    }
})

var app = new Vue({
    el: '#app5',
    data: {
        kazoku: {
            father: 'shozo',
            mother: 'anna',
            child1: 'yuzu',
            child2: 'kaya'
        }
    }
})

var app = new Vue({
    el: '#app6',
    data: {
        now: ''
    },
    methods: {
        onclick: function(){
           this.now = new Date().toLocaleString();
        }
    }
})

var app = new Vue({
    el: '#app7',
    data: {
        hoge: 'こんには'
    }
})

Vue.component('hello-component',{
    template: '<p>visa</P>'
})

var app = new Vue({
    el: '#app8',
})




var app = new Vue({
    el: '#app9',
    data: {
        url : 'https://jp.vuejs.org/index.html',
        test : true
    }
})