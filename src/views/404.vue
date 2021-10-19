<template>
  <div class="view-404">
    <h1>Not Found</h1>
    <button class="btn btn--primary"
            @click.prevent="goHomeHandler">
      Home
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter }       from 'vue-router';
import { RouteNames }      from '@/router';

export default defineComponent({
  name: 'NotFound',
  setup() {
    const router = useRouter();

    const goHomeHandler = () => {
      router.push({ name: RouteNames.home });
    };

    return {
      goHomeHandler
    };
  }
});
</script>

<style scoped>
.view-404 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 5rem;
}
</style>