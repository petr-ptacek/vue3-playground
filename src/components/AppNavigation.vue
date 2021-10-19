<template>
  <nav class="app-navigation">
    <ul class="app-navigation__items">
      <li v-for="route of routes"
          :key="route.name"
          class="app-navigation__item">
        <router-link
          tag="a"
          :to="{ name: route.name }"
          class="app-navigation__link"
        >
          {{ route.meta.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter }       from 'vue-router';
import { RouteNames }      from '@/router';

export default defineComponent({
  name: 'AppNavigation',
  setup() {
    const routes = useRouter()
      .getRoutes()
      .filter(
        route => [RouteNames.home, RouteNames.users].includes(route.name)
      );

    return {
      routes
    };
  }
});
</script>