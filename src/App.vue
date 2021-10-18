<template>
  <AppHeader />

  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import {
  defineComponent
}                from 'vue';
import AppHeader from '@/components/AppHeader.vue';

export default defineComponent({
  name: 'App',
  setup() {
    return {};
  },
  components: {
    AppHeader
  }
});
</script>

<style>
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
