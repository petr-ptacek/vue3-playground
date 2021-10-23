<template>
  <div id="nav">
    <router-link id="logo" to="/">
      Vue School Travel App
    </router-link>
    <router-link
      class="nav__link"
      v-for="destination of destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import sourceData                    from '@/assets/data.json';
import { Destination }               from '@/typings';

export default defineComponent({
  name: 'TheNavigation',
  setup() {
    const destinations: Ref<Destination[]> = ref(JSON.parse(JSON.stringify(sourceData.destinations)));

    return {
      destinations
    };
  }
});
</script>

<style lang="css">
#nav .nav__link.vue-school-active-link {
  color: red;
  border-bottom: 2px solid red;
}
</style>