<template>
  <TodoList :todos="todos" :add-todo="addTodo">
    <h1 class="red">Heading 1</h1>
    <h2>Heading 2</h2>
  </TodoList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  components: {
    TodoList,
  },

  data() {
    const todos = [
      {
        id: 1,
        name: "todo 1",
      },
    ];
    return {
      todos,
    };
  },

  methods: {
    addTodo() {
      const todo = {
        id: 2,
        name: "Todo 2",
      };

      this.todos.push(todo);
    },
  },
});
</script>

<style>
.red {
  color: red;
}
</style>
