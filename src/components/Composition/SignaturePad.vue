<template>
  <canvas
    @mousedown="mousedownHandler"
    @mousemove="mousemoveHandler"
    @mouseout="mouseoutHandler"
    @mouseup="mouseupHandler"
  ></canvas>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignaturePad',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      required: true,
      type: null
    }
  },
  data() {
    return {
      state: {
        /** @type {CanvasRenderingContext2D} */
        ctx: null,
        /** @type {boolean} */
        sign: false,
        /** @type {number} */
        prevX: 0,
        /** @type {number} */
        prevY: 0
      }
    };
  },
  modelValue(model) {
    if ( !model ) {
      this.state.ctx.clearRect(0, 0, this.$el.width, this.$el.height);
    }
  },
  mounted() {
    this.state.ctx = this.$el.getContext('2d');
    this.state.ctx.strokeStyle = 'black';
    this.state.ctx.lineWidth = 2;
  },
  methods: {
    /**
     * @param {MouseEvent} $event
     */
    mousedownHandler($event) {
      console.log('mousedownHandler');
      this.state.sign = true;
      this.state.prevX = $event.offsetX;
      this.state.prevY = $event.offsetY;
    },
    /**
     * @param {MouseEvent} $event
     */
    mousemoveHandler($event) {
      if ( this.state.sign ) {
        const currentX = $event.offsetX;
        const currentY = $event.offsetY;
        this.draw(this.state.prevX, this.state.prevY, currentX, currentY);

        this.state.prevX = currentX;
        this.state.prevY = currentY;
      }
    },
    /**
     * @param {MouseEvent} $event
     */
    mouseoutHandler($event) {
      this.state.sign = false;
    },
    /**
     * @param {MouseEvent} $event
     */
    mouseupHandler($event) {
      this.state.sign = false;
    },
    /**
     * @param {number} prevX
     * @param {number} prevY
     * @param {number} curX
     * @param {number} curY
     * @returns {void}
     */
    draw(prevX, prevY, curX, curY) {
      this.state.ctx.beginPath();
      this.state.ctx.moveTo(prevX, prevY);
      this.state.ctx.lineTo(curX, curY);
      this.state.ctx.closePath();
      this.state.ctx.stroke();

      const img = this.$el.toDataURL('img/png').replace('image/png', 'image/octet-stream');
      console.log(img);
      this.$emit('update:modelValue', img);
    }
  }
});
</script>

<style scoped>
canvas {
  border: 1px solid black;
  background-color: white;
  cursor: crosshair;
}
</style>