import '@vue/runtime-core';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    MAGIC_NUMBER: number;
  }
}