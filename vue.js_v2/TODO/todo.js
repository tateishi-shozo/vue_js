var app = new Vue({
    el: '#app',
    data: {
        newitem:'',
        todos:[]
    },
    methods: {
        additem: function(event){
            if(this.newitem == '')return;

            var todo ={
                item: this.newitem,
                isdone: false
            };

            this.todos.push(todo);
            this.newitem = ''
        },
        deleteitem: function(index){
            this.todos.splice(index,1)
        }
    }
})