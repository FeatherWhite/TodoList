import { request } from "./request";
// import {getLocal} from '@/common/utils';
// import store from '@/store';

const url = "/api/TodoItems/";

//获取所有的Todo
export function getAllTodos(userName) {
  return request({
    method: "get",
    url: url + "my/" + userName,
  });
}

//添加Todo
export function postTodo(Todo) {
  return request({
    method: "post",
    url: url,
    data: {
      userName: Todo.userName,
      name: Todo.todoThing,
      isComplete: Todo.isComplete,
    },
  });
}

//删除Todo
export function deleteTodo(id) {
  return request({
    method: "delete",
    url: url + id,
    // data: {
    //   id: id
    // }
  });
}

//更新Todo
export function updateTodo(todo) {
  return request({
    method: "put",
    url: url + todo.id,
    data: {
      id: todo.id,
      name: todo.content,
      isComplete: todo.isDone,
    },
  });
}
