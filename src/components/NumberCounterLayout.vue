<template>
  <div>
    <slot></slot>
  </div>

  <div>
    <transition-group name="list-complete">
      <span v-for="item in count" :key="item" class="list-complete-item">{{
        item
      }}</span>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    count: [Number, Array],
  },
});
</script>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
