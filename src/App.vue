<template>
  <div id="app">
    <UserInput @enlarge-font-size="blogFontSize += 0.1" />
    <p :style="{ 'fontSize': blogFontSizePx }">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, veritatis.
    </p>
  </div>
</template>

<script lang="ts" setup>
import UserInput                                       from '@/components/UserInput.vue';
import { computed, reactive, ref, watch, watchEffect } from 'vue';

const blogFontSize = ref(5);
const blogFontSizePx = computed(() => `${ blogFontSize.value }px`);
</script>