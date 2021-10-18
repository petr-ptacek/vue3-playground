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
import { routes }          from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavigation',
  setup() {
    return {
      routes
    };
  }
});
</script>