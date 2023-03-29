<template>
  <img alt="Vue logo" src="./assets/logo.png" width="100" />
  <DemoComponent />
  <CompositionCount />
</template>

<script>
import DemoComponent from "./components/DemoComponent.vue";
import CompositionCount from "./components/CompositionCount.vue";

export default {
  name: "App",
  components: {
    DemoComponent,
    CompositionCount,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
