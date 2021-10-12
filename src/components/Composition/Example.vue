<template>
  <div class="compositionApiExample">
    <!--    <CounterDisplay :initial-value="0" />-->
    <!--    <input type="text"-->
    <!--           v-model="state.bookName"-->
    <!--    >-->
    <!--    <hr />-->
    <!--    <Book :name="state.bookName" />-->
    <SignaturePad v-model="state.canvas" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';

import Book           from '@/components/Composition/Book.vue';
import CounterDisplay from '@/components/Composition/CounterDisplay.vue';
import SignaturePad   from '@/components/Composition/SignaturePad.vue';

export default defineComponent({
  name: 'CompositionApiExample',
  data() {
    return {
      state: {
        bookName: 'A Composition Api Book',
        canvas: null
      }
    };
  },
  components: {
    Book,
    CounterDisplay,
    SignaturePad
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