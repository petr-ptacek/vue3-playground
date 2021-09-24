<template>
  <div class="card">
    <div class="card__header-wrapper">
      <h1 class="card__header">
        <slot name="header" />
      </h1>
    </div>
    <div class="card__content-wrapper">
      <div class="card__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'card',
  emits: ['click'],
  data() {
    return {};
  },
  methods: {
    clickHandler() {
      this.$emit('click');
    }
  }
});
</script>

<style scoped>
.card {
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #272727;
  color: #fff;
  //max-width: 20vw;
}

.card__header-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
}

.card__header {
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 0.5rem;
}

.card__header::before,
.card__header::after {
  position: absolute;
  content: "";
  display: block;
  height: 1px;
  width: 105%;
  transform: translateX(-2.5%);
  background-color: #fff;
}

.card__header::before {
  left: 0;
  top: 0;
}

.card__header::after {
  left: 0;
  bottom: 0;
}

.card__content-wrapper {
  margin-top: 0.8rem;
}

.card__content {
}

.card__paragraph {
  padding: 0.5rem;
  font-size: 1.5rem;
  text-align: justify;
}
</style>