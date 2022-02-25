import { reactive, Ref, readonly, toRef, computed, ComputedRef, watch, watchEffect } from 'vue';

export interface IUseCounterOptions {
  initialValue?: number;
}

export interface IUseCounter {
  value: Readonly<Ref<number>>;
  isGreaterThan5: Readonly<Ref<boolean>>;
  increment: () => void;
  decrement: () => void;
}

export function useCounter(options?: IUseCounterOptions): IUseCounter {
  const state = reactive({
    counter: options?.initialValue ?? 0
  });

  watch<number>(() => state.counter, (newVal, oldVal) => {
    console.log('The number changed');
    console.log(newVal);
    console.log(oldVal);
  });

  watchEffect(() => {
    console.log('counter is ' + state.counter);
  });

  const isGreaterThan5: ComputedRef<boolean> = computed(() => state.counter > 5);

  const increment = () => {
    state.counter++;
  };

  const decrement = () => {
    state.counter--;
  };

  return {
    value: readonly(toRef(state, 'counter')),
    isGreaterThan5,
    increment,
    decrement
  };
}