<template>
  <div class="compositionApiExample">

  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext
} from 'vue';

interface IEmitOptions {
  click(message: string): void;

  dblclick(message: string): void;
}

export default defineComponent({
  name: 'CompositionApiExample',
  setup(props, ctx: SetupContext<IEmitOptions>) {

  }
});
</script>

<style scoped>
.compositionApiExample {
  font-size: 1.6rem;
  padding: 5rem;
  border: 1px dashed black;
}
</style>