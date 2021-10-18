<template>
  <nav class="navigation">
    <ul class="navigation__items">
      <li v-for="route of routes"
          :key="route.name"
          class="navigation__item">
        <router-link
          tag="a"
          :to="{ name: route.name }"
          class="navigation__link"
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

<style scoped>
.navigation {
  padding: 2rem 3rem;
  font-size: 2rem;
}

.navigation__items {
  display: flex;
  flex-direction: row;
}

.navigation__item {
  font-weight: 700;
  list-style: none;
  color: white;
  background-color: orangered;
  border-radius: 4px;
  transition: all 0.2s linear;
}

.navigation__link {
  padding: 1rem 2rem;
  text-decoration: none;
  display: block;
}

.navigation__item:hover {
  background-color: cadetblue;
}

.navigation__item:not(:last-child) {
  margin-right: 2rem;
}
</style>