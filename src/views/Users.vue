<template>
  <section class="users-view">
    <header class="users-view__header">
      <h1 class="heading">Users</h1>
      <button class="btn btn--primary"
              @click="goToHomeHandler">
        Go To Home
      </button>
    </header>

    <div class="users-view__content">
      <ul class="list">
        <li v-for="user of users"
            :key="user.id"
            class="list__item">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent }     from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { RouteNames }          from '@/router';
import users                   from '@/assets/users.json';
import { IUser }               from '@/typings/shared.d.ts';

export default defineComponent({
  name: 'UsersView',
  setup() {
    const router = useRouter();
    const route = useRoute();

    const goToHomeHandler = () => {
      router.push({
        name: RouteNames.home
      });
    };

    return {
      goToHomeHandler,
      users: users as IUser[]
    };
  }
});
</script>