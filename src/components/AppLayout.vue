<template>
  <div class="app-layout">
    <AppHeader class="app-header" />
    <AppBody class="app-body" />
    <AppFooter class="app-footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader           from './AppHeader.vue';
import AppBody             from './AppBody.vue';
import AppFooter           from './AppFooter.vue';

export default defineComponent({
  name: 'AppLayout',
  components: {
    AppHeader,
    AppBody,
    AppFooter
  }
});
</script>

<style>
.app-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem 1fr 8rem;
}

.app-header,
.app-footer {
  padding: 2rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
}

.app-header {
}

.app-footer {
}

.app-body {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>