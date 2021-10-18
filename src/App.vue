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
