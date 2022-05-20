<template>
  <li class="nav-item">
    <router-link to="/home" tag="a" class="nav-link">
      <span>
        Home
      </span>
    </router-link>
  </li>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.nav-item {
  @apply text-white hover:text-orange-600;
}

.nav-link {
  @apply block px-3 py-2;
}
</style>