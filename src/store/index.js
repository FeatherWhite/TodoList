import Vue from "vue";
import Vuex from "vuex";
import { getAllTodos, postTodo, deleteTodo, updateTodo } from "@/network/home";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    userName: ""
    //为新生成的todo分配id
    // id: 1,
  },
  mutations: {
    // addTodo(state) {
    // console.log("添加一个todo");
    // console.log(state.todos);
    // state.todos.unshift(todo);
    // },
    getAllTodos(state) {
      let todos = [];
      let userName = localStorage.name;
      getAllTodos(userName).then((res) => {
        res.data.forEach((item) => {
          let todo = {
            id: item.id,
            content: item.name,
            isDone: item.isComplete,
          };
          todos.unshift(todo);
        });
        state.todos = todos;
        // console.log(todos);
      });
    },
    // updateTodo(state, todo) {
    //   state.todos.forEach((item) => {
    //     if (item.id === todo.id) {
    //       if (item.isDone === todo.isDone && item.content === todo.content) {
    //         return;
    //       } else {
    //         item = todo;
    //         console.log(item.isDone);
    //       }
    //       // console.log(item.isDone);
    //     }
    //   });
    // },
    // deleteTodo(state, id) {
    // let index = 0
    // state.todos.forEach((item) => {
    //   if (item.id === id) {
    //     state.todos.splice(index,1)
    //   }
    //   index++
    // })
    //   state.todos = state.todos.filter((todo) => todo.id !== id);
    // },
    removeCompletedTodo(state) {
      state.todos = state.todos.filter((todo) => !todo.isDone);
    },
    storeUserName(state,userName){
      state.userName = userName
    }
  },
  actions: {
    getAllTodos({ commit }) {
      commit("getAllTodos");
    },
    addTodo({ commit }, todoThing) {
      let userName = localStorage.name;
      if (!todoThing || userName == '') {
        return;
      }
      let todo = {
        // id: state.id,
        userName: userName,
        todoThing: todoThing,
        isComplete: false,
      };
      // state.id++;
      postTodo(todo).then(() => {
        commit("getAllTodos");
      }).catch((err)=>{
        console.log(err);
      });

      // console.log("生成todo");
    },
    updateTodo({ commit }, todo) {
      if (!todo) {
        return;
      }
      updateTodo(todo).then(() => {
        commit("getAllTodos");
      });
    },
    deleteTodo({ commit }, id) {
      deleteTodo(id).then(() => {
        commit("getAllTodos");
      });
    },
    removeCompletedTodo({ commit }) {
      commit("removeCompletedTodo");
    },
    storeUserName({ commit },userName) {
      commit("storeUserName",userName);
    }
  },
  modules: {},
});

export default store
