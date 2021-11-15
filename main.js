const app = new Vue({

    el: "#app",

    data:{

        todos: [
            {
                text: 'pagare le tasse',
                completed: true,
            },
            {
                text: 'rinnovare assicurazione',
                completed: false,
            },
            {
                text: 'fare il bucato',
                completed: false,
            },
        ],

        newTodo: '',
    },

    methods:{
        addTodo(){

            const todo = this.newTodo;

            if (todo !== '') {

                const newTodo = {
                    text: todo,
                    completed: false,
                } 

                /* per metterla al primo posto */
                this.todos.unshift(newTodo);

                this.newTodo = '';

                this.$refs.todoInput.focus();
            }
        }, 

        removeTodo(i){
            this.todos.splice(i, 1);
        },

        changeTodo(i){
            const todo = this.todos[i];

            if (todo.completed == true){
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        }
    },


});