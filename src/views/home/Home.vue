<template>
  <div class="home">
    <nav-bar>
      <v-img
        slot="left-one"
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      >
      </v-img>
      <v-img
        slot="left-two"
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
      
      <v-btn slot="right-one" target="_blank" text>
        <router-link
          to="/login"
          v-show="userName === '' || typeof userName == 'undefined'"
          class="mr-1 white--text text-decoration-none"
          >登录
        </router-link>

        <router-link
          to="/user"
          v-show="userName !== '' && typeof userName !== 'undefined'"
          class="mr-1 white--text text-decoration-none"
          >{{ userName }}
        </router-link>
      </v-btn>
      <v-btn slot="right-two" target="_blank" text>
        <router-link
          to="/register"
          v-show="userName === '' || typeof userName == 'undefined'"
          class="mr-1 white--text text-decoration-none"
          >注册
        </router-link>
        <router-link
          to="/logout"
          v-show="userName !== '' && typeof userName !== 'undefined'"
          class="mr-1 white--text text-decoration-none"
          >注销
        </router-link>
      </v-btn>
    </nav-bar>
    <todo-list-input
      placedText="接下来要做"
      v-model="todoThing"
      @onAddTodo="addTodo"
    >
    </todo-list-input>
    <!-- <todo-list :key="i" v-for="(todo,i) in todos" :content="todo.content"
        @updateContent="updateContent" @editing="editing(todo)"
        @delete="deleteTodo(todo)" v-model="todo.isDone"></todo-list> -->
    <todo-list :todos="todos"></todo-list>
    <todo-list-bottom-bar
      :things="todos.length"
      :remaining="remaining"
    ></todo-list-bottom-bar>
  </div>
</template>

<script>
// @ is an alias to /src
//navbar
import NavBar from "@/components/common/navbar/NavBar";
//todo
import TodoListInput from "@/components/content/todolist/TodoListInput";
import TodoList from "@/components/content/todolist/TodoList";
import TodoListBottomBar from "@/components/content/todolist/TodoListBottomBar";

export default {
  components: {
    TodoListInput,
    TodoList,
    TodoListBottomBar,
    NavBar,
  },
  data() {
    return {
      todoThing: "",
      // todos: this.$store.state.todos,
    };
  },
  created() {
    if (!this.userName) {
      this.$router.push("login")
    }
    this.$store.dispatch("getAllTodos", this.userName);
  },
  computed: {
    userName() {
      return localStorage.name;
    },
    todos() {
      return this.$store.state.todos;
    },
    remaining() {
      return this.todos.filter((todo) => !todo.isDone).length;
    },
  },
  methods: {
    // 输入框中按下回车键触发
    // 添加一个代办事项

    addTodo() {
      // console.log(this.todoThing);
      // 添加一个Todo,生成Todo对象的工作在store中完成
      this.$store.dispatch("addTodo", this.todoThing);
      // 清空input中的文字
      this.todoThing = "";
      // this.todos = this.$store.state.todos
    },
  },
};
</script>

<style>
@import "https://unpkg.com/todomvc-app-css@2.1.0/index.css";
body {
  max-width: 100%;
}
/* @import "/assets/css/todo.css"; */
</style>
