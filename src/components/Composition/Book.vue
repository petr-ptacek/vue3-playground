<template>
  <div>
    <h1>Book</h1>
    <h2>Name: {{ name }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, toRef } from 'vue';

export default defineComponent({
  name: 'Book',
  props: {
    name: String
  },
  setup(props, ctx: SetupContext) {
    // const name = toRef(props, 'name');

    return {
      // name
    };
  }
});
</script>