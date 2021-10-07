<template>
  <AppLayout />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import AppLayout                     from '@/components/AppLayout.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      state: {
        users: [
          'Joe Doe'
        ]
      }
    };
  },
  created(): void {
    setTimeout(() => this.state.users.push('Petr Ptacek'), 5000);
  },
  provide() {
    return {
      users: computed(() => this.state.users)
    };
  },
  components: {
    AppLayout
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
