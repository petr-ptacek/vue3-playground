<template>
  <Box label="Circle Component"
       class="box--circle" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box                 from '@/components/Box.vue';

export default defineComponent({
  name: 'CircleBox',
  components: { Box }
});
</script>

<style scoped>
.box--circle {
  border-radius: 50%;
}
</style>