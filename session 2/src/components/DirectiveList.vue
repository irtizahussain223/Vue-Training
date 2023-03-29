<template>
  <!-- Using :key instead of v-bind:key -->
  <ul v-memo="[listing]" v-for="item in listing" :key="item.id">
    <li v-hover v-on:click="selectItem($event, item.title)" style="color:black;">
      {{ $filters.directivePrefix(item.title) }} -> {{ item.purpose }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["listing"],
  methods: {
    selectItem(e, item) {
      // console.log(attr);
      console.log(e.target);
      alert(`You clicked on ${item} directive.`);
    },
  },
  mounted() {
    console.log(this.$attrs);
  }
};
</script>
