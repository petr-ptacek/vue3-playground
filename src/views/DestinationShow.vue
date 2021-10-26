<template>
  <div>
    <section class="destination"
             v-if="destination"
    >
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${ destination.image }`"
             :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <section class="experiences"
             v-if="destination"
    >
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience of destination.experiences"
          :key="experience.slug"
          :to="{ name: `experience.show`, params: { experienceSlug: experience.slug }}"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>

      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Destination }                    from '@/typings';
import ExperienceCard                     from '@/components/ExperienceCard.vue';
import GoBack                             from '@/components/GoBack.vue';

export default defineComponent({
  name: 'DestinationShow',
  props: {
    id: { type: Number as PropType<number>, required: true },
    slug: { type: String as PropType<string>, required: true }
  },
  setup(props) {
    const destination = ref<Destination | null>(null);
    const fetchDestinationData = async (): Promise<void> => {
      const response = await fetch(`https://travel-dummy-api.netlify.app/${ props.slug }`);
      destination.value = await response.json();
    };

    fetchDestinationData();

    return {
      destination
    };
  },
  components: {
    ExperienceCard,
    GoBack
  }
});
</script>