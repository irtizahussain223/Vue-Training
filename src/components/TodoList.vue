<template>
  <div>
    <slot>Todos</slot>
  </div>

  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
  </ul>

  <button @click="addTodos">Add todo</button>
</template>

<script lang="ts">
interface Todo {
  id: number;
  name: string;
}
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      required: true,
    },

    addTodo: {
      type: Function,
      required: true,
    },
  },

  //   emits: ["add-todo"],

  methods: {
    addTodos() {
      this.addTodo();
    },
  },
});
</script>
