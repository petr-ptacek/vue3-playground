<template>
  <span class="go-back">
    <button @click="$router.back()">go back</button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GoBack'
});
</script>