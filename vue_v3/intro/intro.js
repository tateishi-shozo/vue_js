const app = Vue.createApp({
    data: () => ({
        newItem : '',
        todos : []
    }),
    methods: {
        addItem: function(event){
            // console.log('clicked!!')
            if(this.newItem === '' ) return
            let todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ''
        },
        deleteItem: function(index){
            this.todos.splice(index,1)
        }
    }
})
app.mount('#app')

//v-modelは双方向
//v-bindは　model→htmlへの一方通行