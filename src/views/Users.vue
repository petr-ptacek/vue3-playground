<template>
  <section class="users">
    <h1 class="users__heading">Users</h1>

    <div class="users__content">
      <button @click="goToHomeHandler">Go To Home</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter }       from 'vue-router';
import { RouteNames }      from '@/router';

export default defineComponent({
  name: 'UsersView',
  setup() {
    const router = useRouter();

    const goToHomeHandler = () => {
      router.push({
        name: RouteNames.home
      });
    };

    return {
      goToHomeHandler
    };
  }
});
</script>

<style scoped>
.users {

}

.users__heading {
  font-size: 3rem;
}

.users__content {
  padding: 3rem;
}
</style>