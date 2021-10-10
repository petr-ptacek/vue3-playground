<template>
  <div class="transition-and-animation">
    <!--    <button class="btn"-->
    <!--            @click="active = !active">-->
    <!--      Fade Toggle-->
    <!--    </button>-->

    <!--    <transition appear-->
    <!--                name="bounce"-->
    <!--                mode="out-in">-->
    <!--      <div v-if="active"-->
    <!--           key="box1"-->
    <!--           class="box">-->
    <!--        Box1-->
    <!--      </div>-->
    <!--      <div v-else-->
    <!--           key="box2"-->
    <!--           class="box">-->
    <!--        Box2-->
    <!--      </div>-->
    <!--    </transition>-->

    <select v-model="activeComponent"
            style="margin-bottom: 5rem">
      <option :value="SquareBoxComponent">Square Box</option>
      <option :value="CircleBoxComponent">Circle Box</option>
    </select>

    <transition name="bounce"
                appear
                mode="out-in"
    >
      <component :is="activeComponent" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, markRaw } from 'vue';
// import Box                 from '@/components/Box.vue';
import SquareBox                                          from '@/components/SquareBox.vue';
// import CircleBox                                 from '@/components/CircleBox.vue';

export default defineComponent({
  name: 'TransitionAndAnimation',
  data() {
    const SquareBoxComponent = markRaw(SquareBox);

    return {
      active: false,
      activeComponent: SquareBoxComponent,
      SquareBoxComponent,
      CircleBoxComponent: markRaw(defineAsyncComponent(
        () => import('@/components/CircleBox.vue')
      ))
    };
  },
  components: {}
});
</script>

<style scoped>
.transition-and-animation {
  font-size: 2rem;
  border: 1px dashed black;
  padding: 5rem;
  border-radius: 12px;
}

.box {
  margin: 2.5rem;
  padding: 5rem;
  background-color: coral;
  color: white;
  font-family: sans-serif;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s linear;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 1s linear;
}

.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.6s;
}

.bounce-leave-active {
  animation: bounce-in 0.6s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>