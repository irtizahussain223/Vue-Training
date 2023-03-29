<template>
  <h3>Vue JS Demo Session</h3>

  <div>
    <h4>(1) DOM Refs in Vue JS</h4>
    <label>Name: </label>
    <input type="text" ref="nameRef" v-model="name" />
    <button v-on:click="onSubmit">submit</button>
  </div>

  <p>--------------------------------------------</p>

  <div>
    <h4 v-once>(2) Count Component with initial value: {{ count }}</h4>
    <p>Count: {{ count }}</p>
    <button v-on:click="incrementCount">Increment</button>
    <button @click="decrementCount">Decrement</button>
    <p v-if="isEven">Even Number</p>
    <p v-else-if="!isEven">Odd Number</p>
  </div>

  <p>--------------------------------------------</p>

  <div>
    <h4>(3) Directives we are covering:</h4>
    <DirectiveListing v-bind:listing="directiveListing" />
  </div>
</template>

<script>
import DirectiveListing from "./DirectiveList.vue";
export default {
  components: {
    DirectiveListing: DirectiveListing,
  },
  data() {
    return {
      count: 0,
      isEven: false,
      directiveListing: [
        { id: 1, title: "for", purpose: "looping items" },
        { id: 2, title: "show", purpose: "Hide/Unhide display" },
        { id: 3, title: "on", purpose: "handling events" },
        { id: 2, title: "if", purpose: "rendering html/component" },
        { id: 5, title: "bind", purpose: "bind data to html/components" },
        {
          id: 6,
          title: "memo",
          purpose: "memoize values to prevent rerenders",
        },
        {
          id: 6,
          title: "once",
          purpose: "renders only once and skip future updates",
        },
      ],
      name: ""
    };
  },
  methods: {
    incrementCount() {
      this.count = this.count + 1;
    },
    decrementCount() {
      if (this.count !== 0) {
        this.count = this.count - 1;
      }
    },
    onSubmit() {
      alert(`
        value from dom ref: ${this.$refs.nameRef.value} 
        value from v-model: ${this.name}
      `);
    },
  },
  watch: {
    count(currentValue) {
      if (currentValue === 0) {
        this.isEven = false;
      } else {
        this.isEven = currentValue % 2 === 0;
      }
    },
  },
};
</script>
