<script lang="ts">
import type {
  Ref,
  SetupContext
} from 'vue';

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: 'AppHeader',
  setup(props, ctx: SetupContext) {
    const message: Ref<string> = ref('App Header');

    return {
      message
    };
  }
});
</script>

<template>
  <header class="app-header">
    {{ message }}
  </header>
</template>


<style scoped>
.app-header {
  color: #fff;
  font-size: 3rem;
  background-color: #212121;
  padding: 1rem 2rem;
}
</style>