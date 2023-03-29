<script>
import { reactive, watch } from "vue";

export default {
  /*
    Use ref imported by vue to handle primitive types, with reactive state
    Use reactive for object types which need reactivity
  */
  setup() {
    const state = reactive({
      count: 0,
      isEven: false,
    });

    watch(
      () => state.count,
      (value) => {
        if (value === 0) {
          state.isEven = false;
        } else {
          state.isEven = value % 2 === 0;
        }
        console.log(state.isEven);
      }
    );

    function incrementCount() {
      state.count = state.count + 1;
      console.log(state.count);
    }

    function decrementCount() {
      if (state.count !== 0) {
        state.count = state.count - 1;
      }
    }

    return {
      state,
      incrementCount,
      decrementCount,
    };
  },
};
</script>

<template>
  <div>
    <h3>(4) Composition Count component</h3>
    <p>Count: {{ state.count }}</p>
    <button @click="incrementCount">Increment</button>
    <button @click="decrementCount">Decrement</button>
    <p v-if="state.isEven">Even Number</p>
    <p v-else-if="!state.isEven">Odd Number</p>
  </div>
</template>
