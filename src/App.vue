<template>
  <TheNavigation />
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import {
  defineComponent
}                    from 'vue';
import TheNavigation from '@/components/TheNavigation.vue';

export default defineComponent({
  name: 'App',
  setup() {
    return {};
  },
  components: {
    TheNavigation
  }
});
</script>
