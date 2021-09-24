<template>
  <div class="cards-dashboard">
    <Card v-for="card of state.cards"
          :key="card.id">
      <template #header>
        <span>Card #{{ card.id }}</span>
      </template>
      <p>
        {{ card.content }}
      </p>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card                from './Card.vue';

export default defineComponent({
  name: 'cards-dashboard',
  data() {
    return {
      state: {
        cards: [
          {
            id: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 3,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 4,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 5,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 6,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 7,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 8,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 9,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 10,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 11,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          },
          {
            id: 12,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto culpa dicta exercitationem molestias nesciunt non quas quisquam saepe tempora?'
          }
        ]
      }
    };
  },
  components: {
    Card
  }
});
</script>

<style scoped>
.cards-dashboard {
  padding: 5rem;
  background-color: orangered;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
}
</style>