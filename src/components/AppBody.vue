<template>
  <div>
    <CompositionExample />
  </div>
</template>

<script lang="ts">
import { defineComponent }    from 'vue';
import CompositionExample     from '@/components/Composition/Example.vue';

export default defineComponent({
  name: 'AppHeader',
  data() {
    return {};
  },
  methods: {},
  components: { CompositionExample }
});
</script>