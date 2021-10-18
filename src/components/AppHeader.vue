<template>
  <header>
    <AppNavigation />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavigation       from '@/components/AppNavigation.vue';

export default defineComponent({
  name: 'AppHeader',
  components: { AppNavigation }
});
</script>

<style scoped>

</style>