<template>
  <div class="box">
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Box',
  props: ['label']
});
</script>

<style scoped>
.box {
  padding: 5rem;
  background-color: coral;
  color: white;
}
</style>