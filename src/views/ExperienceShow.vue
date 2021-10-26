<template>
  <section v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${ experience.image }`" :alt="experience.name">
    <p>
      {{ experience.description }}
    </p>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import sourceData                              from '@/assets/data.json';
import { Destination, DestinationExperience }  from '@/typings';

export default defineComponent({
  name: 'ExperienceShow',
  props: {
    id: {
      type: Number as PropType<number>,
      required: false
    },
    experienceSlug: {
      type: String as PropType<string>,
      required: false
    }
  },
  setup(props) {
    const destination = computed<Destination | undefined>(() => {
      return sourceData.destinations.find(destination => destination.id === props.id);
    });

    const experience = computed<DestinationExperience | undefined>(() => {
      return destination?.value?.experiences.find(experience => {
        return experience.slug === props.experienceSlug;
      });
    });

    return {
      destination,
      experience
    };
  }
});
</script>