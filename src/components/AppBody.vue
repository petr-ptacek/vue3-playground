<template>
  <div>
    <TheInput
      v-model:age="age"
      v-model:name="name"
    />

    <pre>
      {{ users }}
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheInput            from '@/components/TheInput.vue';

export default defineComponent({
  name: 'AppHeader',
  inject: ['users'],
  data() {
    return {
      age: 28,
      name: ''
    };
  },
  methods: {},
  components: {
    TheInput
  }
});
</script>