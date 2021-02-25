<template>
<div>
    <input class="new-todo" type="text" 
    :placeholder="placedText" v-autofocus 
    @keyup.enter="addTodo" :value="value" 
    @input="$emit('input',$event.target.value)">
</div>
</template>

<script>
export default {
  props: {
      placedText: {
          default: ""
      },
      value: {
          default: ""
      }
  },
  methods: {
      addTodo() {
          this.$emit('onAddTodo')
      }
  },
    // 其他选项省略
  directives: {
    autofocus: {
      // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
      inserted: function(el) {
        // el: 指令所绑定的元素，可以用来直接操作 DOM
        el.focus();
      }
    }
  }
}
</script>

<style scoped>
</style>