<template>
  <button class="button"
          @click="clickHandler"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheButton',
  props: {
    label: {
      type: String,
      required: false,
      default: 'Click at me'
    }
  },
  emits: {
    'click': ({ message }: { message: string }) => {
      return !!message;
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click', { message: 'Clickd at the button' });
    }
  }
});
</script>

<style scoped>
.button {
  padding: 1rem 2rem;
  border: 1px solid #000;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  color: white;
  background-color: orangered;
}
</style>