<template>
  Count: {{ count }}
  <button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent, toRef, defineExpose, ref } from 'vue';

export default defineComponent({
  name: 'CounterDisplay',
  props: {
    initialValue: {
      type: Number
    }
  },
  setup(props, ctx) {
    const count = ref(0);

    return {
      count
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
});
</script>