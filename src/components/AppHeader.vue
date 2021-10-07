<template>
  <header class="app-header">
    {{ message }}
  </header>
</template>

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