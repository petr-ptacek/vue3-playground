<template>
  <TheNavigation />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="routeViewKey" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent
}                    from 'vue';
import TheNavigation from '@/components/TheNavigation.vue';
import { useRoute }  from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute();

    const routeViewKey = computed(() => {
      console.log(route.name);
      if ( ['destination.show', 'experience.show'].includes(route.name as string) ) {
        return route.params.id;
      } else {
        return route.path;
      }
    });

    return {
      routeViewKey
    };
  },
  components: {
    TheNavigation
  }
});
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>