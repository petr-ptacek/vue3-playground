<template>
  {{ message }}
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('Hello world.');
</script>
