<template>
  <div>
    <TransitionAndAnimation />
  </div>
</template>

<script lang="ts">
import { defineComponent }    from 'vue';
import TransitionAndAnimation from '@/components/TransitionAndAnimation.vue';

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
  components: { TransitionAndAnimation }
});
</script>