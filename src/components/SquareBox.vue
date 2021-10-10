<template>
  <Box label="Square Component"
       class="box--square" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box                 from '@/components/Box.vue';

export default defineComponent({
  name: 'SquareBox',
  components: { Box }
});
</script>

<style scoped>
.box--square {
}
</style>