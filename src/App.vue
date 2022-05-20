<template>
  <div class="flex flex-col w-full h-screen">
    <header class="shrink-0">
      <TheNav />
    </header>

    <main class="w-full h-full">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import TheNav from '@/components/TheNav.vue';
</script>